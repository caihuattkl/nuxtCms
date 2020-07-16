<template>
  <div>
    <headAriticle :headerTopNav="headerTopNav" />
    <topClassNav :topClassNav="channelNewsData" />
    <div class="main">
      <navs :navData="channelNewsData" />
      <div class="content">
        <div class="leftBox">
          <ul class="newslist">
            <li>
              <h3 class="title">
                <a href="/" target="_blank">{{ `subTitle` }}</a>
              </h3>
              <div class="dec">
                <a href="/" target="_blank">{{ `classNewsDescription nContent` }}...</a>
              </div>
            </li>
          </ul>
          <ul class="pagination">
            <li><a href="/">上一页</a></li>
            <li>
              <a href="/">{{ 121212 }}</a>
            </li>
            <li><a href="/">下一页</a></li>
            <li>
              <a>第{{ `classNewsList.curPage` }}页，共{{ `classNewsList.pageNum.length` }}页</a>
            </li>
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
export default {
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
    const classNames = app.router.history.current.fullPath.split("/").filter(item => item);
    try {
      const {
        data: { data: channelNewsData }
      } = await app.$axios.post("/v1/sqlites/channel_news", {
        className: classNames[0]
      });
      const {
        data: { data: headerTopNav }
      } = await app.$axios.post("/v1/sqlites/header_top_nav", {});
      return { channelNewsData, headerTopNav };
    } catch (err) {
      error({ statusCode: 404, message: "Post not found" });
    }
  }
};
</script>


<style lang="scss" scoped>
.redBg {
  background: #f9e0e1;
  color: red;
}
.greenBg {
  background: #e1fce1;
  color: green;
}
.redff {
  color: red;
}
.greenff {
  color: green;
}
.plan {
  @include container;
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
  @include container;
  overflow: hidden;
}
.nav {
  background: $zzblue;
  height: $fs40;
  ul li {
    line-height: $fs40;
    display: inline-block;
    margin: 0 20px;
    font-size: $fs16;
    a {
      color: $zzLight-0;
    }
  }
}
.content {
  .leftBox {
    display: inline-block;
    width: 755px;
    .newslist {
      padding: 10px 0px;
      li {
        padding: 20px 10px;
        border-bottom: 1px solid $zzLight-3;
        h3 {
          font-size: $fs16;
          line-height: $fs40;
          font-weight: bold;
        }
        .dec {
          font-size: $fs13;
          line-height: $fs26;
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
</style>