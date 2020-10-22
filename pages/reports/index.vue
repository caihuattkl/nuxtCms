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
            <a href="/reports/" title="报告频道">行业报告</a>
          </li>
          <template v-for="(item,i) in channelReportNavData">
              <li :key="i"  v-if="item.first_class == 0">
            <a :href="`/reports/${item.reports_directory}/`"  :title="item.sub_title">{{item.sub_title | _formatSubtitle}}</a>
          </li>
          </template>
        </ul>
        <div class="searchBox">
          <input class="search-keyword" type="text" name="keyword" id="keyword" value="" placeholder="请输入报告关键词" /><button class="search-btn">搜索</button>
          <span class="hotkey"><strong>&nbsp;热搜关键词：</strong><a href="#">中国制造2025</a><a href="#">数据中国</a><a href="#">虚拟现实</a><a href="#">充电桩</a></span>
        </div>
      </div>
      <!-- {{>reportsMeun}} -->
      <div class="content">
        <div class="leftBox">
          <!-- {{>channel-slide-report}} -->
          <!-- <div class="other" id="other">
            <div id="toplineImg" class="toplineImg">
              <a href="/1" target="_blank"><img width="346" height="290" src="http://img3.qianzhan123.com/report/cover/2e/2e8913a73b4c4682.gif" alt="图片啊" title="图片啊"/></a>
              <a href="/2" target="_blank"><img width="346" height="290" src="http://img3.qianzhan123.com/report/cover/2e/2e8913a73b4c4682.gif" alt="图片啊" title="图片啊"/></a>
              <a href="/3" target="_blank"><img width="346" height="290" src="http://img3.qianzhan123.com/report/cover/2e/2e8913a73b4c4682.gif" alt="图片啊" title="图片啊"/></a>
            </div>
            <div id="marsk" class="marsk">
              <div id="num">
                <ul>
                  <li><a href="/1" title="" target="_blank">11111111111111</a></li>
                  <li><a href="/2" title="" target="_blank">2222222222222222</a></li>
                  <li><a href="/3" title="" target="_blank">33333333333333333333</a></li>
                </ul>
              </div>
              <div id="jump" class="jump">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div> -->
          <div class="left2">
            <h3><img src="/hot.gif" />&nbsp;热卖报告</h3>
            <ul>
              <li>
                <a style="color:#c81629" target="_blank" href="/" title="">2017-2022年中国互联网+电影产业商业模式创新与投资机会深度研究报告</a><img src="/new.gif"/>
                <p>在一个供大于求的需求经济时代，企业成功的关键就在于，是否能够在需求尚未形成之时就牢牢的锁定并捕捉到它...</p>
              </li>
              <li>
                <a target="_blank" href="/" title="">2017-2022年中国互联网+电影产业商业模式创新与投资机会深度研究报告</a><img src="/new.gif"/>
                <p>在一个供大于求的需求经济时代，企业成功的关键就在于，是否能够在需求尚未形成之时就牢牢的锁定并捕捉到它...</p>
              </li>
              <li>
                <a target="_blank" href="/" title="">2017-2022年中国互联网+电影产业商业模式创新与投资机会深度研究报告</a><img src="/new.gif"/>
                <p>在一个供大于求的需求经济时代，企业成功的关键就在于，是否能够在需求尚未形成之时就牢牢的锁定并捕捉到它...</p>
              </li>
            </ul>
          </div>
          <!--图片分割-->
          <div class="channel-ad-001"></div>
          <!--目录树-->
          <div class="category">
            <h4>按行业</h4>
            <ul>
                <template  v-for="(item,i) in channelReportNavData">
                <li :key="i" v-if="item.first_class == 0">
                    <div class="details" :data="item.first_class">
                        <h3 :title="item.sub_title" :key="i">{{item.sub_title}}</h3>
                            <div  class="kinds_list">
                                <template v-for="(item1,k) in channelReportNavData">
                                <a :key="k" v-if="item.id==item1.first_class" :href="`/reports/${item1.reports_directory}/`" target="_blank">{{item1.sub_title}}</a>
                             </template>
                            </div>
                        
                    </div>
                </li>
              </template>
            </ul>
          </div>
        </div>
        <div class="right">
          <h3><span class="fa fa-phone">&nbsp;</span>联系我们</h3>
          <ul class="contact">
            <li>免费服务热线： <span>0755-28363539</span></li>
            <li>商业计划专线： <span>0755-82925295</span></li>
            <li>可研报告专线： <span>0755-82925295</span></li>
            <li>政府服务专线： <span>0755-82925295</span></li>
            <li>园区规划专线： <span>0755-82925295</span></li>
            <li>网站合作热线： <span>0755-82925295</span></li>
            <li>媒体合作热线： <span>0755-82925295</span></li>
            <li>报道定制热线： <span>0755-82925295</span></li>
            <li>公司电子邮件： <span>service@ocns.com.cn</span></li>
            <li>节日值班专线： <span>0755-82925295</span></li>
            <li>7*24小时传真： <span>0755-82925295</span></li>
            <li>公司总部地址： <span class="address">深圳市龙岗中心城珠江广场A2栋7楼</span></li>
          </ul>
          <!--<a href="javascript:void(0)"><img width="238" height="250" src="http://d4.sina.com.cn/pfpghc2/201703/06/d9a744ce78374e1ab2554e5b6b48c3c5.jpg" /></a>-->
          <div class="mediaBox">
            <h3><span class="fa fa-video-camera">&nbsp;</span>电视采访</h3>
            <ul>
              <li>
                <a href="/caifangdetail/160219-78c7997d.html" target="_blank"
                  ><img width="105" height="70" alt="精准医学时代来袭 奶粉注册制全面落地" src="/touxiang.jpg" /> <span><strong>央视【交易时间】</strong><br />采访中金产业医药行业研究员 <strong>何锁彦</strong></span></a
                >
              </li>
              <li>
                <a href="/caifangdetail/160219-78c7997d.html" target="_blank"
                  ><img width="105" height="70" alt="精准医学时代来袭 奶粉注册制全面落地" src="/touxiang.jpg" /> <span><strong>凤凰网【菁英汇】</strong><br />采访中金产业医药行业研究员 <strong>何锁彦</strong></span></a
                >
              </li>
              <li>
                <a href="/caifangdetail/160219-78c7997d.html" target="_blank"
                  ><img width="105" height="70" alt="精准医学时代来袭 奶粉注册制全面落地" src="/touxiang.jpg" /> <span><strong>央视【财经天下】</strong><br />采访中金产业医药行业研究员 <strong>何锁彦</strong></span></a
                >
              </li>
              <li>
                <a href="/caifangdetail/160219-78c7997d.html" target="_blank"
                  ><img width="105" height="70" alt="精准医学时代来袭 奶粉注册制全面落地" src="/touxiang.jpg" /> <span><strong>央视【菁英汇】</strong><br />采访中金产业医药行业研究员 <strong>何锁彦</strong></span></a
                >
              </li>
              <li>
                <a href="/caifangdetail/160219-78c7997d.html" target="_blank"
                  ><img width="105" height="70" alt="精准医学时代来袭 奶粉注册制全面落地" src="/touxiang.jpg" /> <span><strong>央视【财经天下】</strong><br />采访中金产业医药行业研究员 <strong>何锁彦</strong></span></a
                >
              </li>
              <li>
                <a href="/caifangdetail/160219-78c7997d.html" target="_blank"
                  ><img width="105" height="70" alt="精准医学时代来袭 奶粉注册制全面落地" src="/touxiang.jpg" /> <span><strong>央视【菁英汇】</strong><br />采访中金产业医药行业研究员 <strong>何锁彦</strong></span></a
                >
              </li>
            </ul>
          </div>
          <div class="mediaCoverageBox">
            <h3><span class="fa fa-internet-explorer">&nbsp;</span>媒体报道</h3>
            <ul>
              <li>
                <a href="/report/caifangdetail/160219-78c7997d.html" target="_blank"><img alt="经济观察网报道中金产业" src="http://img1.qianzhan.com/img/skin/ifeng_logo.png"/></a>
              </li>
              <li>
                <a href="/report/caifangdetail/160219-78c7997d.html" target="_blank"><img alt="经济观察网报道中金产业" src="http://img1.qianzhan.com/img/skin/qq_logo.png"/></a>
              </li>
              <li>
                <a href="/report/caifangdetail/160219-78c7997d.html" target="_blank"><img alt="经济观察网报道中金产业" src="http://img1.qianzhan.com/img/skin/163_logo.png"/></a>
              </li>
              <li>
                <a href="/report/caifangdetail/160219-78c7997d.html" target="_blank"><img alt="经济观察网报道中金产业" src="http://img1.qianzhan.com/img/skin/sina_logo.png"/></a>
              </li>
              <li>
                <a href="/report/caifangdetail/160219-78c7997d.html" target="_blank"><img alt="经济观察网报道中金产业" src="http://img1.qianzhan.com/img/skin/cntv2_logo.png"/></a>
              </li>
              <li>
                <a href="/report/caifangdetail/160219-78c7997d.html" target="_blank"><img alt="经济观察网报道中金产业" src="http://img1.qianzhan.com/img/skin/souhu_logo.png"/></a>
              </li>
              <li>
                <a href="/report/caifangdetail/160219-78c7997d.html" target="_blank"><img alt="经济观察网报道中金产业" src="http://img1.qianzhan.com/img/skin/ce_logo.png"/></a>
              </li>
              <li>
                <a href="/report/caifangdetail/160219-78c7997d.html" target="_blank"><img alt="经济观察网报道中金产业" src="http://img1.qianzhan.com/img/skin/hexun_logo.png"/></a>
              </li>
              <li>
                <a href="/report/caifangdetail/160219-78c7997d.html" target="_blank"><img alt="经济观察网报道中金产业" src="http://img1.qianzhan.com/img/skin/caijing_logo.png"/></a>
              </li>
              <li>
                <a href="/report/caifangdetail/160219-78c7997d.html" target="_blank"><img alt="经济观察网报道中金产业" src="http://img1.qianzhan.com/img/skin/jrj_logo.png"/></a>
              </li>
              <li>
                <a href="/report/caifangdetail/160219-78c7997d.html" target="_blank"><img alt="经济观察网报道中金产业" src="http://img1.qianzhan.com/img/skin/21cbh_logo.png"/></a>
              </li>
              <li>
                <a href="/report/caifangdetail/160219-78c7997d.html" target="_blank"><img alt="经济观察网报道中金产业" src="http://img1.qianzhan.com/img/skin/eeo_logo.png"/></a>
              </li>
            </ul>
          </div>
          <div class="buyBox">
            <h3><span class="fa fa-credit-card">&nbsp;</span>购买流程</h3>
            <ul>
              <li class="s1">
                <p>
                  <strong><span class="fa fa-mobile-phone">&nbsp;</span>电话、邮件或网络确定购买细节</strong>
                </p>
                <p>电话订购：0755-28363539</p>
                <p>邮件订购：<a href="mailto:service@ocns.com.cn">service@ocns.com.cn</a></p>
              </li>
              <li class="s2">
                <p>
                  <strong><span class="fa fa-table">&nbsp;</span>填写并发送报告征订表</strong>
                </p>
                <p><a href="#" target="_blank">下载研究报告征订表»</a></p>
              </li>
              <li class="s3">
                <p>
                  <strong><span class="fa fa-jpy">&nbsp;</span>通过银行汇款支付报告购买款项</strong>
                </p>
                <p><a href="#" target="_blank">公司汇款资料» </a></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--图片分割-->
      <div class="channel-ad-001"></div>
      <div class="reportClass">
        <div id="column" class="column">
          <div class="tit">
            <span><a href="/reports/1/" target="_blank">更多&gt;&gt;</a></span>
            <a href="/reports/1/" target="_blank">{{ `报告分类名称` }}</a>
          </div>
          <div class="pic_txt">
            <a href="http://bg.qianzhan.com/report/detail/1610281705450387.html" target="_blank"><img width="120" height="120" alt="2017-2022年中国生物质成型燃料（BMF）行业市场前瞻与投资战略规划分析报告" original="http://img3.qianzhan123.com/report/cover/16/1610281705450387.gif" src="http://img3.qianzhan123.com/report/cover/16/1610281705450387.gif" style="display: block;"/></a
            ><strong
              ><a href="http://bg.qianzhan.com/report/detail/1610281705450387.html" target="_blank">2017-2022年中国<em class="fontblue">生物质成型燃料（BMF）</em>行业市场前瞻与投资战略规划分析报告</a></strong
            >
            <p>
              报告核心价值在一个供大于求的需求经济时代，企业成功的关键就在于，是否能够在需求尚未形成之时就牢牢的锁定并捕捉到它。那些成功的公......
              <a href="http://bg.qianzhan.com/report/detail/1610281705450387.html" target="_blank">[详细]</a>
            </p>
          </div>
          <div class="list">
            <ul>
              <li>
                <i><a href="1.html" target="_blank">在线订购</a></i
                ><span>·</span
                ><span
                  ><a href="1.html" target="_blank">{{ `报告标题` }}</a></span
                >
              </li>
            </ul>
          </div>
          <div class="tags">
            <a target="_blank" href="http://bg.qianzhan.com/report/detail/1611280933127732.html"
              >绿色能源（清洁能源）<sup><img src="http://bg.qianzhan.com/img/skin/hot_sup.gif" width="22" height="12" alt=""/></sup
            ></a>
            <a target="_blank" href="http://bg.qianzhan.com/report/detail/1608181721161729.html"
              >动力电池PACK<sup><img src="http://bg.qianzhan.com/img/skin/hot_sup.gif" width="22" height="12" alt=""/></sup
            ></a>
            <a target="_blank" href="http://bg.qianzhan.com/report/detail/9362d09481d745c1.html">售电公司</a>
            <a target="_blank" href="http://bg.qianzhan.com/report/detail/9e0582d45a794375.html">互联网+储能</a>
            <a target="_blank" href="http://bg.qianzhan.com/report/detail/575aec1541c14bf3.html">油气储备建设</a>
            <a target="_blank" href="http://bg.qianzhan.com/report/detail/b71201ae0d0a496c.html">固废处理</a>
            <a target="_blank" href="http://bg.qianzhan.com/report/detail/fd9e2913e9f5454b.html">水质监测</a>
            <a target="_blank" href="http://bg.qianzhan.com/report/detail/e977bb88d00848e9.html">互联网+炼油化工设备</a>
            <a target="_blank" href="http://bg.qianzhan.com/report/detail/2ddae773043e425e.html">煤代油</a>
            <a target="_blank" href="http://bg.qianzhan.com/report/detail/cb6f693f17a34104.html">水力发电</a>
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
import IndexDiagram from "./components/index-diagram.vue";
import MiddleHeadlines from "./components/middle-headlines.vue";
import right from "./components/right.vue";
import newClass from "./components/news-class.vue";
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
  filters:{
      _formatSubtitle(a){
          console.log(a)
          return a.length>3?a.slice(0,2):a;
      }
  },
  async asyncData({ app, error }) {
    try {
    //   /* 获取栏目列表数据 */
    //   const {
    //     data: { data: classNewsList }
    //   } = await app.$axios.post("/v1/sqlites/class_news_list", {
    //     childClassName: classNames[1],
    //     firstClassName: classNames[0],
    //     pageSize: 10,
    //     pageNumber: 1
    //   });
    //   /* 获取报告导航条数据 */
      const {
        data: { data: channelReportNavData }
      } = await app.$axios.post("/v1/reports/report_class", {});
      /* 获取header头部数据 */
      const {
        data: { data: headerTopNav }
      } = await app.$axios.post("/v1/sqlites/header_top_nav", {});

      return { channelReportNavData,headerTopNav };

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
