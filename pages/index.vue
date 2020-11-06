<template>
  <div>
    <div class="navbox">
      <div class="navTop">
        <span class="left">你好,欢迎来到中金产业咨询网! </span>&nbsp;<span style="color:#dddddd;">|</span>&nbsp;&nbsp;<a href="javascript:addFavorite('中金产业投资咨询网','http://www.ocns.com.cn')">加入收藏夹</a>
        <div class="right">
          <ul>
            <li class="red">
              <a href="/reports/recent/" target="_blank">最新报告</a>
            </li>
            <li class="red">
              <a href="/reports/" target="_blank">行业研究报告</a>
            </li>
            <li>
              <a href="javascript:void(0)" target="_blank">帮助中心</a>
            </li>
            <li>
              <a href="http://ciccindustry.com/lianxiwomen/" target="_blank">联系我们</a>
            </li>
            <li>
              <a href="javascript:void(0)" target="_blank">服务项目</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="header-search">
      <a class="lf" href="/"><img src="~@/assets/images/logo.gif" alt="logo"/></a>
      <div class="searchBox lf">
        <div class="search">
          <form action="#">
            <input type="text" />
            <input type="button" value="搜索" />
          </form>
        </div>
        <div class="hot_words">
          <a href="#">大数据</a>
          <a href="#">无人机</a>
          <a href="#">养老产业</a>
          <a href="#">虚拟现实</a>
          <a href="#">智慧城市</a>
          <a href="#">民营银行</a>
          <a href="#">互联网+</a>
          <a href="#">移动支付</a>
          <a href="#" class="why">为什么选择我们?</a>
        </div>
      </div>
      <div class="tel rf">
        <ul>
          <li class="tip">全国服务热线:</li>
          <li class="tel">400 402 1212</li>
          <li class="title">中国首选研究报告市场!</li>
        </ul>
      </div>
    </div>

    <nav class="nav">
      <ul class="navMenu">
        <li>
          <a href="/reports/">行业报告</a>
        </li>
        <li>
          <a href="#">研究院</a>
        </li>
        <li>
          <a href="/shujuzhongxin/" target="_blank">数据中心</a>
        </li>
        <li>
          <a href="#">产经</a>
        </li>
        <li>
          <a href="#">高端峰会</a>
        </li>
        <li>
          <a href="http://ciccindustry.com/yuanquyunyingzixun/" target="_blank">投资咨询</a>
        </li>
        <li>
          <a href="http://ciccindustry.com/zsyz/" target="_blank">市场调研</a>
        </li>
        <li>
          <a href="http://ciccindustry.com/guihuazixun/" target="_blank">政府规划</a>
        </li>
        <li>
          <a href="http://ciccindustry.com/zhengfuzhaoshang/zhaoshangdaili/" target="_blank">招商代理</a>
        </li>
        <li>
          <a href="http://ciccindustry.com/yqyygl/" target="_blank">园区运营</a>
        </li>
      </ul>
      <ul class="nav-sub">
        <li>
          <a href="/chanye/" class="strong">产业</a>
        </li>
        <li>
          <a href="/chanye/zhengce/" target="_blank">政策</a>
        </li>
        <li>
          <a href="/chanye/yuce/" target="_blank">预测</a>
        </li>
        <li>
          <a href="/hongguan/" class="strong" target="_blank">宏观</a>
        </li>
        <li>
          <a href="/hongguan/dongtai/" target="_blank">动态</a>
        </li>
        <li>
          <a href="/hongguan/baogao/" target="_blank">报告</a>
        </li>
        <li>
          <a href="/jinrong/" class="strong">金融</a>
        </li>
        <li>
          <a href="/jinrong/bank/" target="_blank">银行</a>
        </li>
        <li>
          <a href="/jinrong/baoxian/" target="_blank">保险</a>
        </li>
        <li>
          <a href="/zhengquan/" class="strong" target="_blank">证券</a>
        </li>
        <li>
          <a href="/zhengquan/xingu/" target="_blank">新股</a>
        </li>
        <li>
          <a href="/zhengquan/gegu/" target="_blank">个股</a>
        </li>
        <li>
          <a href="/keji/" class="strong" target="_blank">科技</a>
        </li>
        <li>
          <a href="/keji/AI/" target="_blank"> AI</a>
        </li>
        <li>
          <a href="/keji/yidonghulian/" target="_blank">互联网+</a>
        </li>
        <li>
          <a href="/shangye/" class="strong" target="_blank">商业</a>
        </li>
        <li>
          <a href="/shangye/chuangye/" target="_blank">创业</a>
        </li>
        <li>
          <a href="/shangye/renwu/" target="_blank">人物</a>
        </li>
        <li>
          <a href="/qiche/" class="strong" target="_blank">汽车</a>
        </li>
        <li>
          <a href="/qiche/xinche/" target="_blank">新车</a>
        </li>
        <li>
          <a href="/qiche/pingce/" target="_blank">评测</a>
        </li>
        <li>
          <a href="/shenghuo/" class="strong" target="_blank">生活</a>
        </li>
        <li>
          <a href="/shenghuo/yingshi/" target="_blank">影视</a>
        </li>
        <li>
          <a href="/shenghuo/youxi/" target="_blank">游戏</a>
        </li>
      </ul>
    </nav>

    <!--主体 报告树-->
    <section class="section" id="section">
      <div class="section-left lf" id="section-left">
        <span class="section-left-ico">行业研究报告</span>
        <ul>
        <template  v-for="(item,i) in reportClass">
        <li :key="i"  @mouseover.stop="item[0].show=true" @mouseleave.stop="item[0].show=false">
            <h3><a  :href="`/reports/${item[0].reports_directory}/`">{{item[0].title}}</a>、<a  :href="`/reports/${item[1].reports_directory}/`">{{item[1].title}}</a></h3>
            <div class="sectionSubContent" id="sectionSubContent" :style="item[0].show?'display:block':'display:none'">
              <div id="sectionLeftContent" class="sectionLeftContent">
                <dl v-if="i1<7" :key="i1" class="smallIndustry" v-for="(item1,i1) in item">
                  <dt>
                    <em><a :href="`/reports/${item1.reports_directory}/1`">{{item1.title}}</a></em>
                  </dt>
                    <dd>
                      <em  :key="i" v-for="(item2,i) in item1.child" >
                        <a  :href="`/reports/${item2.reports_directory}/1`">{{item2.sub_title}}</a>
                      </em>
                    </dd>
                </dl>
              </div>
              <div class="subContent rf" id="subContent">
                <h4><b>推荐报告</b></h4>
                <ul>
                  <li>
                    <a href="#">石油研究报告</a>
                  </li>
                  <li>
                    <a href="#">石化研究报告</a>
                  </li>
                  <li>
                    <a href="#">石油天然气研究报告</a>
                  </li>
                  <li>
                    <a href="#">柴油研究报告</a>
                  </li>
                  <li>
                    <a href="#">机油研究报告</a>
                  </li>
                  <li>
                    <a href="#">页岩气研究报告</a>
                  </li>
                  <li>
                    <a href="#">其他研究报告</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </template>
        </ul>
      </div>
      <div class="section-right lf">
        <div class="hotBox">
          <h1><a href="/" target="_blank" title="">3</a></h1>
          <ul>
            <li>
              <a href="/" target="_blank" title="">3</a>
            </li>
            <li>
              <a href="/" target="_blank" title="">3</a>
            </li>
            <li>
              <a href="/" target="_blank" title="">3</a>
            </li>
            <li>
              <a href="/" target="_blank" title="">3</a>
            </li>
            <li>
              <a href="/" target="_blank" title="">2</a>
            </li>
            <li>
              <a href="/" target="_blank" title="">1</a>
            </li>
          </ul>
        </div>
        <div class="bannerBox" id="bannerBox">
          <a href="#" class="left" id="pre"></a>
          <ul id="pictures">
            <li>
              <a href="#"><img src="http://n.sinaimg.cn/finance/20161025/A3VI-fxwztru7105348.png" alt="第1张图片"/></a>
            </li>
            <li>
              <a href="#"><img src="http://n.sinaimg.cn/finance/transform/20161026/AQ7d-fxwztrt0464358.jpg" alt="第2张图片"/></a>
            </li>
            <li>
              <a href="#"><img src="http://n.sinaimg.cn/finance/transform/20161026/jK-u-fxwztrw3832731.jpg" alt="第3张图片"/></a>
            </li>
            <li>
              <a href="#"><img src="http://n.sinaimg.cn/finance/transform/20161026/q6gX-fxwztrt0462548.jpg" alt="第4张图片"/></a>
            </li>
            <li>
              <a href="#"><img src="http://i3.sinaimg.cn/cj/zl/china/idx/2014/0606/U10971P31T879D220F27039DT20140606162810.jpg" alt="第5张图片"/></a>
            </li>
          </ul>
          <div class="bannerText" id="bannerText">
            <div class="marsk">
              <div class="text">新闻加载中...</div>
            </div>
            <div id="jump" class="jump">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <a href="#" class="right" id="next"></a>
        </div>
        <div class="trendNews">
          <ul>
            {{
              `ads_exclusiveData.adContent`
            }}
          </ul>
        </div>
      </div>
    </section>
    <section class="sectionMain">
      <div class="main">
        <!--mainLeft-->
        <div class="mainLeftBox lf">
          <div class="index-ad-001"></div>
          <div class="content">
            <div class="yaowen lf">
              <h4 class="title">
                要闻<span class="more"><a href="/chanye/62" target="_blank">更多</a></span>
              </h4>
              <ul>
                <li>
                  <a href="/" title="" target="_blank">12</a>
                </li>
              </ul>
            </div>
            <div class="redian lf">
              <h4 class="title">
                产业热点<span class="more"><a href="/chanye/redian/69" target="_blank">更多</a></span>
              </h4>
              <div class="newImg"></div>
              <ul class="newList">
                <li>
                  <a href="/" title="" target="_blank">12</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="content">
            <div class="yaowen lf">
              <h4 class="title">
                宏观<span class="more"><a href="/hongguan/73" target="_blank">更多</a></span>
              </h4>
              <ul>
                <li>
                  <a href="/" title="" target="_blank">12</a>
                </li>
              </ul>
            </div>
            <div class="redian lf">
              <h4 class="title">
                产业预测<span class="more"><a href="/chanye/yuce/67" target="_blank">更多</a></span>
              </h4>
              <div class="reportImg">
                <ul>
                  {{
                    `ads_tipster.adContent`
                  }}
                </ul>
              </div>
              <ul class="newList">
                <li>
                  <a href="/" title="" target="_blank">12</a>
                </li>
              </ul>
            </div>
          </div>
          <!--第二位图-->
          <div class="index-ad-002"></div>
          <div class="content">
            <div class="jinrong lf">
              <h4 class="title">
                金融<span class="more"><a href="/jinrong/27" target="_blank">更多</a></span>
              </h4>
              <ul>
                <li>
                  <a href="/" title="" target="_blank">12</a>
                </li>
              </ul>
            </div>
            <div class="redian lf">
              <h4 class="title">
                投资机会<span class="more"><a href="/chanye/jihui/71" target="_blank">更多</a></span>
              </h4>
              <div class="jihuiImg">
                <ul>
                  <li>
                    <h5><span class="fa fa-exclamation-circle"></span><a href="/" title="" target="_blank">12</a></h5>
                    <p>12</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="zhengquan lf">
              <h4 class="title">
                证券<span class="more"><a href="/zhengquan/4" target="_blank">更多</a></span>
              </h4>
              <ul>
                <li>
                  <a href="/" title="/" target="_blank">456</a>
                </li>
              </ul>
            </div>
            <div class="jihui lf">
              <h4 class="title">
                策略<span class="more"><a href="/zhengquan/" target="_blank">更多</a></span>
              </h4>
              <div class="newImg">
                <a href="/zhengquan/" target="_blank"><img title="上证指数实时行情" src="http://image.sinajs.cn/newchart/hollow/small/nsh000001.gif?1477556616548" width="250" height="124"/></a>
                <h5><a href="" target="_blank">324</a></h5>
                <p>
                  <a href="" target="_blank">中金产业证券策略栏目每日实时更新股票行情。通过股票交易研究员的精湛分析，为您股海驰骋注入动力...</a>
                </p>
              </div>
              <ul class="newList">
                <li>
                  <a href="/" title="" target="_blank">12</a>
                </li>
              </ul>
            </div>
          </div>
          <!--第三位图-->
          <div class="index-ad-003"></div>
          <div class="content">
            <div class="yaowen lf">
              <h4 class="title">
                科技<span class="more"><a href="/keji/55" target="_blank">更多</a></span>
              </h4>
              <ul>
                <li>
                  <a href="/" title="" target="_blank">12</a>
                </li>
              </ul>
            </div>
            <div class="redian lf">
              <h4 class="title">
                热门峰会<span class="more"><a href="#">更多</a></span>
              </h4>
              <div class="meetingImg">
                <ul>
                  <li>
                    <a href="#"><img src="http://www.ocn.com.cn/Upload/userfiles/cy0.jpg" width="250" height="50"/></a>
                    <p>大西安国际海绵城市建设发展博览会</p>
                  </li>
                  <li>
                    <a href="#"><img src="http://www.ocn.com.cn/Upload/userfiles/ocnbtz.gif" width="250" height="50"/></a>
                    <p>大西安国际海绵城市建设发展博览会</p>
                  </li>
                  <li>
                    <a href="#"><img src="http://www.ocn.com.cn/Upload/userfiles/jx.gif" width="250" height="50"/></a>
                    <p>大西安国际海绵城市建设发展博览会</p>
                  </li>
                  <li>
                    <a href="#"><img src="http://www.ocn.com.cn/Upload/userfiles/bj.gif" width="250" height="50"/></a>
                    <p>大西安国际海绵城市建设发展博览会</p>
                  </li>
                </ul>
              </div>
              <ul class="newList">
                <li>
                  <a href="#">《中国银行业理财市场报告(2016上半年)》发布</a>
                </li>
                <li>
                  <a href="#">《2016年全球性别差距报告》男女经济机会不平等扩大</a>
                </li>
                <li>
                  <a href="#">全国饭店行业“营改增”政策红利开始</a>
                </li>
                <li>
                  <a href="#">中国华电集团成为首家编制碳排放专项</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="content">
            <div class="yaowen lf">
              <h4 class="title">
                商业<span class="more"><a href="/shangye/31" target="_blank">更多</a></span>
              </h4>
              <ul>
                <li>
                  <a href="/" title="" target="_blank">12</a>
                </li>
              </ul>
            </div>
            <div class="jihui lf">
              <h4 class="title">
                招商<span class="more"><a href="/chanye/zhaoshang/72" target="_blank">更多</a></span>
              </h4>
              <div class="newImg">
                34234
              </div>
              <ul class="newList">
                <li>
                  <a href="/" title="" target="_blank">12</a>
                </li>
              </ul>
            </div>
          </div>
          <!--第四位图-->
          <div class="index-ad-004"></div>
          <div class="content">
            <div class="yaowen lf">
              <h4 class="title">
                汽车<span class="more"><a href="/qiche/2" target="_blank">更多</a></span>
              </h4>
              <ul>
                <li>
                  <a href="/" title="" target="_blank">12</a>
                </li>
              </ul>
            </div>
            <div class="jihui lf">
              <h4 class="title">
                公司<span class="more"><a href="/chanye/gongsi/66" target="_blank">更多</a></span>
              </h4>
              <div class="newImg">121212</div>
              <ul class="newList">
                <li>
                  <a href="/" title="" target="_blank">12</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="content">
            <div class="yaowen lf">
              <h4 class="title">
                生活<span class="more"><a href="/shenghuo/82" target="_blank">更多</a></span>
              </h4>
              <ul>
                <li>
                  <a href="/" title="" target="_blank">12</a>
                </li>
              </ul>
            </div>
            <div class="redian lf">
              <h4 class="title">
                预警<span class="more"><a href="/chanye/yujing/68" target="_blank">更多</a></span>
              </h4>
              <div class="warningImg">
                <ul>
                  <li>
                    <h5><span class="fa fa-exclamation-circle"></span><a href="/" title="" target="_blank">12</a></h5>
                    <p>12</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!--mainRihgt-->
        <div class="mainRightBox rf">
          <div class="content">
            <div class="paihangbang lf">
              <ul class="title" id="ph">
                <li>
                  <h4 class="current"><a href="/reports/recent/" target="_blank">最新报告</a></h4>
                </li>
                <li>
                  <h4><a href="#">热点报告</a></h4>
                </li>
              </ul>
              <ul class="newsListWeek" id="newsListWeek">
                <li>
                  <a href="#"><img src="~@/assets/images/banner-1.jpg" width="70" height="70"/></a>
                  <h5><a href="#">1周云计算市场风起云涌周云计算市场风起云涌</a></h5>
                  <p>阿里云为扩大市场份额疯阿里,阿里云为扩大市场份额疯,云为扩大市场份额疯...</p>
                </li>
                <li>
                  <a href="#">2017-2022年中国飞机漆行业市场需求与投资咨询报告</a>
                </li>
              </ul>
              <ul class="newsListMonth" id="newsListMonth" style="display: none;">
                <li>
                  <a href="#"><img src="~@/assets/images/banner-1.jpg" width="70" height="70"/></a>
                  <h5><a href="#">铜冠金源:美豆走出阴霾 豆油跨月正套</a></h5>
                  <p>10月USDA供需报告显示,美国2016/17年度美豆单产预估为51.4蒲式耳/英亩,总产量...</p>
                </li>
                <li>
                  <a href="#">浦上大道改造工程项目建议书获批 计划明年9月通车</a>
                </li>
                <li>
                  <a href="#">新浪财经晚报:10月27日晚间影响市场消息汇总</a>
                </li>
                <li>
                  <a href="#">美国初请和9月订单数据均差于预期 美指平淡黄金微升</a>
                </li>
                <li>
                  <a href="#">路透调查显示:人民币空头创近10个月高位</a>
                </li>
                <li>
                  <a href="#">人民币小幅下挫 交投活跃至1月7日来新高</a>
                </li>
                <li>
                  <a href="#">恒生银行:10月27汇市及金市要闻</a>
                </li>
                <li>
                  <a href="#">第四届德国电影节11月开幕 共造艺术电影月</a>
                </li>
                <li>
                  <a href="#">成都女子离家1个月 回家发现房子已属他人(图)</a>
                </li>
                <li>
                  <a href="#">云计算市场风起云涌 阿里云为扩大市场份额疯狂</a>
                </li>
                <li>
                  <a href="#">10月27日黄金晨报:多空鏖战200日均 短期料继续震荡</a>
                </li>
              </ul>
            </div>
          </div>
          <!--热门关键词-->
          <div class="content">
            <div class="hotKey lf">
              <ul class="title">
                <li>
                  <h4>
                    <a href="#">热门关键词</a><span><a href="#">更多...</a></span>
                  </h4>
                </li>
              </ul>
              <div id="hotKey" ref="hotKey">
                <a href="#" target="_blank">二次元</a>
                <a href="#" target="_blank">医养结合模式</a>
                <a href="#" target="_blank">智慧医疗</a>
                <a href="#" target="_blank">中国制造2025</a>
                <a href="#" target="_blank">数据中国</a>
                <a href="#" target="_blank">虚拟现实</a>
                <a href="#" target="_blank">无人驾驶汽车</a>
                <a href="#" target="_blank">5G</a>
                <a href="#" target="_blank">人工智能</a>
                <a href="#" target="_blank">充电桩</a>
                <a href="#" target="_blank">绿色建材</a>
                <a href="#" target="_blank">足球产业</a>
                <a href="#" target="_blank">智能装备</a>
                <a href="#" target="_blank">众筹行业</a>
                <a href="#" target="_blank">电子竞技</a>
                <a href="#" target="_blank">太阳能光伏</a>
                <a href="#" target="_blank">一带一路</a>
                <a href="#" target="_blank">民营银行申请</a>
                <a href="#" target="_blank">休闲食品</a>
                <a href="#" target="_blank">产业规划</a>
                <a href="#" target="_blank">体育产业</a>
                <a href="#" target="_blank">养老地产</a>
                <a href="#" target="_blank">机械行业</a>
                <a href="#" target="_blank">化妆品</a>
                <a href="#" target="_blank">3D打印</a>
                <a href="#" target="_blank">物联网</a>
                <a href="#" target="_blank">快时尚服装</a>
                <a href="#" target="_blank">基因检测</a>
                <a href="#" target="_blank">电动汽车充换电站</a>
                <a href="#" target="_blank">大健康</a>
                <a href="#" target="_blank">循环经济园区</a>
                <a href="#" target="_blank">生态修复</a>
                <a href="#" target="_blank">静脉园区</a>
                <a href="#" target="_blank">智能交通</a>
                <a href="#" target="_blank">机器人</a>
                <a href="#" target="_blank">生态农业</a>
                <a href="#" target="_blank">新能源汽车</a>
                <a href="#" target="_blank">新材料</a>
                <a href="#" target="_blank">生物制药</a>
                <a href="#" target="_blank">动漫</a>
                <a href="#" target="_blank">主题酒店</a>
                <a href="#" target="_blank">页岩气</a>
                <a href="#" target="_blank">网络文学</a>
                <a href="#" target="_blank">冷链物流</a>
                <a href="#" target="_blank">旅游地产</a>
                <a href="#" target="_blank">物流园区</a>
                <a href="#" target="_blank">电影</a>
                <a href="#" target="_blank">可行性研究报告</a>
                <a href="#" target="_blank">职业教育</a>
                <a href="#" target="_blank">锂电池</a>
                <a href="#" target="_blank">文化产业</a>
                <a href="#" target="_blank">集成电路</a>
                <a href="#" target="_blank">垃圾处理</a>
                <a href="#" target="_blank">环保产业</a>
                <a href="#" target="_blank">中药饮片</a>
                <a href="#" target="_blank">包装印刷</a>
                <a href="#" target="_blank">再生金属</a>
                <a href="#" target="_blank">医疗器械</a>
                <a href="#" target="_blank">影视产业</a>
                <a href="#" target="_blank">可再生能源</a>
              </div>
            </div>
          </div>
          <!--图片分割-->
          <!-- <div class="index-ad-005"></div> -->
          <!--数据中心-->
          <div class="content">
            <div class="dataCenter lf">
              <ul class="title">
                <li>
                  <h4>
                    <a href="#">数据中心</a><span><a href="#">更多...</a></span>
                  </h4>
                </li>
              </ul>
              <ul class="dataNewsList">
                <li>
                  <a href="#"><img src="~@/assets/images/banner-1.jpg" width="70" height="70"/></a>
                  <h5><a href="#">周云计算市场风起云涌周云计算市场风起云涌</a></h5>
                  <p>阿里云为扩大市场份额疯阿里,阿里云为扩大市场份额疯,云为扩大市场份额疯...</p>
                </li>
                <li>
                  <i>1</i>
                  <a href="#">全国饭店行业“营改增”政策红利开始显现</a>
                </li>
                <li>
                  <i>2</i>
                  <a href="#">中国华电集团成为首家编制碳排放专项规划央企</a>
                </li>
                <li>
                  <i>3</i>
                  <a href="#">售电公司参与电力市场交易 请吃透这些注意事项</a>
                </li>
                <li>
                  <i>4</i>
                  <a href="#">京港澳高速公交道半月平均提速约65%</a>
                </li>
                <li>
                  <i>5</i>
                  <a href="#">天津自贸区对外投资持续倍增 占全市比重超8成</a>
                </li>
                <li>
                  <i>6</i>
                  <a href="#">中美可持续城镇化合作项目在京落地</a>
                </li>
                <li>
                  <i>7</i>
                  <a href="#">全国饭店行业“营改增”政策红利开始显现</a>
                </li>
                <li>
                  <i>8</i>
                  <a href="#">中国华电集团成为首家编制碳排放专项规划央企</a>
                </li>
                <li>
                  <i>9</i>
                  <a href="#">云计算市场风起云涌 阿里云为扩大市场份额疯狂</a>
                </li>
                <li>
                  <i>10</i>
                  <a href="#">售电公司参与电力市场交易 请吃透这些注意事项</a>
                </li>
              </ul>
            </div>
          </div>
          <!--投资专题-->
          <div class="content">
            <div class="special lf">
              <ul class="title">
                <li>
                  <h4>
                    <a href="#">投资专题</a><span><a href="#">更多...</a></span>
                  </h4>
                </li>
              </ul>
              <div id="specialImg" class="specialImg">
                <a href="#" target="_blank"><img src="http://n.sinaimg.cn/finance/20161012/23IO-fxwrhpn9757117.jpg" alt=""/></a>
                <a href="#" target="_blank"><img src="http://n.sinaimg.cn/finance/20161028/pJfI-fxxfyez2172537.jpg" alt=""/></a>
                <a href="#" target="_blank"><img src="http://n.sinaimg.cn/finance/20161028/Nl3T-fxxfyez2172591.jpg" alt=""/></a>
                <a href="#" target="_blank"><img src="http://n.sinaimg.cn/finance/20161012/23IO-fxwrhpn9757117.jpg" alt=""/></a>
                <a href="#" target="_blank"><img src="http://n.sinaimg.cn/finance/20161028/BGuL-fxxfyex5397872.jpg" alt=""/></a>
              </div>
            </div>
          </div>
          <!--中智观点-->
          <div class="content">
            <div class="viewpoint lf">
              <ul class="title">
                <li>
                  <h4>
                    <a href="#">中智观点</a><span><a href="#">更多...</a></span>
                  </h4>
                </li>
              </ul>
              <ul class="viewpointNewsList">
                <li>
                  <a href="#"><img src="https://img3.qianzhan.com/analyst/photos/201806/05092018_7213_180x180.gif" width="70" height="70"/></a>
                  <h5><a href="#">周云计算市场风起云涌周云计算市场风起云涌</a></h5>
                  <p>徐志祥</p>
                </li>
                <li>
                  <i class="fa fa-comment"></i>
                  <a href="#">石墨烯或将入选十三五规划 探寻行业现状</a>
                </li>
                <li>
                  <i class="fa fa-comment"></i>
                  <a href="#">网络安全获互联网大会关注</a>
                </li>
                <li>
                  <i class="fa fa-comment"></i>
                  <a href="#">在线教育热度不减 行业高速增长依然可期</a>
                </li>
                <li>
                  <i class="fa fa-comment"></i>
                  <a href="#">传统产业园区发展遭遇瓶颈 智慧园区建设成趋</a>
                </li>
                <li>
                  <i class="fa fa-comment"></i>
                  <a href="#">油储条例进入立法调研阶段 行业提升空间巨大</a>
                </li>
              </ul>
              <ul class="viewpointNewsImg">
                <li>
                  <div class="marsk">
                    <a href="#">罗娟</a>
                  </div>
                  <a href="#"><img src="https://img3.qianzhan.com/analyst/photos/201911/20161646_10204_180x180.gif" width="72" height="72"/></a>
                </li>
                <li>
                  <div class="marsk">
                    <a href="#">杨东</a>
                  </div>
                  <a href="#"><img src="https://img3.qianzhan.com/analyst/photos/201911/20161646_10204_180x180.gif" width="72" height="72"/></a>
                </li>
                <li>
                  <div class="marsk">
                    <a href="#">张敏</a>
                  </div>
                  <a href="#"><img src="https://img3.qianzhan.com/analyst/photos/201911/20161646_10204_180x180.gif" width="72" height="72"/></a>
                </li>
                <li>
                  <div class="marsk">
                    <a href="#">杨坤</a>
                  </div>
                  <a href="#"><img src="https://img3.qianzhan.com/analyst/photos/201911/20161646_10204_180x180.gif" width="72" height="72"/></a>
                </li>
                <li>
                  <div class="marsk">
                    <a href="#">菲菲</a>
                  </div>
                  <a href="#"><img src="https://img3.qianzhan.com/analyst/photos/201911/20161646_10204_180x180.gif" width="72" height="72"/></a>
                </li>
                <li>
                  <div class="marsk">
                    <a href="#">杨宏</a>
                  </div>
                  <a href="#"><img src="https://img3.qianzhan.com/analyst/photos/201911/20161646_10204_180x180.gif" width="72" height="72"/></a>
                </li>
              </ul>
            </div>
          </div>
          <!--图片分割-->
          <div class="index-ad-006" style="background:#001449;">
          <img src="https://n.sinaimg.cn/default/d3f34f8d/20190508/toujiao_ds_home.jpg"/>
          </div>
          <div class="content">
            <div class="journal lf">
              <ul class="title">
                <li>
                  <h4>
                    <a href="#">研究刊物</a><span><a href="#">更多...</a></span>
                  </h4>
                </li>
              </ul>
              <ul class="journalList">
                <li>
                  <a href="#"><img src="http://www.ocn.com.cn/uploadfile/picture/2015129103646227.jpg" width="100" height="130"/></a>
                  <h5><a href="#">【产业刊物】3D打印行业06期</a></h5>
                  <p>研究刊物是中智研究中心结合多年产业研究经验，使用目前较先进的产业竞争情报监测系统，每月对行业紧密跟踪监测，经过专业严格筛选，整合形成行业简版报告。</p>
                </li>
                <li>
                  <i class="fa fa-book"></i>
                  <a href="#">【05期】石墨烯或将入选十三五规划 探寻行业现状</a>
                </li>
                <li>
                  <i class="fa fa-book"></i>
                  <a href="#">【04期】网络安全获互联网大会关注</a>
                </li>
                <li>
                  <i class="fa fa-book"></i>
                  <a href="#">【03期】在线教育热度不减 行业高速增长依然可期</a>
                </li>
                <li>
                  <i class="fa fa-book"></i>
                  <a href="#">【02期】传统产业园区发展遭遇瓶颈 智慧园区建设成趋</a>
                </li>
                <li>
                  <i class="fa fa-book"></i>
                  <a href="#">【01期】油储条例进入立法调研阶段 行业提升空间巨大</a>
                </li>
              </ul>
              <ul class="journalListImg">
                <li>
                  <div class="marsk">
                    <a href="#">环保行业</a>
                  </div>
                  <a href="#"><img src="http://ms.ocn.com.cn/uploadfile/picture/20152313504354.jpg" width="80" height="100"/></a>
                </li>
                <li>
                  <div class="marsk">
                    <a href="#">高端装备</a>
                  </div>
                  <a href="#"><img src="http://ms.ocn.com.cn/uploadfile/picture/201523121456444.jpg" width="80" height="100"/></a>
                </li>
                <li>
                  <div class="marsk">
                    <a href="#">节能减排</a>
                  </div>
                  <a href="#"><img src="http://ms.ocn.com.cn/uploadfile/picture/20152313504354.jpg" width="80" height="100"/></a>
                </li>
                <li>
                  <div class="marsk">
                    <a href="#">文化行业</a>
                  </div>
                  <a href="#"><img src="http://ms.ocn.com.cn/uploadfile/picture/20152312427991.jpg" width="80" height="100"/></a>
                </li>
                <li>
                  <div class="marsk">
                    <a href="#">3D打印</a>
                  </div>
                  <a href="#"><img src="http://www.ocn.com.cn/uploadfile/report/report_1905.jpg" width="80" height="100"/></a>
                </li>
                <li>
                  <div class="marsk">
                    <a href="#">房地产行业</a>
                  </div>
                  <a href="#"><img src="http://ms.ocn.com.cn/uploadfile/picture/2015231274491.jpg" width="80" height="100"/></a>
                </li>
              </ul>
            </div>
          </div>
          <!--图片分割-->
          <!-- <div class="index-ad-007"></div> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import setReportTree from "@/lib/report-tree.js"
