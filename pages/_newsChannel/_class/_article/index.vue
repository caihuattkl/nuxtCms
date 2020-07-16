<template>
  <div>
    <headAriticle :headerTopNav="headerTopNav"/>
    <div class="plan">
      <div class="left">
        <ul class="crumbs" id="crumbs">
          <li>
            <a href="/"><img src="~/assets/images/logo_fnc.jpg"/></a>
          </li>
          <li>
            <a :href="`/${newsDtail.first_directory}`">{{ newsDtail.firstClassName }}</a>
          </li>
          <li>
            <a :href="`/${newsDtail.first_directory}/${newsDtail.child_directory}`">{{ newsDtail.childClassName }}</a>
          </li>
          <li>正文</li>
        </ul>
      </div>
    </div>
    <div class="main">
      <div class="articleBox">
        <div class="left">
          <div class="newsinfo">
            <h1>{{ newsDtail.subTitle }}</h1>
            <div class="date">
              <span class="blue">{{ $tool.dateFormat(new Date(newsDtail.time), "YYYY-MM-DD HH:mm:ss")}}</span>
              <a href="/" target="_blank">{{newsDtail.source}}</a>
              <a class="addSize" href="javascript:void(0)" onclick="addSize(-1)">A-</a>
              <a class="addSize" href="javascript:void(0)" onclick="addSize(1)">A+</a>
            </div>
            <div class="newsContent" id="ncontent" v-html="newsDtail.nContent">
              <ul class="pagination">
                <li><a href="/">上一页</a></li>
                <li>
                  <a href="/">{{ `1` }}</a>
                </li>
                <li><a href="/">下一页</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="pic-box">
            <div class="img1"><img src="http://ubmcmm.baidustatic.com/media/v1/0f00057m9JWxdlCAKCGPP6.jpg" id="img_14" class="figure" style="opacity: 1;" /></div>
          </div>
          <div class="newsR1">
            <h4 class="title">
              热点行业研究报告推荐<span class="more"><a href="#">更多</a></span>
            </h4>
            <div class="content">
              <ul>
                <li>
                  <i class="fa fa-book">&nbsp;&nbsp;</i>
                  <a href="javascript:void(0)">中国服务机器人产业深度调研及投资报告</a>
                </li>
                <li>
                  <i class="fa fa-book">&nbsp;&nbsp;</i>
                  <a href="javascript:void(0)">中国服务机器人产业深度调研及投资报告</a>
                </li>
                <li>
                  <i class="fa fa-book">&nbsp;&nbsp;</i>
                  <a href="javascript:void(0)">中国服务机器人产业深度调研及投资报告</a>
                </li>
                <li>
                  <i class="fa fa-book">&nbsp;&nbsp;</i>
                  <a href="javascript:void(0)">中国服务机器人产业深度调研及投资报告</a>
                </li>
                <li>
                  <i class="fa fa-book">&nbsp;&nbsp;</i>
                  <a href="javascript:void(0)">中国服务机器人产业深度调研及投资报告</a>
                </li>
                <li>
                  <i class="fa fa-book">&nbsp;&nbsp;</i>
                  <a href="javascript:void(0)">中国服务机器人产业深度调研及投资报告</a>
                </li>
                <li>
                  <i class="fa fa-book">&nbsp;&nbsp;</i>
                  <a href="javascript:void(0)">中国服务机器人产业深度调研及投资报告</a>
                </li>
                <li>
                  <i class="fa fa-book">&nbsp;&nbsp;</i>
                  <a href="javascript:void(0)">中国服务机器人产业深度调研及投资报告</a>
                </li>
                <li>
                  <i class="fa fa-book">&nbsp;&nbsp;</i>
                  <a href="javascript:void(0)">中国服务机器人产业深度调研及投资报告</a>
                </li>
                <li>
                  <i class="fa fa-book">&nbsp;&nbsp;</i>
                  <a href="javascript:void(0)">中国服务机器人产业深度调研及投资报告</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="newsR2">
            <h4 class="title">
              奇闻异图<span class="more"><a href="#">更多</a></span>
            </h4>
            <div class="content">
              <ul>
                <li>
                  <a href="javascript:void(0)"><img src="http://img3.qianzhan.com/news/201612/19/20161219-a80b6bdca45e5533_150x150x21.jpg"/></a>
                </li>
                <li>
                  <a href="javascript:void(0)"><img src="http://img3.qianzhan.com/news/201612/19/20161219-a80b6bdca45e5533_150x150x21.jpg"/></a>
                </li>
                <li>
                  <a href="javascript:void(0)"><img src="http://img3.qianzhan.com/news/201612/19/20161219-a80b6bdca45e5533_150x150x21.jpg"/></a>
                </li>
                <li>
                  <a href="javascript:void(0)"><img src="http://img3.qianzhan.com/news/201612/19/20161219-a80b6bdca45e5533_150x150x21.jpg"/></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="pic-box">
            <div class="img1"><img src="http://ubmcmm.baidustatic.com/media/v1/0f00057m9JWxdlCAKCGPP6.jpg" id="img_14" class="figure" style="opacity: 1;" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import headAriticle from "@/components/head-ariticle.vue";
