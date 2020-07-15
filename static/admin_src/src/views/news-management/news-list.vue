<template>
  <div class="app-container">
    <VQueryContainer @keyEnter="_queryTable">
      <div slot="query">
        <el-form :inline="true" :model="this.tables.query.form" ref="sForm" size="small" @submit.native.prevent>
          <el-container class="form-container">
            <el-form-item label prop="nickName">
              <el-cascader placeholder="请选择新闻分类" clearable v-model="newsClassOptions.newsClassValue" :options="newsClassOptions.selectOption" :props="{ expandTrigger: 'hover' }" @change="_handleChange"></el-cascader>
            </el-form-item>
            <el-form-item label prop="merchantUid">
              <el-input clearable v-model.trim="this.tables.query.form.title" placeholder="新闻标题" style="width:300px;"></el-input>
            </el-form-item>
            <el-button-group style="padding-bottom:15px;">
              <el-button type="info" size="small" :loading="loading" @click="resetFields('sForm')">清空</el-button>
              <el-button type="primary" size="small" :loading="loading" @click="_queryDay('nowadays')">今天</el-button>
              <el-button type="primary" size="small" :loading="loading" @click="_queryDay('yesterday')">昨天</el-button>
              <el-button type="primary" size="small" :loading="loading" @click="_queryDay('theDayBeforeYesterday')">前天</el-button>
              <el-button type="primary" size="small" :loading="loading" @click="_queryDay('last7days')">最近七天</el-button>
              <el-button type="primary" :loading="loading" size="small" @click="_queryNews"><i class="iconfont icon-cf-c13 mini">&nbsp;</i>查询</el-button>
            </el-button-group>
          </el-container>
        </el-form>
      </div>
    </VQueryContainer>
    <el-table :data="tables.data" border size="mini">
      <el-table-column prop="id" label="编号" width="80"></el-table-column>
      <el-table-column prop="title" width="400" label="新闻标题">
        <template slot-scope="scope">
          <a target="_blank" style="color:#606266;text-decoration:underline" :href="`${$g.SITE_DOMAIN}/${scope.row.url}`">{{ scope.row.title }}</a>
        </template>
      </el-table-column>
      <el-table-column prop="pv" label="点击量"></el-table-column>
      <el-table-column prop="author" label="发布者"></el-table-column>
      <el-table-column prop="keywords" width="300" label="新闻关键词"> </el-table-column>
      <el-table-column prop="time" label="发布时间">
        <template slot-scope="scope">
          <!-- $tool.dateFormat(new Date(scope.row.time),'YYYY-MM-DD HH:mm:ss') -->
          <span>{{ $tool.dateFormat(new Date(scope.row.time), "YYYY-MM-DD HH:mm:ss") }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="option" label="操作" width="275">
        <template slot-scope="scope">
          <el-button-group>
            <el-button @click="$router.push({ name: 'addNews' })" type="primary" size="mini" icon="el-icon-document-add">新增</el-button>
            <el-button @click="$router.push({ name: 'addNews', query: { edit: scope.row.id } })" type="success" size="mini" icon="el-icon-edit">编辑</el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete">删除</el-button>
          </el-button-group>
        </template>
      </el-table-column>
      <div slot="append" v-html="tables.appendHtml"></div>
    </el-table>
    <div style="display:flex;justify-content:flex-end;margin-top:10px;">
      <el-pagination small :page-sizes="[10, 20, 50, 100]" @size-change="p => (this.tables.query.pageParams.pageSize = p) && this._queryNews()" background layout="total, sizes, prev, pager, next, jumper" @current-change="c => (this.tables.query.pageParams.pageNumber = c) && this._queryNews()" :total="tables.total" />
    </div>
  </div>
</template>

<script>
import VQueryContainer from "@/components/AuthContainer/QueryContainer";
import VDatePicker from "@/components/DatePicker/datePicker";
import { Vue, Component, Prop, Model, Watch, Emit } from "vue-property-decorator";
import { queryNewsClass, queryNews } from "@/api/news";
@Component({
  components: { VQueryContainer, VDatePicker },
  metas: {
    title: "新闻列表",
    titleTemplate: "%s - 超级管理后台系统"
  }
})
export default class OrderList extends Vue {
  loading = false;
  tables = {
    appendHtml: "",
    data: [],
    total: 10,
    query: {
      datePickerTime: [],
      pageParams: { pageSize: 10, pageNumber: 1 },
      form: { title: "" }
    }
  };
  newsClassOptions = {
    newsClassValue: "",
    selectOption: []
  };

  /** 获取所有新闻分类 */
  async _queryNewsClass() {
    let res = await queryNewsClass({ className: "" });
    if (!res.success) return this.$msg.error(res.data.msg);
    this.newsClassOptions.selectOption = res.data.filter((topItem, topIndex) => topItem.firstId == "0");
    this.newsClassOptions.selectOption.forEach(item => {
      item.children = [{ value: "", label: "全部" }];
      item.value = item.directoryName;
      item.label = item.title;
      res.data.forEach((topItem, topIndex) => {
        if (topItem.firstId == item.id) {
          item.children.push({ value: topItem.directoryName, label: topItem.title });
        }
      });
    });
  }
  // 获取新闻内容
  async _queryNews() {
    let res = await queryNews({ bigClass: "", ...this.tables.query.pageParams });
    if (!res.success) return this.$msg.error(res.data.msg);
    this.tables.data = res.data.data;
    this.tables.total = res.data.total;
  }
  // 清理from表单
  resetFields(form) {
    this.$refs[form].resetFields();
    this.tables.query.datePickerTime = [];
  }

  _queryDay(day) {
    //nowadays 今天 yesterday 昨天 theDayBeforeYesterday 前天 last7days最近7天
    this.tables.query.datePickerTime = [];
    let date = new Date();
    if (day === "nowadays") {
      let start = this.$tool.dateFormat(new Date(date.getTime()), "YYYY-MM-DD 00:00:00");
      let end = this.$tool.dateFormat(new Date(date.getTime()), "YYYY-MM-DD 23:59:59");
      this.tables.query.datePickerTime = [start, end];
    }
    if (day === "yesterday") {
      let start = this.$tool.dateFormat(new Date(date.getTime() - 1000 * 60 * 60 * 24 * 1), "YYYY-MM-DD 00:00:00");
      let end = this.$tool.dateFormat(new Date(date.getTime() - 1000 * 60 * 60 * 24 * 1), "YYYY-MM-DD 23:59:59");
      this.tables.query.datePickerTime = [start, end];
    }
    if (day === "theDayBeforeYesterday") {
      let start = this.$tool.dateFormat(new Date(date.getTime() - 1000 * 60 * 60 * 24 * 2), "YYYY-MM-DD 00:00:00");
      let end = this.$tool.dateFormat(new Date(date.getTime() - 1000 * 60 * 60 * 24 * 2), "YYYY-MM-DD 23:59:59");
      this.tables.query.datePickerTime = [start, end];
    }
    if (day === "last7days") {
      let start = this.$tool.dateFormat(new Date(date.getTime() - 1000 * 60 * 60 * 24 * 7), "YYYY-MM-DD 00:00:00");
      let end = this.$tool.dateFormat(date, "YYYY-MM-DD 23:59:59");
      this.tables.query.datePickerTime = [start, end];
    }
    this._queryTable();
  }

  _handleChange(params) {}

  async _queryTable() {
    this.tables.query.pageParams.pageNumber = 1;
    this._queryNews();
    // await this.$tool.sleep(2000);
  }

  async created() {
    await this.$nextTick();
    this._queryDay("nowadays");
    this._queryNewsClass();
    this._queryNews();
  }
}
</script>
<style scoped lang="scss">
.app-container /deep/ {
  .tableFooter {
    height: 45px;
    line-height: 45px;
    text-indent: 10px;
  }
}
</style>