export default {
  layout:"channel",
  components: {},
  data(){
    return {
    }
  },
  methods: {
    /* 报告关键词着色 */
    _setReportColor() {
      const hrefs = this.$refs.hotKey.querySelectorAll("a");
      hrefs.forEach(item => {
        item.style.color = `#${((Math.random() * 16777215) << 0).toString(16)}`;
        item.style.fontSize = `${Math.floor(Math.random() * (28 - 12 + 1) + 12)}px`;
      });
    },
    /* 加入收藏 */
    _addFavorite() {
      try {
      } catch (e) {}
    }
  },
  async created() {
    this._addFavorite();
    await this.$nextTick();
    this._setReportColor();
  },
  async asyncData({app,error}) {
    try {
      const {
        data: { data: reportClass1 }
      } =  await app.$axios.post("/v1/reports/report_class",{});
      const reportClass = setReportTree(reportClass1)
      return {reportClass};
      
    } catch (err) {
      error({ statusCode: 404, message: "Post not found" });
    }
  }
};
</script>

<style lang="scss">
.navbox {
  width: 100%;
  display: block;
  line-height: 35px;
  height: 35px;
  background-color: #f5f5f5;
}
.navTop {
  width: 998px;
  margin: 0 auto;
  font-size: 12px;
}
.navTop .right {
  float: right;
}
.navTop .right ul li {
  float: left;
}
.navTop .right ul li.red > a {
  color: red;
  font-weight: bold;
}
.navTop .right ul li:not(:last-child):after {
  color: red;
  content: "|";
  padding: 0 5px;
  color: #bfbfbf;
}

