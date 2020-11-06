<template>
  <div>
    <headAriticle :headerTopNav="headerTopNav" />
    <div class="plan">
      <div class="left">
        <ul class="crumbs" id="crumbs">
          <li>
            <a href="/"><img src="/logo_fnc.jpg"/></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="main">
      <div class="reports-nav">
        <ul>
          <li>
            <a href="/reports/" title="报告频道">报告频道</a>
          </li>
          <template v-for="(item, i) in childItems">
            <li :key="i">
              <a :href="`/reports/${item.reports_directory}/1`" :title="item.sub_title">{{ item.sub_title }}</a>
            </li>
          </template>
        </ul>
        <div class="searchBox">
          <input class="search-keyword" type="text" name="keyword" id="keyword" value="" placeholder="请输入报告关键词" /><button class="search-btn">搜索</button>
          <span class="hotkey"><strong>&nbsp;热搜关键词：</strong><a href="#">中国制造2025</a><a href="#">数据中国</a><a href="#">虚拟现实</a><a href="#">充电桩</a></span>
        </div>
      </div>
      <div class="content">
        <div class="leftBox" > 
          <ul class="reportslist" v-if="pageData.total">
            <template v-for="(item, i) in reportList">
              <li :key="i">
                <h3 class="title">
                  <a :href="`/reports/${item.report_url}.html`" target="_blank">{{ item.subTitle }}</a>
                </h3>
                <a class="pic" :href="`/reports/${item.report_url}.html`" target="_blank"><img width="120" height="187" src="/baogao.jpg" :alt="item.subTitle"/></a>
                <div class="dec">
                  <a :href="`/reports/${item.report_url}.html`" target="_blank">{{ item.report_summary }}</a>
                  <span class="rdate"><a :href="`/reports/${item.report_url}.html`" target="_blank">立即订购</a></span>
                </div>
              </li>
            </template>
          </ul>
          <div v-else style="padding-top:20px;text-align:center;font-size:16px;">还没有数据，编辑正在处理哦！</div>
          <ul class="pagination" v-if="pageData.total">
              <li ><a :href="`${pageData.pageNumber>1?pageData.pageNumber-1:1}`">上一页</a></li>
                <template v-for="(item,i) in Math.ceil(pageData.total/10)">
                  <li :key="i"><a :href="`${item}`">{{item}}</a></li>
                </template>
              <li><a :href="`${pageData.pageNumber+1>Math.ceil(pageData.total/10)?Math.ceil(pageData.total/10):pageData.pageNumber+1}`">下一页</a></li>
            <li><a>第{{pageData.pageNumber}}页，共{{Math.ceil(pageData.total/10)}}页</a></li>
          </ul>
        </div>
        <div class="right">
          <img src="http://d8.sina.com.cn/pfpghc2/201612/31/427c8c37e06046e492752ba53a40e216.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headAriticle from "@/components/head-ariticle.vue";
import navs from "@/components/navs.vue";
import topClassNav from "@/components/top-class-nav.vue";
import reportsMeun from "@/components/reports-meun.vue";
import channelSlideReport from "@/components/channel-slide-report.vue";
import IndexDiagram from "@/pages/_newsChannel/components/index-diagram.vue";
export default {
  head() {
    return {
      title: this.$data.child_class_text.title + "行业分析报告列表-中金产业投资咨询网",
      meta: [
        { name: "keyword", content: this.$data.childItems.map(item => item.title).join(",") },
        { name: "description", content: "本频道提供" + this.$data.childItems.map(item => item.title).join(",") + "行业分析报告" }
      ]
    };
  },
  layout: "channel",
  components: {
    navs,
    topClassNav,
    headAriticle,
    reportsMeun,
    channelSlideReport
  },
  methods: {},
  created() {},
  async asyncData({ app, error }) {
    try {
      //   /* 获取报告导航条数据 */nuxnu
      const {
        data: { data: channelReportNavData }
      } = await app.$axios.post("/v1/reports/report_class", {});

      /* 获取header头部数据 */
      const {
        data: { data: headerTopNav }
      } = await app.$axios.post("/v1/sqlites/header_top_nav", {});
      


      const child_class_text = channelReportNavData.filter(item => item.reports_directory == app.router.currentRoute.params.class)[0];

      let itemValue = channelReportNavData.filter(item => item.reports_directory == app.router.currentRoute.params.class)[0];
      if (itemValue.first_class != "0") itemValue = channelReportNavData.filter(item => item.id == itemValue.first_class)[0];
      const childItems = channelReportNavData.filter(item => item.first_class == itemValue.id);
      childItems.unshift(itemValue);
      // 获取报告数据
      const {
        data: pageData
      } = await app.$axios.post("/v1/reports/reports", {
        pageSize: 10,
        pageNumber: app.router.currentRoute.params.index,
        reportClass: app.router.currentRoute.params.class
      });
      const reportList = pageData.data;
      return { reportList,pageData, itemValue, child_class_text, childItems, headerTopNav };
    } catch (err) {
      error({ statusCode: 404, message: "Post not found" });
    }
  }
};
</script>

