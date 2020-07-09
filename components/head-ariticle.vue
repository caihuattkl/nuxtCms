<template>
  <div class="header">
    <div class="navTop">
      <div class="left">
        <ul>
          <li>
            <a href="/">首页</a>
          </li>
          <!-- <li :key="i" v-for="(item, i) in channelData">
            <a :href="`${item.directoryName}`">{{ item.title }}</a>
          </li> -->
          <li class="navTop-current">
            <a href="javascript:void(0)" id="navTop-current">更多</a>
            <div class="more hide" id="more">
              <ul>
                <li>
                  <a href="javascript:void(0)">产经</a>
                </li>
                <li>
                  <a href="javascript:void(0)">研究院</a>
                </li>
                <li>
                  <a href="javascript:void(0)">数据中心</a>
                </li>
                <li>
                  <a href="javascript:void(0)">高端峰会</a>
                </li>
                <li>
                  <a href="javascript:void(0)">投资咨询</a>
                </li>
                <li>
                  <a href="javascript:void(0)">市场调研</a>
                </li>
                <li>
                  <a href="javascript:void(0)">政府规划</a>
                </li>
                <li>
                  <a href="javascript:void(0)">招商代理</a>
                </li>
                <li>
                  <a href="javascript:void(0)">园区运营</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li class="red">
            <a href="/reports/recent/">最新报告</a>
          </li>
          <li class="red">
            <a href="/reports/">行业研究报告</a>
          </li>
          <li>
            <a href="javascript:void(0)">购物指南</a>
          </li>
          <li>
            <a href="javascript:void(0)">联系我们</a>
          </li>
          <li>
            <a href="javascript:void(0)">服务项目</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {}
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: block;
  line-height: 35px;
  height: 35px;
  background-color: #f5f5f5;
}
.header:after {
  content: "";
}
.navTop {
  clear: both;
  width: 998px;
  margin: 0 auto;
  font-size: 12px;
}
.navTop .left ul {
  z-index: 99;
}
.navTop .left ul li {
  display: inline-block;
  float: left;
  font-size: 13px;
}
.navTop .left ul li + li {
  padding-left: 15px;
}
.navTop .left ul li #more {
  left: -1px;
  top: 35px;
  position: absolute;
  z-index: 1;
  background: #ffffff;
  border: 1px solid #bfbfbf;
  overflow: hidden;
  width: 300px;
  padding: 10px;
  height: 130px;
}
.navTop .left ul li #more ul li {
  display: inline-block;
  text-align: left;
  padding: 0px 8px;
}
.navTop .left ul li.navTop-current {
  text-align: center;
  width: 60px;
  height: 36px;
  position: relative;
  z-index: 1;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  background: #f5f5f5;
  padding: 0px 10px;
}
.navTop .left ul li.navTop-current > a {
  display: block;
  height: 36px;
  border-left: 1px solid #f5f5f5;
  border-right: 1px solid #f5f5f5;
  position: absolute;
  z-index: 2;
  width: 60px;
}
.navTop .left ul li.navTop-current > a:hover {
  height: 36px;
  border-left: 1px solid #bfbfbf;
  border-right: 1px solid #bfbfbf;
  background: #ffffff;
  padding: 0px 15px;
}
.navTop .left ul li.navTop-current:hover > .more {
  display: block;
  height: 36px;
  border-left: 1px solid #bfbfbf;
  border-right: 1px solid #bfbfbf;
  background: #ffffff;
  padding: 0px 10px;
}
.navTop .left ul li.navTop-current:hover > a {
  display: block;
  height: 36px;
  border-left: 1px solid #bfbfbf;
  border-right: 1px solid #bfbfbf;
  background: #ffffff;
  padding: 0px 10px;
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
</style>