.header-search {
  &:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  @include container;
  .searchBox {
    margin-left: 25px;
    margin-top: 15px;
    background-color: $zzblue;
    width: 538px;
    height: 37px;
    input[type="text"] {
      width: 456px;
      height: 26px;
      border: 1px solid transparent;
      margin: 5px;
      padding: 0 5px;
    }
    input[type="button"] {
      background-color: $zzblue;
      color: $zzLight-0;
      border: none;
      width: 55px;
      height: 30px;
      font-weight: bold;
      font-size: $fs14;
      cursor: pointer;
    }
    .hot_words {
      margin-top: 3px;
      font-size: $fs12;
      & > a {
        margin: 0 3px;
      }
      & > a.why {
        color: red;
        text-decoration: underline;
      }
    }
  }
  div.tel {
    margin-top: 10px;
    ul li {
      line-height: 20px;
    }
    ul li.tip {
      color: $zzblack;
      font-weight: bold;
      font-size: $fs12;
    }
    ul li.tel {
      color: red;
      font-weight: bold;
      font-size: $fs22;
    }
    ul li.title {
      color: $zzLight-2;
      font-weight: bold;
      font-size: $fs12;
    }
  }
}

.nav {
  margin-top: 20px !important;
  @include container;
  .navMenu {
    background-color: $zzblue;
    height: 35px;
    > li {
      float: left;
      height: 35px;
      line-height: 35px;
      > a {
        display: block;
        color: $zzLight-0;
        padding: 0 20px;
        text-align: center;
        height: 35px;
        &:hover {
          text-decoration: none;
          background: $zzblueLight;
        }
      }
    }
  }
  .nav-sub {
    height: 35px;
    line-height: 35px;
    border: 1px solid $zzLight-1;
    padding-left: 16px;
    > li {
      float: left;
      margin: 0 5px;
      > a {
        color: $zzblack;
      }
      > a.strong {
        font-weight: bold;
        color: $zzblue;
      }
    }
  }
}