export default {
  layout:"article",
  components: {
    headAriticle
  },
  methods: {},
  created() {
    // console.log(this.$route.path);
  },
  async asyncData({ app, error }) {
    const url = app.router.history.current.fullPath.slice(1)
    try {
      const {
        data: { data: newsDtail }
      } = await app.$axios.post("/v1/sqlites/news_front_detail", {url});
      const {
        data: { data: headerTopNav }
      } = await app.$axios.post("/v1/sqlites/header_top_nav",{});
      return { newsDtail,headerTopNav };
    } catch (err) {
      error({ statusCode: 404, message: "Post not found" });
    }
  }
};
</script>

<style lang="scss" scoped>
.plan {
  @include container;
  &:after {
    content: "";
  }
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
  .articleBox {
    display: inline-block;
    .left {
      vertical-align: top;
      display: inline-block;
      width: 70%;
      .newsinfo {
        h1 {
          font-weight: bold;
          font-size: $fs24;
          margin: 25px 0 30px;
        }
        .date {
          height: 25px;
          border-bottom: 1px solid $zzLight-4;
          .blue {
            margin-right: 1em;
          }
          .addSize {
            border: 1px solid $zzLight-3;
            padding: 0 5px;
            text-decoration: none;
            float: right;
          }
          a {
            color: $zzLight-5;
          }
          a:last-child {
            margin-right: 8px;
          }
        }
        .newsContent {
          padding: 20px 10px 0px 0px;
          font-family: $ff;
          font-size: $fs14;
          line-height: $fs30;
          a {
            color: $zzblue;
          }
          p {
            line-height: $fs32;
            font-family: $ff;
            font-size: $fs16;
            margin: 0px 0px 20px 0px;
          }
        }
      }
    }
    .right {
      padding: 5px;
      float: right;
      background: $zzLight-4;
      vertical-align: top;
      display: inline-block;
      width: 29%;
      overflow: hidden;
      .pic-box {
        height: auto;
        overflow: hidden;
        text-align: center;
        background: $zzLight-0;
        .img1 {
          img {
            width: 275px;
            padding: 3px;
          }
        }
      }
      .newsR1 {
        padding: 10px 0;
        background: $zzLight-0;
        h4.title {
          color: $zzred-1;
          padding: 15px 5px;
          font-weight: bold;
          font-size: $fs16;
          padding-left: 15px;
          span.more {
            float: right;
            font-size: $fs12;
            a {
              color: $zzLight-5;
              &:after {
                content: "...";
              }
            }
          }
        }
        .content {
          ul li {
            font-size: $fs13;
            line-height: $fs26;
            text-align: center;
          }
        }
      }
      .newsR2 {
        margin-top: 10px;
        padding: 10px 0;
        background: $zzLight-0;
        h4.title {
          padding: 15px 5px;
          font-weight: bold;
          font-size: $fs16;
          padding-left: 15px;
          span.more {
            float: right;
            font-size: $fs12;
            a {
              color: $zzLight-5;
              &:after {
                content: "...";
              }
            }
          }
        }
        .content {
          width: 100%;
          overflow: hidden;
          ul li {
            float: left;
            text-align: center;
            padding: 0 0 0 5px;
            img {
              border: 1px solid $zzLight-4;
              width: 130px;
              height: 115px;
            }
          }
        }
      }
    }
  }
}
</style>