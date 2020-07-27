<template>
  <div class="app-container">
    <el-form ref="form" :model="newsForm" label-width="80px">
      <el-row :gutter="20">
        <el-col :span="10">
          <el-form-item label="*资讯分类"
            ><VNewsClass
              ref="newsClass"
              @change="
                a => {
                  this.classOptions = a;
                  this.$store.commit('SET_CLASSOPTIONS', a);
                  this.newsForm.classFirstId = a[0].id;
                  this.newsForm.classChildId = a[1].id;
                  this._setUrl();
                }
              "
          /></el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="资讯地址">
            <el-input readonly class="read" size="small" v-model="newsForm.newsUrl"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="10">
          <el-form-item label="*新闻标题">
            <el-input
              size="small"
              v-model="newsForm.subTitle"
              @input="
                a => {
                  this.newsForm.title = this.newsForm.subTitle;
                  this.newsForm.description = this.newsForm.subTitle;
                }
              "
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="网页TITLE">
            <el-input readonly class="read" size="small" v-model="newsForm.title"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="10">
          <el-form-item label="*页关键词">
            <el-input size="small" v-model="newsForm.subKeywords" @blur="_setUrl" @input="a => (this.newsForm.keywords = this.newsForm.subKeywords)"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="keywords">
            <el-input readonly class="read" size="small" v-model="newsForm.keywords"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="10">
          <el-form-item label="*来　　源">
            <el-input size="small" v-model="newsForm.source"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="Description">
            <el-input readonly class="read" size="small" v-model="newsForm.description"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="10">
          <el-form-item label="*编　　辑">
            <el-input size="small" v-model="newsForm.author"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="发布时间">
            <el-input readonly class="read" size="small" v-model="newsForm.time"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="20">
          <el-form-item label="*发布内容">
            <el-input id="editor_1" ref="refContent" type="textarea" placeholder="请输入内容" rows="20" v-model="newsForm.nContent" show-word-limit></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item style="margin-top:10px;">
        <el-button type="primary" @click="_addNews">立即提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import VNewsClass from "./components/report-class";
import { Vue, Component, Prop, Model, Watch, Emit } from "vue-property-decorator";
// import { queryNewsClass, addNews, editNews, newsDetail } from "@/api/reports";
@Component({
  components: { VNewsClass },
  metas: {
    title: "添加新闻",
    titleTemplate: "%s - 超级管理后台系统"
  }
})
export default class AddNews extends Vue {
  loading = false;
  classOptions = [];
  newsForm = {
    classFirstId: "",
    classChildId: "",
    title: "",
    keywords: "",
    description: "",
    subTitle: "",
    subKeywords: "",
    newsUrl: "",
    source: "中智产业",
    author: "admin",
    nContent: "",
    pv: "",
    time: ""
  };
  _setUrl() {
    if (!this.classOptions.length) return this.$msg.error(`[资讯分类]请先选择`);
    const d = this.$tool.toPY(this.newsForm.subKeywords.split(" ")[0]);
    if (d)
      return (this.newsForm.newsUrl =
        this.classOptions[0].value +
        "/" +
        this.$tool.dateFormat(Date.now(), "YYYYMMDD") +
        "/" +
        d +
        Math.random()
          .toString()
          .slice(-6) +
        Date.now() +
        ".html");

    this.newsForm.newsUrl = "";
  }
  async _addNews() {
    this.newsForm.nContent = document.getElementById("iframe").contentDocument.querySelector(".ke-content").innerHTML;
    if (!this.newsForm.classChildId) return this.$msg.error(`[资讯分类]必须选择`);
    if (!this.newsForm.subTitle) return this.$msg.error(`[新闻标题]必须填写`);
    if (!this.newsForm.subKeywords) return this.$msg.error(`[页关键词]必须填写`);
    if (!this.newsForm.source) return this.$msg.error(`[来　　源]必须填写`);
    if (!this.newsForm.author) return this.$msg.error(`[编　　辑]必须填写`);
    if (!this.newsForm.nContent) return this.$msg.error(`[发布内容]必须填写`);
    if (!this.newsForm.newsUrl) return this.$msg.error(`[资讯地址]自动生成失败，请检查页关键词字段`);
    if (this.$router.currentRoute.query.edit) {
      let res = await editNews({ ...this.newsForm, id: this.$router.currentRoute.query.edit });
      if (!res.success) return this.$msg.error(res.data.msg);
      return this.$router.go(0);
    }
    let res = await addNews(this.newsForm);
    if (!res.success) return this.$msg.error(res.data.msg);
    this.$router.go(0);
  }
  async _newsDetail() {
    const res = await newsDetail({ id: this.$router.currentRoute.query.edit });
    if (!res.success) return this.$msg.error(res.data.msg);
    this.newsForm = {
      classFirstId: res.data.classFirstId,
      classChildId: res.data.classChildId,
      title: res.data.title,
      keywords: res.data.keywords,
      description: res.data.description,
      subTitle: res.data.subTitle,
      subKeywords: res.data.subKeywords,
      newsUrl: res.data.newsUrl,
      source: res.data.source,
      author: res.data.author,
      nContent: res.data.nContent,
      pv: res.data.pv,
      time: this.$tool.dateFormat(new Date(res.data.time), "YYYY-MM-DD HH:mm:ss")
    };
    document.getElementById("iframe").contentDocument.querySelector(".ke-content").innerHTML = res.data.nContent;
    await this.$tool.sleep(10);
    this.$refs.newsClass.newsClassOptions.newsClassValue = [+res.data.classFirstId, +res.data.classChildId];
  }
  // 检查是否加载编辑器
  async _checkUEdit() {
    await this.$tool.sleep(50);
    const str = this.$refs.refContent.$el.childNodes[0].className;
    if (str.indexOf("ke-container") == -1) this.$router.go(0);
  }
  async created() {
    this.newsForm.time = this.$tool.dateFormat(Date.now(), "YYYY-MM-DD HH:mm:ss");
    if (this.$store.state.newsClassCache) {
      this.classOptions = this.$store.state.newsClassCache;
      this.newsForm.classFirstId = this.$store.state.newsClassCache[0].id;
      this.newsForm.classChildId = this.$store.state.newsClassCache[1].id;
    }
    await this.$nextTick();
    this._checkUEdit();
    if (this.$router.currentRoute.query.edit) this._newsDetail();
  }
}
</script>
<style scoped lang="scss">
.app-container /deep/ {
  .el-form-item {
    margin-bottom: 0;
  }
  .read {
    input {
      background: #eee;
    }
  }
}
</style>
