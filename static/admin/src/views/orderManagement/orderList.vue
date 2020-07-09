<template>
  <div class="app-container">
    <VQueryContainer @keyEnter="queryTable">
      <div slot="query">
        <el-form :inline="true" :model="searchForm" ref="searchForm" size="small" @submit.native.prevent>
          <el-container class="form-container">
            <el-form-item label prop="merchantUid">
              <el-input clearable v-model.trim="searchForm.merchantUid" placeholder="玩家ID" style="width:200px;"></el-input>
            </el-form-item>
            <el-form-item label prop="nickName">
              <el-input clearable v-model.trim="searchForm.nickName" placeholder="支付宝昵称" style="width:200px;"></el-input>
            </el-form-item>
            <el-form-item label prop="tradeNo">
              <el-input clearable v-model.trim="searchForm.tradeNo" placeholder="支付宝流水号" style="width:150px;"></el-input>
            </el-form-item>
            <el-form-item label prop="channelType">
              <el-select v-model="searchForm.channelType" placeholder="请选择" style="width:150px;">
                <el-option
                  v-for="item in [
                    { value: 1, label: '支付宝' },
                    { value: 2, label: '云闪付' },
                    { value: 3, label: 'QQ' },
                    { value: 4, label: '银行卡/易宝' },
                    { value: 5, label: '微信' },
                    { value: 6, label: '第三方汇聚微信' },
                    { value: 7, label: '汇发扫码' },
                    { value: 8, label: 'suTong扫码' },
                    { value: 9, label: 'daXiang大象支付' }
                  ]"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label prop="littlePayType">
              <el-select :disabled="searchForm.channelType !== 1" v-model="searchForm.littlePayType" placeholder="请选择" style="width:130px;">
                <el-option
                  v-for="item in [
                    { value: '', label: '全部' },
                    { value: '0', label: '支付宝扫码' },
                    { value: '1', label: '支付宝转网商' },
                    { value: '2', label: '支付宝红包' },
                    { value: '3', label: '支付宝转账' },
                    { value: '4', label: '银行卡直转' },
                    { value: '5', label: '支付宝聚合码' },
                    { value: '6', label: '支付宝口令红包' }
                  ]"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label prop="type">
              <el-select v-model="searchForm.type" placeholder="请选择" style="width:100px;">
                <el-option v-for="item in typesArr" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label>
              <el-switch v-model="searchForm.timeType" :active-value="1" :inactive-value="0" active-text="完成时间查询" inactive-text="申请时间查询" active-color="#13ce66" inactive-color="#13ce66"></el-switch>
            </el-form-item>
          </el-container>
          <el-container class="form-container">
            <el-form-item label prop="merchantOrderId">
              <el-input clearable v-model.trim="searchForm.merchantOrderId" placeholder="商户订单号" style="width:200px;"></el-input>
            </el-form-item>
            <el-form-item label prop="orderId">
              <el-input clearable v-model.trim="searchForm.orderId" placeholder="虎鲸订单号" style="width:200px;"></el-input>
            </el-form-item>
            <el-form-item label prop="merchantName">
              <el-input clearable v-model.trim="searchForm.merchantName" placeholder="商户名称" style="width:150px;"></el-input>
            </el-form-item>
            <el-form-item label prop="mark">
              <el-input clearable v-model.trim="searchForm.mark" placeholder="备注" style="width:150px;"></el-input>
            </el-form-item>
            <el-form-item label prop="status">
              <el-select v-model="searchForm.status" placeholder="订单状态" style="width:130px;">
                <el-option
                  v-for="item in [
                    { value: '', label: '订单状态' },
                    { value: 0, label: '待支付' },
                    { value: 92, label: '待处理' },
                    { value: 1, label: '已支付' },
                    { value: 2, label: '订单过期' },
                    { value: 5, label: '未知订单' },
                    { value: -1, label: '下单失败' }
                  ]"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label prop="isRepair">
              <el-select v-model="searchForm.isRepair" placeholder="补单状态" style="width:100px;">
                <el-option v-for="item in [{ value: '0', label: '补单状态' }, { value: '2', label: '未补单' }, { value: '1', label: '已补单' }]" :key="item.value" :label="item.label" :value="item.value"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label>
              <el-switch v-model="searchForm.timeZone" :active-value="1" :inactive-value="0" active-text="美东时间查询" inactive-text="北京时间查询" active-color="#13ce66" inactive-color="#13ce66"></el-switch>
            </el-form-item>
          </el-container>
          <el-container class="form-container">
            <el-form-item label prop="merchantName">
              <el-input clearable v-model.trim="searchForm.merchantId" placeholder="商户ID" style="width:200px;"></el-input>
            </el-form-item>
            <el-form-item label prop="datePickerTime">
              <v-datePicker ref="datePickerTime" v-model="datePickerTime" style="width:460px;"></v-datePicker>
            </el-form-item>
            <el-form-item label prop="orderMinMoney">
              <el-input clearable v-model.trim="searchForm.orderMinMoney" type="number" placeholder="订单额度" style="width:163px;"><i slot="suffix" class="iconfont icon-jine"></i></el-input>
            </el-form-item>
            <el-form-item label>-</el-form-item>
            <el-form-item label prop="orderMaxMoney">
              <el-input clearable v-model.trim="searchForm.orderMaxMoney" type="number" placeholder="订单额度" style="width:163px;"><i slot="suffix" class="iconfont icon-jine"></i></el-input>
            </el-form-item>
            <el-form-item label prop="plantformId">
              <el-select v-model.trim="searchForm.plantformId" placeholder="选择经销商" style="width:150px;">
                <el-option v-for="item in plantformIds" :key="item.id" :label="item.name" :value="item.id"> </el-option>
              </el-select>
            </el-form-item>
          </el-container>
          <el-button-group style="padding-bottom:15px;">
            <el-button plain size="small" style="border:1px solid #fff;">
              <b>
                当前在线：<span style="color:#409EFF;">支付宝({{ devicesOnlineInfoArr[0] || 0 }})</span>，<span style="color:#F52420;">云闪付({{ devicesOnlineInfoArr[1] || 0 }})</span>
              </b>
            </el-button>
            <el-button type="info" size="small" :loading="loading" @click="resetFields('searchForm')">清空</el-button>
            <el-button type="primary" size="small" :loading="loading" @click="_queryDay('nowadays')">今天</el-button>
            <el-button type="primary" size="small" :loading="loading" @click="_queryDay('yesterday')">昨天</el-button>
            <el-button type="primary" size="small" :loading="loading" @click="_queryDay('theDayBeforeYesterday')">前天</el-button>
            <el-button type="primary" size="small" :loading="loading" @click="_queryDay('last7days')">最近七天</el-button>
            <el-button type="primary" :loading="loading" size="small" @click="queryTable"><i class="iconfont icon-cf-c13 mini">&nbsp;</i>查询</el-button>
          </el-button-group>
        </el-form>
      </div>
    </VQueryContainer>
    <el-table :data="tables.data" border size="mini">
      <el-table-column prop="id" label="支付宝昵称|玩家ID">
        <template slot-scope="scope">
          <span>{{ scope.row.deviceName + "|" + scope.row.merchantUid }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="merchantName" label="商户名称"></el-table-column>
      <el-table-column prop="tradeTime" label="商户订单号|虎鲸订单号" width="290">
        <template slot-scope="scope">
          <span>{{ scope.row.merchantOrderId + "|" + scope.row.orderId }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="来源|类型">
        <template slot-scope="scope">
          <span>{{ scope.row.payName + "|" + (scope.row.type ? "提款" : "充值") }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="money" label="申请时间|完成时间" width="275">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime + "|" + scope.row.updateTime }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="mafterMoney" label="订单额度|实际额度">
        <template slot-scope="scope">
          <span>{{ scope.row.money + "|" + scope.row.amount }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="remark" label="订单状态">
        <template slot-scope="scope">
          <el-tag :type="scope.row._status[1]">
            <b>{{ scope.row._status[0] }}</b>
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="remark" label="是否补单">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.isRepair === 1" type="success">
            <b>{{ `已处理` }}</b>
          </el-tag>
          <el-tag v-else-if="scope.row.isRepair === 2" type="success">
            <b>{{ `已关联处理` }}</b>
          </el-tag>
          <el-tag v-else-if="scope.row.repairName" type="info">
            <b>{{ scope.row.repairName }}</b>
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="mark" label="备注"> </el-table-column>
      <el-table-column prop="remark" label="回调">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.notifyStatus === 0" type="danger"><b>否</b></el-tag>
          <el-tag v-else-if="scope.row.notifyStatus === 1" type="success"><b>是</b></el-tag>
          <el-tag v-else type="danger"><b>回调失败</b></el-tag>
        </template>
      </el-table-column>
      <div slot="append" v-html="tables.appendHtml"></div>
    </el-table>
    <div style="display:flex;justify-content:flex-end;margin-top:10px;">
      <el-pagination
        small
        :page-sizes="[10, 20, 50, 100]"
        @size-change="ps => (this.searchForm.size = ps) && this._plantformList()"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @current-change="current => (this.searchForm.current = current) && this._plantformList()"
        :total="tables.total"
      />
    </div>
  </div>
</template>

<script>
import VQueryContainer from "@/components/AuthContainer/QueryContainer";
import VDatePicker from "@/components/DatePicker/datePicker";
import { Vue, Component, Prop, Model, Watch, Emit } from "vue-property-decorator";
import { orderList, platformlist } from "@/api/plantform/plantform";
@Component({
  components: { VQueryContainer, VDatePicker },
  metas: {
    title: "报表查询",
    titleTemplate: "%s - 超级管理后台系统"
  }
})
export default class OrderList extends Vue {
  loading = false;
  devicesOnlineInfoArr = [];
  typesArr = [
    {
      value: 0,
      label: "充值"
    },
    {
      value: 1,
      label: "提款"
    }
  ];
  plantformIds = [];
  datePickerTime = [];
  searchForm = {
    plantformId: 0,
    channelType: 1,
    type: 0,
    timeType: 1, //0申请时间false 1完成时间 true
    timeZone: 0, //0北京时间 1美东时间 true
    deviceId: "", //金主id
    merchantUid: "", //玩家id
    nickName: "", //支付宝昵称
    merchantOrderId: "", //商户订单号
    orderId: "", //虎鲸订单号
    merchantName: "", //商户名称
    merchantId: "", //商户id
    status: "", //订单状态
    orderMinMoney: "", //订单最小额度
    orderMaxMoney: "", //订单最大额度
    mark: "", //备注
    isRepair: "", //是否补单 0未补单 1已补单
    tradeNo: "", //支付宝流水号
    unknowToday: 0, //是否是今天0表示是今天
    isComplete: 1, //查询时间 0申请时间 1完成时间
    littlePayType: "", //支付宝类型''全部 0支付宝扫码 1支付宝转网商 2支付宝红包 3支付宝转账 4银行卡直转
    current: 1,
    size: 10
  };
  form = {};
  tables = { appendHtml: "", data: [], total: 10 };

  @Watch("typesArr", { deep: true })
  handler(newVal) {
    this.searchForm.type = newVal[0].value;
  }

  resetFields(form) {
    this.$refs[form].resetFields();
    this.datePickerTime = [];
    this.searchForm.unknowToday = 1;
  }
  _queryDay(day) {
    //nowadays 今天 yesterday 昨天 theDayBeforeYesterday 前天 last7days最近7天
    this.datePickerTime = [];
    let date = new Date();
    if (day === "nowadays") {
      let start = this.$tool.dateFormat(new Date(date.getTime()), "YYYY-MM-DD 00:00:00");
      let end = this.$tool.dateFormat(new Date(date.getTime()), "YYYY-MM-DD 23:59:59");
      this.datePickerTime = [start, end];
      this.searchForm.unknowToday = 0;
    }
    if (day === "yesterday") {
      let start = this.$tool.dateFormat(new Date(date.getTime() - 1000 * 60 * 60 * 24 * 1), "YYYY-MM-DD 00:00:00");
      let end = this.$tool.dateFormat(new Date(date.getTime() - 1000 * 60 * 60 * 24 * 1), "YYYY-MM-DD 23:59:59");
      this.datePickerTime = [start, end];
      this.searchForm.unknowToday = 1;
    }
    if (day === "theDayBeforeYesterday") {
      let start = this.$tool.dateFormat(new Date(date.getTime() - 1000 * 60 * 60 * 24 * 2), "YYYY-MM-DD 00:00:00");
      let end = this.$tool.dateFormat(new Date(date.getTime() - 1000 * 60 * 60 * 24 * 2), "YYYY-MM-DD 23:59:59");
      this.datePickerTime = [start, end];
      this.searchForm.unknowToday = 1;
    }
    if (day === "last7days") {
      let start = this.$tool.dateFormat(new Date(date.getTime() - 1000 * 60 * 60 * 24 * 7), "YYYY-MM-DD 00:00:00");
      let end = this.$tool.dateFormat(date, "YYYY-MM-DD 23:59:59");
      this.datePickerTime = [start, end];
      this.searchForm.unknowToday = 1;
    }
    this.queryTable();
  }
  async queryTable() {
    this.searchForm.current = 1;
    this._plantformList();
    this.loading = true;
    await this.$tool.sleep(2000);
    this.loading = false;
  }
  _setOrderStatus(item) {
    //正常情况下
    let text = "";
    if (item.status === 0) text = ["待支付", "info"];
    if (item.status === 1) text = ["已支付", "success"];
    if (item.status === 2) text = ["已过期", "info"];
    if (item.status === 3 || item.status === 4) text = ["未知订单", "danger"];
    if (item.status === -1) text = ["下单失败", "danger"];
    if (item.status === 92 || item.status === 93) text = ["待处理", "danger"];
    //提款情况下 支付宝 易宝
    if ((item.status === 0 && this.searchForm.type === 1) || this.searchForm.type === 2) text = ["待提款", "info"];
    if ((item.status === 1 && this.searchForm.type === 1) || this.searchForm.type === 2) text = ["提款成功", "success"];
    if ((item.status == -1 && this.searchForm.type === 1) || this.searchForm.type === 2) text = ["提款失败", "danger"];
    return text;
  }
  async _plantformList() {
    //判断当前查询是0申请时间,还是1完成时间
    this.tables.appendHtml = "";
    if (this.datePickerTime === null || this.datePickerTime.length === 0 || this.datePickerTime[0] === "") this.datePickerTime = ["", ""];
    if (this.searchForm.timeType === 1) {
      this.searchForm.orderDoneStartTime = this.datePickerTime[0];
      this.searchForm.orderDoneEndTime = this.datePickerTime[1];
      this.searchForm.orderStartTime = "";
      this.searchForm.orderEndTime = "";
      this.searchForm.isComplete = 1;
    } else {
      this.searchForm.orderStartTime = this.datePickerTime[0];
      this.searchForm.orderEndTime = this.datePickerTime[1];
      this.searchForm.orderDoneStartTime = "";
      this.searchForm.orderDoneEndTime = "";
      this.searchForm.isComplete = 0;
    }
    const res = await orderList({ ...this.searchForm, channelType: this.searchForm.channelType, type: this.searchForm.type });
    if (!res.success) return this.$msg.error(res.data.message);
    this.tables.total = res.data.total;
    this.tables.data = res.data.records.map((item, ind) => {
      item._status = this._setOrderStatus(item);
      return item;
    });
    const statistics = res.data.statistics;
    this.tables.appendHtml = `<div class="tableFooter"><span style="color:#85CE61;">${/[34680]/g.test(this.searchForm.type) ? "已支付" : "已代付"}</span>订单总计：${statistics.orderCount || 0}单，
        <span style="color:#85CE61;">${/[34680]/g.test(this.searchForm.type) ? "已支付" : "已代付"}</span>订单额度总计：${statistics.orderTotal || 0}货币(A)，
        ${/[34680]/g.test(this.searchForm.type) ? `订单真实额度总计：${statistics.orderRealTotal || 0}货币(A)，` : ""}
        其中人工补单 ${statistics.repairCount || 0} 单，额度 ${statistics.repairTotal || 0} 货币(A)</div>`;
  }
  /** 获取经销商列表 */
  async _platformlist() {
    let res = await platformlist({});
    if (!res.success) return this.$msg.error(res.data.message);
    this.plantformIds = res.data.records;
    this.plantformIds.unshift({ name: "全部经销商", id: 0 });
  }
  async created() {
    await this.$nextTick();
    this._queryDay("nowadays");
    this._platformlist();
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
