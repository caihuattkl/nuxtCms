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
          <template v-for="(item,i) in childItems">
              <li :key="i"  >
            <a :href="`/reports/${item.reports_directory}/`"  :title="item.sub_title">{{item.sub_title}}</a>
          </li>
          </template>
        </ul>
        <div class="searchBox">
          <input class="search-keyword" type="text" name="keyword" id="keyword" value="" placeholder="请输入报告关键词" /><button class="search-btn">搜索</button>
          <span class="hotkey"><strong>&nbsp;热搜关键词：</strong><a href="#">中国制造2025</a><a href="#">数据中国</a><a href="#">虚拟现实</a><a href="#">充电桩</a></span>
        </div>
      </div>
      <div class="content">
				<div class="leftBox">
					<!-- <div class="reports-class">
						<h1>行业研究报告</h1>
						<h2>1111<a href="/reports/1/">1</a></h2>
					</div> -->
					<ul class="reportslist">
						<li>
							<h3 class="title"><a href="/reports/1.html" target="_blank">1</a></h3>
							<a class="pic" href="/reports/1.html" target="_blank"><img src="http://www.ocn.com.cn/uploadfile/report/report_17650.jpg" alt="1"></a>
							<div class="dec">
								<a href="/reports/1.html" target="_blank">11...</a>
								<span class="rdate"><a href="/reports/1.html" target="_blank">立即订购</a></span>
							</div>
							</li>
					</ul>
					<ul class="pagination">
					<li><a href="/reports/1">上一页</a></li>
					<li><a href="/reports/1">1</a></li>
				<li><a href="/reports/1">下一页</a></li>
				<li><a>第1页，共2页</a></li>
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
import testData from "@/pages/components/index.vue";
import headAriticle from "@/components/head-ariticle.vue";
import navs from "@/components/navs.vue";
import topClassNav from "@/components/top-class-nav.vue";
import reportsMeun from "@/components/reports-meun.vue";
import channelSlideReport from "@/components/channel-slide-report.vue";
import IndexDiagram from "@/pages/_newsChannel/components/index-diagram.vue";
export default {
  layout: "channel",
  components: {
      testData,
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
    //   /* 获取报告导航条数据 */
      const {
        data: { data: channelReportNavData }
      } = await app.$axios.post("/v1/reports/report_class", {});
      console.log(app.router.currentRoute.params.class)
      /* 获取header头部数据 */
      const {
        data: { data: headerTopNav }
      } = await app.$axios.post("/v1/sqlites/header_top_nav", {});

     let itemValue = channelReportNavData.filter(item=>item.reports_directory==app.router.currentRoute.params.class)[0];
     if(itemValue.first_class!='0') itemValue = channelReportNavData.filter(item=>item.id==itemValue.first_class)[0];
     const childItems = channelReportNavData.filter(item=>item.first_class==itemValue.id)
            childItems.unshift(itemValue)
      return { childItems,headerTopNav };

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
        ul li {
          width: 100%;
          height: 24px;
          line-height: 24px;
          overflow: hidden;
          i {
            background: #fff;
            // url("/dist/images/report_bg.png") no-repeat 5px 5px #fff;
            float: right;
            width: 24px;
            height: 24px;
            overflow: hidden;
            text-indent: -999px;
            a {
              display: block;
            }
          }
          span {
            background-color: #fff;
            color: #900;
          }
        }
      }

      .tags {
        background: #ffffff;
        // url("/dist/images/report_bg.png") no-repeat 0 -14px #fff;
        border-top: 1px solid #e2e2e2;
        clear: both;
        height: 75px;
        padding: 5px 0 0 60px;
        margin: 0 20px;
        overflow: hidden;
        zoom: 1;
        position: relative;
        a {
          float: left;
          display: inline-block;
          padding: 0 5px;
          line-height: 22px;
          font-size: $fs13;
          margin: 10px 5px 0;
          position: relative;
          white-space: nowrap;
          sup {
            position: absolute;
            top: -9px;
            right: 0;
          }
          &:hover {
            background: #c22d0c;
            color: #fff;
            text-decoration: none;
          }
        }
      }
    }
  }
}