section.section {
  overflow: hidden;
  @include container;
  .section-left {
    position: relative;
    z-index: 3;
    padding-left: 15px;
    margin-top: 15px;
    background-color: #fff7f5;
    border: 1px solid #e6d9d0;
    border-top: 1px solid transparent;
    width: 200px;
    .section-left-ico {
      background: -webkit-linear-gradient(left, #f9ac80, #f7834a);
      /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(right, #f9ac80, #f7834a);
      /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(right, #f9ac80, #f7834a);
      /* Firefox 3.6 - 15 */
      background: linear-gradient(to right, #f9ac80, #f7834a);
      //ie
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f9ac80', endColorstr='#f7834a',GradientType=0);
      /* 标准的语法 */
      height: 35px;
      line-height: 35px;
      display: block;
      margin-left: -15px;
      padding-left: 15px;
      font-weight: bold;
      color: $zzLight-0;
    }
    > ul > li {
      cursor: pointer;
      text-decoration: none;
      color: $zzblack;
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
      &:hover {
        background-color: $zzLight-0;
        border: none;
        border-top: 1px solid #e6d9d0;
        border-bottom: 1px solid #e6d9d0;
        width: 199px;
        height: 32px;
        line-height: 30px;
        text-decoration: none;
        margin-left: -15px;
        padding-left: 15px;
        content: "";
      }
    }
    ul li h3 > a {
      border: none;
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
      width: 200px;
      height: 30px;
      margin-left: -15px;
      padding-left: 15px;
      line-height: 30px;
      color: $zzblack;
      &:first-child:after {
        content: url("data:image/png;base64,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");
        position: absolute;
        right: 10px;
        width: 16px;
        height: 16px;
        transform: scale(0.06); //设置缩放比例
        -ms-transform: scale(0.06);
        -webkit-transform: scale(0.06);
        -o-transform: scale(0.06);
        -moz-transform: scale(0.06);
      }
      &:hover {
        color: #ee3a46;
        content: "";
      }
      &:hover:after {
        content: "";
      }
    }
    .sectionSubContent {
      position: absolute;
      overflow: hidden;
      display: none;
      min-height: 548px;
      height: 548px;
      width: 600px;
      border: 1px solid #e6d9d0;
      top: 0;
      left: 198px;
      background: $zzLight-0;
      z-index: -99;
      .sectionLeftContent {
        float: left;
        padding: 10px;
        width: 330px;
        //overflow: hidden;
        height: 100%;
        dl {
          float: left;
          width: 465px;
          border-bottom: 1px solid $zzLight-1;
          padding: 10px 0;
          > dt {
            width: auto;
            float: left;
            font-weight: bold;
            text-align: right;
            padding-right: 10px;
            padding-left: 10px;
          }
          > dd {
            overflow: hidden;
            width: 330px;
            float: left;
            height: 13px;
            line-height: 13px;
            margin-top: 3px;
            height: auto;
            > em {
              margin: 5px 0;
              padding: 0 6px 0 9px;
              display: inline-block;
              cursor: pointer;
              text-align: center;
              border-left: 1px solid $zzLight-2;
              font-size: $fs12;
              @include textEllipsis;
            }
          }
        }
      }
      div.subContent {
        right: 0;
        position: absolute;
        background-color: #fff8f0;
        width: 135px;
        height: 100%;
        padding-top: 15px;
        padding-left: 15px;
        ul li {
          font-size: $fs12;
          color: $zzLight-2;
          line-height: 20px;
          &:hover {
            color: red;
          }
        }
      }
    }
  }
  //右边内容
  .section-right {
    margin-left: 10px;
    margin-top: 15px;
    width: 788px;
    overflow: hidden;
    .hotBox {
      border: 1px solid $zzLight-1;
      width: 100%;
      height: 120px;
      background: url($hotIco);
      background-repeat: no-repeat;
      h1 {
        a {
          color: $zzblue;
        }
        font-size: $fs24;
        font-weight: bold;
        font-family: $ff;
        text-align: center;
        margin-top: 20px;
      }
      > ul {
        margin: 20px 0 0;
        li {
          float: left;
          width: 255px;
          @include textEllipsis;
          overflow: hidden;
          padding: 0 0 10px 20px;
        }
      }
    }
    .bannerBox {
      overflow: hidden;
      position: relative;
      > a.left {
        position: absolute;
        background-image: url($bannerIco);
        background-repeat: no-repeat;
        background-position: 0 0;
        width: 45px;
        height: 43px;
        top: 35%;
        left: 15px;
        opacity: 0.3;
        z-index: 2;
        &:hover {
          opacity: 1;
        }
      }
      a.right {
        position: absolute;
        background-image: url($bannerIco);
        background-repeat: no-repeat;
        background-position: 0 -49px;
        width: 45px;
        height: 43px;
        top: 35%;
        right: 15px;
        opacity: 0.3;
        z-index: 1;
        &:hover {
          opacity: 1;
        }
      }
      margin: 10px 0;
      height: 200px;
      overflow: hidden;
      img {
        height: 200px;
        width: 788px;
      }
      > ul li {
        position: absolute;
        &:first-child {
          z-index: 1;
        }
      }
      &:after {
        content: "";
      }
      .bannerText {
        .marsk {
          background: $zzblack;
          opacity: 0.8;
          height: 35px;
          width: 100%;
          position: absolute;
          bottom: 0;
          z-index: 1;
        }
        .text {
          position: absolute;
          bottom: 0;
          z-index: 2;
          line-height: 35px;
          color: $zzLight-0;
        }
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
            background: url($bannerIco);
            background-position: 22px -126px;
            &:hover {
              background: url($bannerIco);
              background-position: -9px -127px;
              height: 15px;
              width: 17px;
            }
            &.hover {
              background: red;
            }
          }
        }
      }
    }
    .trendNews {
      background-image: url($soleImg);
      background-repeat: no-repeat;
      border: 1px solid $zzLight-1;
      height: auto;
      overflow: hidden;
      padding: 10px 20px 5px;
      > ul {
        li {
          span {
            color: $zzblue;
            font-weight: bold;
          }
          width: 373px;
          overflow: hidden;
          @include textEllipsis;
          padding: 5px 10px;
          float: left;
          &:nth-child(even) {
            text-align: left;
            padding-left: 35px;
          }
        }
      }
    }
    .reportBox {
      height: auto;
      overflow: hidden;
      padding: 10px 0 5px;
      > ul {
        margin-right: 10px;
        li {
          text-indent: 0.5em;
          //margin:5px 0px;
          border-left: 8px solid red;
          width: 373px;
          overflow: hidden;
          @include textEllipsis;
          background: $zzblueLight-1;
          height: 26px;
          line-height: 26px;
          &:first-child ~ li {
            margin-top: 7px;
          }
        }
      }
    }
  }
}

//第二屏主体
section.sectionMain {
  background: $zzLight-1;
  overflow: hidden;
  .main {
    @include container;
    height: 100%;
    .mainLeftBox {
      width: 648px;
      overflow: hidden;
      .index-ad-001,
      .index-ad-002,
      .index-ad-003,
      .index-ad-004 {
        width: 100%;
        height: 100px;
        background: $zzLight-2;
      }
      //热点两行
      .content {
        overflow: hidden;
        margin: 10px 0;
        .yaowen {
          padding: 10px 5px 5px 10px;
          background: $zzLight-0;
          width: 365px;
          height: auto;
          overflow: hidden;
          display: inline-block;
          h4.title {
            border-left: 4px solid $zzblue;
            font-weight: bold;
            font-size: $fs16;
            padding-left: 5px;
            span.more {
              float: right;
              font-size: $fs12;
              color: $zzLight-2;
              a {
                &:after {
                  content: "...";
                }
              }
            }
          }
          ul {
            margin-top: 10px;
            li {
              @include textEllipsis;
              line-height: 30px;
              &:first-child {
                font-weight: bold;
                a {
                  color: $zzblue;
                }
              }
              &:before {
                @include newlistIcon;
              }
            }
          }
        }
        .redian {
          padding: 10px 5px 5px 10px;
          background: $zzLight-0;
          width: 270px;
          height: auto;
          overflow: hidden;
          display: inline-block;
          float: right;
          h4.title {
            border-left: 4px solid $zzred-1;
            font-weight: bold;
            font-size: $fs16;
            padding-left: 5px;
            color: $zzred-1;
            span.more {
              float: right;
              font-size: $fs12;
              color: $zzLight-2;
              a {
                &:after {
                  content: "...";
                }
              }
            }
          }
          .newImg {
            padding: 10px 0;
            a img {
              // .imgStyle;
            }
            h5 {
              margin: 10px 0;
              font-weight: bold;
              text-align: center;
              a {
                color: $zzred-1;
              }
            }
            p {
              border-bottom: 1px dashed $zzLight-4;
              padding-bottom: 10px;
              a {
                color: $zzLight-5;
              }
            }
          }
          .reportImg {
            padding: 10px 0;
            a img {
              // .imgStyle;
            }
            ul li {
              float: left;
              &:before {
                content: "";
              }
              &:nth-child(even) {
                margin-left: 10px;
                margin-bottom: 10px;
              }
              p {
                text-align: center;
                font-size: $fs12;
              }
            }
          }
          .meetingImg {
            padding: 10px 0;
            a img {
              // .imgStyle;
            }
            ul li {
              p {
                text-align: center;
                font-size: $fs13;
                padding: 3.4px 0px;
              }
            }
          }
          .warningImg {
            padding: 10px 3px;
            ul li {
              background: $zzLight-3;
              span {
                color: $zzred-1;
              }
              &:first-child,
              &:first-child + li,
              &:first-child + li + li {
                margin-bottom: 9px;
              }
              padding: 10px;
              p {
                color: $zzLight-5;
              }
              h5 {
                span {
                  margin-right: 5px;
                }
                font-weight: bold;
                line-height: 30px;
                @include textEllipsis;
                width: 230px;
              }
            }
          }
          .jihuiImg {
            padding: 10px 3px;
            ul li {
              background: $zzblueLight-1;
              span {
                color: $zzred-1;
              }
              &:first-child,
              &:first-child + li,
              &:first-child + li + li {
                margin-bottom: 9px;
              }
              padding: 10px;
              p {
                color: $zzLight-5;
              }
              h5 {
                span {
                  margin-right: 5px;
                  color: $zzblueLight-2;
                }
                font-weight: bold;
                line-height: 30px;
                color: $zzblueLight-2;
                @include textEllipsis;
                width: 230px;
              }
            }
          }
          ul.newList {
            > li {
              @include textEllipsis;
              width: 250px;
              line-height: 25px;
              &:before {
                @include newlistIcon;
              }
            }
          }
          .reportImg + ul li {
            line-height: 28px;
            @include textEllipsis;
            &:before {
              @include newlistIcon;
            }
          }
        }
        /*
  * 这里样式模仿第一类(要闻)编写
 * */
        .jinrong,
        .zhengquan {
          padding: 10px 5px 5px 10px;
          background: $zzLight-0;
          width: 365px;
          height: auto;
          overflow: hidden;
          display: inline-block;
          h4.title {
            border-left: 4px solid $zzblue;
            font-weight: bold;
            font-size: $fs16;
            padding-left: 5px;
            span.more {
              float: right;
              font-size: $fs12;
              color: $zzLight-2;
              a {
                &:after {
                  content: "...";
                }
              }
            }
          }
          ul {
            margin-top: 10px;
            li {
              @include textEllipsis;
              line-height: 30px;
              &:first-child {
                font-weight: bold;
                a {
                  color: $zzblue;
                }
              }
              &:before {
                @include newlistIcon;
              }
            }
          }
        }
        .jihui {
          padding: 10px 5px 5px 10px;
          background: $zzLight-0;
          width: 270px;
          height: auto;
          overflow: hidden;
          display: inline-block;
          float: right;
          h4.title {
            border-left: 4px solid $zzred-1;
            font-weight: bold;
            font-size: $fs16;
            padding-left: 5px;
            color: $zzred-1;
            span.more {
              float: right;
              font-size: $fs12;
              color: $zzLight-2;
              a {
                &:after {
                  content: "...";
                }
              }
            }
          }
          .newImg {
            padding: 10px 0;
            a img {
              // .imgStyle;
            }
            h5 {
              margin: 10px 0;
              font-weight: bold;
              text-align: center;
              a {
                color: $zzred-1;
              }
            }
            p {
              border-bottom: 1px dashed $zzLight-4;
              padding-bottom: 10px;
              a {
                color: $zzLight-5;
              }
            }
          }
          .reportImg {
            padding: 10px 0;
            a img {
              // .imgStyle;
            }
            ul li {
              float: left;
              &:before {
                content: "";
              }
              &:nth-child(even) {
                margin-left: 10px;
                margin-bottom: 10px;
              }
              p {
                text-align: center;
                font-size: $fs12;
              }
            }
          }
          .warningImg {
            padding: 10px 0;
            a img {
              // .imgStyle;
            }
            ul li {
              float: left;
              &:before {
                content: "";
              }
              &:nth-child(even) {
                margin-left: 10px;
                margin-bottom: 10px;
              }
              p {
                text-align: center;
                font-size: $fs12;
              }
            }
          }
          ul.newList {
            > li {
              @include textEllipsis;
              width: 250px;
              line-height: 25px;
              &:before {
                @include newlistIcon;
              }
            }
          }
          .reportImg + ul li {
            line-height: 28px;
            @include textEllipsis;
            &:before {
              @include newlistIcon;
            }
          }
        }
      }
    }
    .mainRightBox {
      width: 340px;
      overflow: hidden;
      .index-ad-005 {
        width: 100%;
        height: 500px;
        background: $zzLight-2;
      }
      .index-ad-006 {
        width: 100%;
        height: 300px;
        background: $zzLight-2;
      }
      .index-ad-007 {
        width: 100%;
        height: 298px;
        background: $zzLight-2;
      }
      .content {
        margin: 10px 0;
        background: $zzLight-0;
        overflow: hidden;
        padding: 10px;
        .paihangbang {
          ul.title {
            margin-bottom: 10px;
            overflow: hidden;
            li {
              float: left;
              h4 {
                font-weight: bold;
                font-size: $fs16;
                a {
                  border-left: 4px solid transparent;
                  padding-left: 5px;
                  color: $zzblack;
                }
                &:first-child {
                  margin-right: 15px;
                }
              }
              h4.current {
                font-weight: bold;
                font-size: $fs16;
                a {
                  border-left: 4px solid $zzred-1;
                  padding-left: 5px;
                  color: $zzred-1;
                }
              }
            }
          }
          ul.newsListWeek li {
            @include textEllipsis;
            width: 320px;
            line-height: 25px;
            color: $zzLight-6;
            &:first-child h5,
            &:first-child h5 a {
              float: right;
              width: 242px;
              @include textEllipsis;
              font-weight: bold;
              &:before {
                content: "";
              }
            }
            &:first-child a {
              float: left;
            }
            &:first-child p,
            &:first-child p a {
              float: right;
              color: $zzLight-5;
              width: 242px;
              white-space: pre-wrap;
              font-size: $fs12;
              line-height: 25px;
            }
            &:first-child {
              border-bottom: 1px dashed $zzLight-4;
              &:before {
                content: "";
              }
            }
            &:first-child + li {
              color: red !important;
            }
            &:first-child + li + li {
              color: #ff6600;
            }
            &:first-child + li + li + li {
              color: #ffcc00;
            }
            &:before {
              // .newListRound;
            }
          }
          ul.newsListMonth li {
            @include textEllipsis;
            width: 320px;
            line-height: 25px;
            color: $zzLight-6;
            &:first-child h5,
            &:first-child h5 a {
              width: 242px;
              @include textEllipsis;
              font-weight: bold;
              float: right;
              &:before {
                content: "";
              }
            }
            &:first-child a {
              float: left;
            }
            &:first-child p,
            &:first-child p a {
              float: right;
              color: $zzLight-5;
              width: 242px;
              white-space: pre-wrap;
              font-size: $fs12;
            }
            &:first-child {
              border-bottom: 1px dashed $zzLight-4;
              &:before {
                content: "";
              }
            }
            &:first-child + li {
              color: red !important;
            }
            &:first-child + li + li {
              color: #ff6600;
            }
            &:first-child + li + li + li {
              color: #ffcc00;
            }
            &:before {
              // .newListRound;
            }
          }
        }
        .dataCenter {
          ul.title {
            margin-bottom: 10px;
            overflow: hidden;
            li {
              h4 {
                font-weight: bold;
                font-size: $fs16;
                border-left: 4px solid $zzblue;
                padding-left: 5px;
                color: $zzblack;
                span {
                  color: $zzLight-4;
                  font-size: $fs12;
                  float: right;
                }
              }
            }
          }
          ul.dataNewsList li {
            @include textEllipsis;
            width: 320px;
            line-height: 25px;
            color: $zzLight-6;
            &:first-child h5,
            &:first-child h5 a {
              width: 242px;
              @include textEllipsis;
              font-weight: bold;
              float: right;
              &:before {
                content: "";
              }
            }
            &:first-child a {
              float: left;
            }
            &:first-child p,
            &:first-child p a {
              float: right;
              color: $zzLight-5;
              width: 242px;
              white-space: pre-wrap;
              font-size: $fs12;
            }
            &:first-child {
              border-bottom: 1px dashed $zzLight-4;
            }
            &:first-child + li {
              color: red !important;
            }
            &:first-child + li + li {
              color: #ff6600;
            }
            &:first-child + li + li + li {
              color: #ffcc00;
            }
            i {
              display: inline-block;
              width: 18px;
              height: 18px;
              line-height: 18px;
              text-align: center;
              background: $zzblack;
              background: $zzLight-6;
              margin-right: 8px;
              color: $zzLight-0;
            }
            &:first-child + li > i {
              background: red;
            }
            &:first-child + li + li > i {
              background: #ff6600;
            }
            &:first-child + li + li + li > i {
              background: #ffcc00;
            }
          }
        }
        .hotKey {
          ul.title {
            margin-bottom: 10px;
            overflow: hidden;
            background: $zzLight-4;
            height: 40px;
            margin-top: -10px;
            margin-left: -10px;
            margin-right: -10px;
            padding-right: 10px;
            li {
              h4 {
                line-height: 40px;
                font-weight: bold;
                font-size: $fs16;
                border-left: 4px solid $zzblue;
                padding-left: 10px;
                color: $zzblack;
                span {
                  color: $zzLight-4;
                  font-size: $fs12;
                  float: right;
                }
              }
            }
          }
          #hotKey {
            height: 600px;
            overflow: hidden;
          }
        }
        .special {
          ul.title {
            //宽度是自适应,根据内容撑开的
            margin-bottom: 10px;
            overflow: hidden;
            background: $zzLight-4;
            height: 40px;
            margin-top: -10px;
            margin-left: -10px;
            margin-right: -10px;
            padding-right: 10px;
            li {
              h4 {
                line-height: 40px;
                font-weight: bold;
                font-size: $fs16;
                border-left: 4px solid $zzblue;
                padding-left: 10px;
                color: $zzblack;
                span {
                  color: $zzLight-4;
                  font-size: $fs12;
                  float: right;
                }
              }
            }
          }
          .specialImg {
            a {
              margin: 0;
              float: left;
              overflow: hidden;
              border: 1px solid transparent;
              img {
                margin: 0;
                padding: 0;
                background-size: cover;
              }
              &:hover {
                border: 1px solid $zzred-1;
              }
            }
            a:first-child,
            a:first-child img {
              width: 160px;
              height: 120px;
            }
            a:first-child + a,
            a:first-child + a img {
              width: 160px;
              height: 120px;
            }
            a:first-child + a + a,
            a:first-child + a + a > img {
              width: 320px;
              height: 240px;
            }
            a:first-child + a + a + a,
            a:first-child + a + a + a > img {
              width: 160px;
              height: 120px;
            }
            a:first-child + a + a + a + a,
            a:first-child + a + a + a + a > img {
              width: 160px;
              height: 120px;
            }
          }
        }
        .viewpoint {
          ul.title {
            margin-bottom: 10px;
            overflow: hidden;
            background: $zzLight-4;
            height: 40px;
            margin-top: -10px;
            margin-left: -10px;
            margin-right: -10px;
            padding-right: 10px;
            li {
              h4 {
                line-height: 40px;
                font-weight: bold;
                font-size: $fs16;
                border-left: 4px solid $zzblue;
                padding-left: 10px;
                color: $zzblack;
                span {
                  color: $zzLight-4;
                  font-size: $fs12;
                  float: right;
                }
              }
            }
          }
          ul.viewpointNewsList li {
            @include textEllipsis;
            width: 320px;
            line-height: 25px;
            color: $zzLight-6;
            &:first-child h5,
            &:first-child h5 a {
              width: 242px;
              white-space: pre-wrap;
              font-weight: bold;
              float: right;
              &:before {
                content: "";
              }
            }
            &:first-child a {
              float: left;
            }
            &:first-child p,
            &:first-child p a {
              float: right;
              color: $zzblueLight-2;
              width: 242px;
              white-space: pre-wrap;
              font-size: $fs12;
            }
            &:first-child {
              border-bottom: 1px dashed $zzLight-4;
            }
            &:first-child + li {
              color: red !important;
              margin-top: 5px;
            }
            &:first-child + li + li {
              color: #ff6600;
            }
            &:first-child + li + li + li {
              color: #ffcc00;
            }
            &:last-child {
              border-bottom: 1px dashed $zzLight-4;
              padding-bottom: 5px;
            }
          }
          .viewpointNewsImg li {
            position: relative;
            left: 20px;
            float: left;
            text-align: center;
            margin-right: 30px;
            margin-top: 10px;
            img {
              border: 1px solid $zzLight-4;
              padding: 2px;
              &:hover {
                border: 1px solid $zzred-1;
              }
            }
            .marsk {
              position: absolute;
              background: $zzblack;
              opacity: 0.6;
              height: 20px;
              width: 100%;
              bottom: 0;
              a {
                color: $zzLight-0;
              }
              &:hover {
                opacity: 1;
              }
            }
          }
        }
        .journal {
          ul.title {
            margin-bottom: 10px;
            overflow: hidden;
            background: $zzLight-4;
            height: 40px;
            margin-top: -10px;
            margin-left: -10px;
            margin-right: -10px;
            padding-right: 10px;
            li {
              h4 {
                line-height: 40px;
                font-weight: bold;
                font-size: $fs16;
                border-left: 4px solid $zzblue;
                padding-left: 10px;
                color: $zzblack;
                span {
                  color: $zzLight-4;
                  font-size: $fs12;
                  float: right;
                }
              }
            }
          }
          ul.journalList li {
            @include textEllipsis;
            width: 320px;
            line-height: 25px;
            color: $zzLight-6;
            &:first-child h5,
            &:first-child h5 a {
              width: 212px;
              white-space: pre-wrap;
              font-weight: bold;
              float: right;
              &:before {
                content: "";
              }
            }
            &:first-child a {
              float: left;
            }
            &:first-child p,
            &:first-child p a {
              float: right;
              color: $zzLight-5;
              width: 212px;
              white-space: pre-wrap;
              font-size: $fs12;
            }
            &:first-child {
              border-bottom: 1px dashed $zzLight-4;
            }
            &:first-child + li {
              color: red !important;
              margin-top: 5px;
            }
            &:first-child + li + li {
              color: #ff6600;
            }
            &:first-child + li + li + li {
              color: #ffcc00;
            }
            &:last-child {
              border-bottom: 1px dashed $zzLight-4;
              padding-bottom: 5px;
            }
          }
          .journalListImg li {
            position: relative;
            left: 20px;
            float: left;
            text-align: center;
            margin-right: 20px;
            margin-top: 10px;
            img {
              border: 1px solid $zzLight-4;
              padding: 2px;
              &:hover {
                border: 1px solid $zzred-1;
              }
            }
            .marsk {
              position: absolute;
              background: $zzblack;
              opacity: 0.6;
              height: 20px;
              width: 100%;
              bottom: 0;
              a {
                color: $zzLight-0;
              }
              &:hover {
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }
}
</style>