<style lang="scss">
.plan {
  width: 998px;
  margin: 0 auto;
  height: 50px;
  .crumbs {
    padding: 8px 0;
    margin-bottom: 20px;
    list-style: none;
    li {
      float: left;
    }
    > li:first-child {
      padding: 0;
    }
    > li + li:before {
      color: #cccccc;
      content: ">";
      padding: 0 5px;
    }
    > li + li {
      margin-top: 9px;
    }
  }
}

.main {
  width: 998px;
  margin: 0 auto;
  height: auto;

  .content {
    .leftBox {
      display: inline-block;
      width: 755px;
      .reports-class {
        margin-top: 1em;
        h1 {
          border-bottom: 1px solid $zzLight-6;
          line-height: $fs36;
          font-size: $fs20;
          font-weight: bold;
          color: $zzLight-6;
        }
        h2 {
          line-height: $fs36;
          font-size: $fs16;
          a {
            margin-right: 15px;
            color: $zzLight-6;
          }
        }
      }
      .reportslist {
        padding: 10px 0;
        li {
          padding: 20px 10px;
          border-bottom: 1px solid $zzLight-3;
          h3 {
            font-size: $fs16;
            line-height: $fs40;
            font-weight: bold;
          }
          .dec {
            display: inline-block;
            width: 80%;
            font-size: $fs13;
            line-height: $fs32;
            vertical-align: top;
            .rdate {
              float: right;
              margin-top: $fs26;
              a {
                text-decoration: none;
                color: $zzLight-0;
                background: red;
                padding: 2px 5px;
              }
            }
          }
          a.pic {
            img {
              padding: 5px 3px;
              margin-right: 5px;
              border: 1px solid #ddd;
              -webkit-box-shadow: 0 0 10px #ddd;
              -moz-box-shadow: 0 0 10px #ddd;
              box-shadow: 0 0 10px #ddd;
              width: 110px;
              height: 120px;
            }
          }
          &:hover {
            background: $zzLight-3;
          }
        }
      }
    }
    .right {
      text-align: right;
      margin: 10px 0 0 10px;
      display: inline-block;
      vertical-align: top;
      width: 228px;
      overflow: hidden;
    }
  }
}

.reports-nav {
  background: $zzblue;
  overflow: hidden;
  ul li {
    height: 40px;
    line-height: $fs40;
    display: inline-block;
    margin: 0 8px;
    font-size: $fs16;
    a {
      color: $zzLight-0;
    }
  }
  .searchBox {
    height: 40px;
    padding: 6px 15px;
    border: 1px solid $zzLight-2;
    border-top: 1px solid transparent;
    background: #fff;
    .search-keyword {
      padding: 0 5px;
      display: inline-block;
      width: 490px;
      height: 25px;
      line-height: 25px;
      border: 1px solid #fc9494;
      color: $zzblack;
    }
    .search-btn {
      left: 455px;
      display: inline-block;
      vertical-align: bottom;
      margin-left: -50px;
      width: 50px;
      height: 25px;
      line-height: 25px;
      border: none;
      background-color: red;
      color: #fff;
    }
    .hotkey {
      a {
        margin: 0 5px;
      }
    }
  }
}
</style>