.reports-nav {
    background: $zzblue;
    overflow: hidden;
    ul li {
        height: 40px;
        line-height:$fs40;
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




.content {
  .leftBox {
    width: 755px;
    overflow: hidden;
    margin-top: 10px;
    display: inline-block;
    vertical-align: top;
    .other {
      vertical-align: top;
      display: inline-block;
      margin: 0 0 10px;
    }
    .other {
      position: relative;
      width: 348px;
      overflow: hidden;
      border: 1px solid $zzLight-2;
      z-index: 3;
      .toplineImg {
        text-align: center;
        overflow: hidden;
        height: 365px;
        a {
          position: absolute;
          left: 0;
          top: 0;
        }
      }
      .marsk {
        z-index: 4;
        position: absolute;
        height: 36px;
        background: $zzblack;
        width: 100%;
        opacity: 0.7;
        bottom: 0;
        .jump {
          cursor: pointer;
          position: absolute;
          bottom: 5px;
          right: 5px;
          z-index: 10;
          height: 19px;
          padding: 1px 0;
          overflow: hidden;
          background: none;
          span {
            cursor: pointer;
            display: inline-block;
            height: 15px;
            width: 17px;
            // background: url(@bannerIco);
            background-position: 22px -126px;
            &:hover {
              // background: url(@bannerIco);
              background-position: -9px -127px;
              height: 15px;
              width: 17px;
            }
            &.hover {
              background: red;
            }
          }
        }

        ul li {
          a {
            color: $zzLight-0;
          }
          color: $zzLight-0;
          line-height: 36px;
          position: absolute;
          width: 100%;
          text-align: center;
        }
      }
    }
    .left2 {
      vertical-align: top;
      display: inline-block;
      margin: 0 0 10px 10px;
      width: 743px;
      h3 {
        border: 1px solid $zzLight-3;
        line-height: 35px;
        text-indent: 10px;
        border-top: 4px solid #1971bd;
        color: $zzred-1;
        font-size: $fs16;
        background: #f8f8f8;
      }
      li {
        line-height: 22px;
        padding: 10px;
        border-bottom: 1px dotted $zzLight-2;
        a {
          font-size: $fs16;
        }
        p {
          font-size: $fs12;
          margin-top: 5px;
          color: $zzLight-6;
        }
      }
    }
    .left3 {
      margin-top: 10px;
      &:nth-child(odd) {
        margin-left: 10px;
      }
      vertical-align: top;
      display: inline-block;
      width: 49%;
      overflow: hidden;
      ul li {
        // .textEllipsis;
        line-height: $fs28;
        padding-left: 10px;
        &:before {
          color: $zzLight-2;
          // .newlistIcon;
        }
      }
      h3 {
        height: $fs36;
        line-height: $fs36;
        background: $zzLight-1;
        text-indent: 1em;
        font-weight: bold;
        span {
          font-weight: 100;
          font-size: $fs12;
        }
      }
    }
    .category {
      margin: 10px 0;
      h4 {
        border: 1px solid $zzLight-4;
        line-height: 35px;
        text-indent: 10px;
        font-size: $fs14;
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
          border: 1px solid $zzLight-4;
          font-size: $fs14;
          padding: 10px 30px;
          &:first-child {
            border-bottom: none;
          }
          &:first-child + li {
            border-left: none;
            border-bottom: none;
          }
          &:first-child + li + li {
            border-bottom: none;
          }
          &:first-child + li + li + li {
            border-left: none;
            border-bottom: none;
          }
          div.details {
            h3 {
              line-height: 35px;
              font-size: $fs16;
              color: #076fa2;
            }
            a {
              margin-right: 10px;
              line-height: 30px;
            }
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
    .mediaBox {
      margin-top: 7px;
      ul {
        background: #f5f5f5;
        li {
          display: inline-block;
          width: 49%;
          font-size: $fs12;
          line-height: $fs26;
          padding: 10px 5px;
          color: #076fa2;
        }
      }
    }
    .mediaCoverageBox {
      h3 {
        border-top: 1px solid $zzLight-4;
        color: #076fa2;
        background: #f5f5f5;
      }
      ul {
        background: #f5f5f5;
        li {
          text-align: center;
          display: inline-block;

          font-size: $fs12;
          line-height: $fs32;
          color: #076fa2;
          &:first-child {
            padding-top: 10px;
          }
          img {
            border: 1px solid $zzLight-3;
            width: 110px;
            height: 34px;
          }
        }
      }
    }
    .buyBox {
      h3 {
        border-top: 4px solid $zzred-1;
        color: $zzred-1;
      }
      margin-top: 7px;
      ul {
        background: #f5f5f5;
        li {
          font-size: $fs12;
          padding: 10px;
          color: $zzblack;
          line-height: $fs22;
          p {
            strong {
              font-size: $fs14;
              color: #720001;
            }
          }
        }
      }
    }
    h3 {
      border: 1px solid $zzLight-3;
      line-height: 35px;
      text-indent: 5px;
      border-top: 4px solid #1971bd;
      color: #076fa2;
      font-size: $fs16;
      background: #f8f8f8;
    }
    ul.contact {
      background: #f5f5f5;
      li {
        font-size: $fs12;
        line-height: $fs26;
        padding: 0 14px;
        color: #076fa2;
        span {
          color: $zzred-1;
          &.address {
            color: $zzLight-6;
          }
        }
      }
    }
  }
}
</style>
