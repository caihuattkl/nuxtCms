<template>
  <div>
    <headAriticle :headerTopNav="headerTopNav" />
    <div class="plan">
      <div class="left">
        <ul class="crumbs" id="crumbs">
          <li>
            <a target="_blank" href="/"><img src="/logo_fnc.jpg"/></a>
          </li>
          <li>
            <a target="_blank" :href="`/reports/`">{{ `报告频道` }}</a>
          </li>
          <li>
            <a target="_blank" :href="`/reports/${reportDetail.first_class_text}/1`">{{ reportDetail.first_class_text_zh }}</a>
          </li>
          <li>
            <a target="_blank" :href="`/reports/${reportDetail.child_class_text}/1`">{{ reportDetail.child_class_text_zh }}</a>
          </li>
          <li><a :href="`/reports/${reportDetail.report_url}.html`">{{ reportDetail.subTitle }}</a></li>
        </ul>
      </div>
    </div>
    <div class="main">
      <div class="articleBox">
        <div class="left">
          <div class="reportsinfo">
            <h1>{{ reportDetail.subTitle }}</h1>
            <div class="date">
              <span class="blue">{{ $tool.dateFormat(new Date(reportDetail.post_time), "YYYY-MM-DD HH:mm:ss") }}</span>
              <a href="/" target="_blank">中金产业咨询网</a>
              <a class="addSize" href="javascript:void(0)" onclick="addSize(-1)">A-</a>
              <a class="addSize" href="javascript:void(0)" onclick="addSize(1)">A+</a>
            </div>
            <div class="newsContent" id="ncontent">
              <!--报告信息-->
              <div class="rptinfo">
                <div class="img">
                  <img width="200" height="300" src="/baogaobig.jpg" />
                </div>
                <div class="info">
                  <ul id="rpttitle">
                    <li>
                      <h3>报告关键词：{{ reportDetail.keywords }}</h3>
                    </li>
                    <li>首次出版：2009年12月 　　最新修订：2017年3月</li>
                    <li>
                      电子邮件：
                      <a href="mailto:service@ocns.com.cn" target="_blank">service@ocns.com.cn</a>
                    </li>
                    <li>交付方式：特快专递(2-3天送达)</li>
                    <li>
                      中文版全价：RMB&nbsp;<span class="st">{{ reportDetail.double_version }}</span> 印刷版：RMB&nbsp;{{ reportDetail.entity_price }} 电子版：RMB&nbsp;{{ reportDetail.pdf_price }}
                    </li>
                    <li>定购电话：<span>0755-16816888、16816888</span></li>
                    <li>24小时服务热线：<span>132 4388 1234</span></li>
                    <li class="buy">
                      <div class="freebuy">
                        <!-- <a href="/reports/reportdz.html" class="b2" target="_blank">立即订购</a> -->
                        <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=2355616938&amp;site=qq&amp;menu=yes" class="b4" target="_blank"><span class="fa fa-comments">&nbsp;</span>在线客服</a>
                        <!-- <a href="/reports/reportdz.html" class="b3" target="_blank"><span class="fa fa-plus">&nbsp;</span>定制报告</a> -->
                        <!-- <a href="/reports/reportdz.html" class="b3" target="_blank"><span class="fa fa-cloud-download">&nbsp;</span>下载目录</a> -->
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <!--报告简介-->
              <hr class="hr" />
              <div class="rp-summary">
                <h2><strong>报告简介：</strong>{{ reportDetail.report_summary }}</h2>
              </div>
              <div class="statement">
                <p><strong class="fb">郑重声明：</strong>本报告由中金产业出版发行，报告著作权中金产业所有。本报告是中金产业的研究与统计成果，有偿提供给购买报告的客户使用。未获得中金产业书面授权，任何网站或媒体不得转载或引用，否则中金产业有权依法追究其法律责任。如需订阅研究报告，请直接联系本网站，以便获得全程优质完善服务。</p>
              </div>
              <div class="rp-catalog">
                <div class="tab">
                  <ul>
                    <li>
                      <a><strong>报告目录</strong></a>
                    </li>
                  </ul>
                </div>
                <div v-html="reportDetail.report_catalog"></div>
                <p class="p1">略····完整目录请咨询客服</p>
                <p class="p2">本报告目录与内容系中金产业原创，未经中金产业书面许可及授权，拒绝任何形式的复制、转载，谢谢！</p>
              </div>
              <hr class="hr" />
              <div class="mod_box">
                <div class="tit">
                  <a :href="`/reports/${reportDetail.first_class_text}/1`" target="_blank">更多“{{ reportDetail.core_keywords }}”相关报告</a>
                </div>
                <ul class="list" id="div-RelaReports" style="width:620px;">
                  <li>
                    ·
                    <a href="http://bg.qianzhan.com/report/detail/efb78a53cb7e45ac.html" target="_blank">2016-2021年中国<em class="fontblue">传媒产业</em>细分市场调研与受众群体潜在需求预测报告</a>
                  </li>

                  <li>
                    ·
                    <a href="http://bg.qianzhan.com/report/detail/0a469e193bf04246.html" target="_blank">2016-2021年中国<em class="fontblue">电影</em>行业细分市场投资前景与企业战略规划分析报告</a>
                  </li>

                  <li>
                    ·
                    <a  target="_blank" :href="`/reports/${reportDetail.first_class_text}/1`"><em class="fontblue">更多相关报告&gt;&gt;</em></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <!-- <div class="pic-box">
            <div class="img1"><img src="http://ubmcmm.baidustatic.com/media/v1/0f00057m9JWxdlCAKCGPP6.jpg" id="img_14" class="figure" style="opacity: 1;" /></div>
          </div> -->
          <div class="newsR1">
            <h4 class="title">
              相关报告<span class="more"><a target="_blank" :href="`/reports/${reportDetail.first_class_text}/1`">更多</a></span>
            </h4>
            <div class="content">
              <ul>
                <li>
                  <a href="javascript:void(0)">中国服务机器人产业深度调研及投资报告</a>
                </li>
                <li>
                  <a href="javascript:void(0)">中国服务机器人产业深度调研及投资报告</a>
                </li>
                <li>
                  <a href="javascript:void(0)">中国服务机器人产业深度调研及投资报告</a>
                </li>
              </ul>
            </div>
          </div>
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
  validate({ params }) {
    // 必须是number类型
    return /.html$/.test(params.id);
  },
  head(){
    return {
      title:this.$data.reportDetail.title+'-中金产业投资咨询网',
      meta:[
        {name: 'keyword',content:this.$data.reportDetail.keywords},
        {name: 'description',content: this.$data.reportDetail.report_summary}
      ]
    }
  },
  layout: "article",
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
    const reportId = app.router.currentRoute.params.id.split(".html")[0];
    try {
      const {
        data: { data: headerTopNav }
      } = await app.$axios.post("/v1/sqlites/header_top_nav", {});
      const {
        data: {
          data: [reportDetail]
        }
      } = await app.$axios.post("/v1/reports/report_detail", { reportId: reportId });
      // 获取报告数据
      return { headerTopNav, reportDetail };
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
  overflow: hidden;
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
  width: 998px;
  margin: 0 auto;
  // .reports-nav {
  //   background: $zzblue;
  //   overflow: hidden;
  //   ul li {
  //     height: 40px;
  //     line-height: $fs40;
  //     display: inline-block;
  //     margin: 0 8px;
  //     font-size: $fs16;
  //     a {
  //       color: $zzLight-0;
  //     }
  //   }
  //   .searchBox {
  //     height: 40px;
  //     padding: 6px 15px;
  //     border: 1px solid $zzLight-2;
  //     border-top: 1px solid transparent;
  //     background: #fff;
  //     .search-keyword {
  //       padding: 0 5px;
  //       display: inline-block;
  //       width: 490px;
  //       height: 25px;
  //       line-height: 25px;
  //       border: 1px solid #fc9494;
  //       color: $zzblack;
  //     }
  //     .search-btn {
  //       left: 455px;
  //       display: inline-block;
  //       vertical-align: bottom;
  //       margin-left: -50px;
  //       width: 50px;
  //       height: 25px;
  //       line-height: 25px;
  //       border: none;
  //       background-color: red;
  //       color: #fff;
  //     }
  //     .hotkey {
  //       a {
  //         margin: 0 5px;
  //       }
  //     }
  //   }
  // }

  .articleBox {
    display: inline-block;
    .left {
      vertical-align: top;
      display: inline-block;
      width: 70%;
      .reportsinfo {
        h1 {
          font-weight: bold;
          font-size: $fs20;
          margin: 25px 0 30px;
        }
        .date {
          height: 25px;
          border-bottom: 1px solid $zzLight-4;
          .blue {
            margin-right: 1em;
            color: #555555;
          }
          .addSize {
            border: 1px solid $zzLight-3;
            padding: 0 5px;
            text-decoration: none;
            float: right;
          }
          a {
            color: #555555;
          }
          a:last-child {
            margin-right: 8px;
          }
        }
        .newsContent {
          padding: 20px 10px 0 0;
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
            margin: 0 0 20px;
          }
          //报告信息
          .rptinfo {
            width: 100%;
            overflow: hidden;
            .img {
              width: 222px;
              display: inline-block;
              border: 1px solid #eee;
              text-align: center;
              height: 280px;
              overflow: hidden;
              background:#ebebeb;
            }
            .info {
              color: #555555;
              display: inline-block;
              vertical-align: top;
              width: 450px;
              font-size: 13px;
              line-height: 33px;
              margin-left: 10px;
              span {
                color: #a00;
                font-weight: bold;
              }
              span.fa {
                color: $zzLight-0;
              }
              h3 {
                height: 33px;
                line-height: 33px;
              }
              .b2,
              .b3,
              .b4 {
                margin-right: 10px;
                display: block;
                float: left;
                background: #f46114;
                width: 90px;
                height: 32px;
                line-height: 32px;
                color: #eee;
                text-align: center;
                font-weight: bold;
                font-size: 14px;
              }
              .b4 {
                background: green;
              }
              .b2 {
                background: #e53a43;
              }
            }
          }
          //报告简介
          .rp-summary {
            h2 {
              line-height: 25px;
              strong {
                color: #003399;
                font-size: $fs16;
              }
            }
          }
          .statement {
            border: 1px dashed #f96301;
            padding: 10px;
            line-height: 25px;
            background: #fefaef;
            margin-top: 10px;
            p {
              font-family: "微软雅黑", "宋体";
              font-size: 13px;
              margin: 0;
            }
          }
          .rp-catalog {
            p {
              font-family: "微软雅黑", "宋体";
              font-size: $fs14;
              margin: 0;
            }
            .p1 {
              color: red;
            }
            .p2 {
              font-weight: bold;
              color: red;
            }
            .tab {
              overflow: hidden;
              border-bottom: 1px dashed $zzLight-2;
              margin: 10px 0;
              ul > li {
                a {
                  float: left;
                  //                                  border-top: 1px solid #c22d0f;
                  //                                  border-right: 1px solid #c22d0f;
                  border-bottom: 1px solid #fff;
                  //                                  border-left: 1px solid #c22d0f;
                  color: #003399;
                  height: 40px;
                  line-height: 40px;
                  margin-bottom: -2px;
                  font-size: $fs16;
                  text-decoration: none;
                }
              }
            }
          }
          .mod_box {
            .tit {
              a {
                color: #003399;
              }
              font: bold 16px/30px Microsoft YaHei, SimSun;
              color: #333;
              clear: both;
              height: 30px;
              overflow: hidden;
              padding-bottom: 5px;
            }
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
            padding:0;
            margin:0;
            font-size: $fs13;
            line-height: $fs26;
            text-align: center;
          }
          
        }
      }
    }
  }
}
</style>
