<template>
  <div>
    <headAriticle />
    <topClassNav :newClassData="newsClassData" />
    <div class="main">
      <navs :newClassData="newsClassData" />
      <div class="content">
        <div class="leftBox">
          <IndexDiagram />
          <MiddleHeadlines />
          <newClass :newClassData="newsClassData" :channelNewsData="channelNewsData" />
        </div>
        <right />
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
import IndexDiagram from "./components/index-diagram.vue";
import MiddleHeadlines from "./components/middle-headlines.vue";
import right from "./components/right.vue";
import newClass from "./components/news-class.vue";
import { getSinaSZList } from "@/apis/zhengquan";
import { getNewsClass } from "@/apis/bases";
export default {
  layout: "channel",
  components: {
    navs,
    newClass,
    right,
    MiddleHeadlines,
    IndexDiagram,
    topClassNav,
    headAriticle,
    reportsMeun,
    channelSlideReport
  },
  methods: {},
  created() {},
  async asyncData({ app, error }) {
    const className = app.router.history.current.fullPath.replace(/\//g, "");
    try {
      const {
        data: { data: newsClassData }
      } = await app.$axios.post("/v1/news_class/item", { className: className });
      const {
        data: { data: channelNewsData }
      } = await app.$axios.post("/v1/channel_news/item", {
        className: "证券"
      });
      return { newsClassData, channelNewsData };
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
  .channel-ad-001 {
    width: 100%;
    height: 100px;
    background: #bfbfbf;
  }
  .reportClass {
    margin-top: 5px;
    .column {
      margin: 5px 0;
      background: #fff;
      display: inline-block;
      width: 496.5px;
      height: 383px;
      border: 1px solid #e2e2e2;
      padding: 10px;
      .tit {
        height: 50px;
        font: bold 18px/50px Microsoft YaHei;
        overflow: hidden;
        padding: 0 20px;
        span {
          float: right;
          font: normal 12px/50px SimSun;
          color: #076fa2;
          a {
            color: #076fa2;
          }
        }
      }
      .pic_txt {
        padding: 0 20px;
        img {
          border: 1px solid #e2e2e2;
          float: left;
          display: block;
          width: 120px;
          height: 120px;
          margin-right: 20px;
        }
        strong {
          color: #076fa2;
          font-size: 14px;
          font-weight: bold;
          line-height: 20px;
        }
        p {
          line-height: 20px;
          padding-top: 18px;
          color: #666;
          font-size: 12px;
          a {
            color: #900;
          }
        }
      }
      .list {
        padding: 15px 20px;
      }
    }
  }
}

.content {
  .leftBox {
    width: 755px;
    overflow: hidden;
    margin-top: 10px;
    display: inline-block;
    vertical-align: top;
    .left3 {
      margin-top: 10px;
      vertical-align: top;
      display: inline-block;
      width: 49%;
      overflow: hidden;
      h3 {
        height: 36px;
        line-height: 36px;
        background: #f5f5f5;
        text-indent: 1em;
        font-weight: bold;
        span {
          font-weight: 100;
          font-size: 12px;
        }
      }
      &:nth-child(odd) {
        margin-left: 10px;
      }
      ul li {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        line-height: 28px;
        padding-left: 10px;
      }
      ul li:before {
        color: #bfbfbf;
        content: "▪";
        padding-right: 3px;
      }
    }
    .category {
      margin: 10px 0;
      h4 {
        border: 1px solid #dddddd;
        line-height: 35px;
        text-indent: 10px;
        font-size: 14px;
        font-weight: bold;
        background: #fcf8ee;
      }
      ul {
        font-size: 0;
        li {
          overflow: hidden;
          display: inline-block;
          width: 377.5px;
          height: 120px;
          border: 1px solid #dddddd;
          font-size: 14px;
          padding: 10px 30px;
          div.details h3 {
            line-height: 35px;
            font-size: 16px;
            color: #076fa2;
          }
          div.details a {
            margin-right: 10px;
            line-height: 30px;
          }
        }
      }
    }
  }
  .right {
    text-align: left;
    margin: 10px 0 0;
    display: inline-block;
    vertical-align: top;
    width: 238px;
    overflow: hidden;
  }
}
</style>