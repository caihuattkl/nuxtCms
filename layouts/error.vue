<template>
  <div class="error-page">
    <div class="error-page-container">
      <div class="error-page-main">
        <h3><strong>404</strong>无法打开页面</h3>
        <div class="error-page-actions">
          <div>
            <h4>可能原因：</h4>
            <ol>
              <li>网络信号差</li>
              <li>找不到请求的页面</li>
              <li>输入的网址不正确</li>
            </ol>
          </div>
          <div>
            <h4>可以尝试：</h4>
            <ul>
              <li><a href="/">返回首页</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"]
};
</script>

<style lang="scss" scoped>
.error-page {
  background: #f0f1f3;
  padding: 80px 0 180px;
  height: 1000px;
}
.error-page-container {
  position: relative;
  z-index: 1;
}
.error-page-main {
  position: relative;
  background: #f9f9f9;
  margin: 0 auto;
  width: 617px;
  -ms-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 50px 50px 70px;
}
.error-page-main:before {
  content: "";
  display: block;
  background: #225d98;
  height: 7px;
  position: absolute;
  top: -7px;
  width: 100%;
  left: 0;
}
.error-page-main h3 {
  font-size: 24px;
  font-weight: 400;
  border-bottom: 1px solid #d0d0d0;
  line-height: 50px;
}
.error-page-main h3 strong {
  font-size: 54px;
  font-weight: 400;
  margin-right: 20px;
}
.error-page-main h4 {
  font-size: 20px;
  font-weight: 400;
  color: #333;
}
.error-page-actions {
  font-size: 0;
  z-index: 100;
  height: 300px;
}
.error-page-actions div {
  font-size: 14px;
  padding: 20px;
  margin-top: 30px;
  width: 50%;
  float: left;
  -ms-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  color: #838383;
}
.error-page-actions div + div {
  float: right;
  a {
    color: #0061c2;
    text-decoration: underline;
  }
}
.error-page-actions ol {
  list-style: decimal;
  padding-left: 20px;
  margin-top: 10px;
}
.error-page-actions li {
  line-height: 2.5em;
}
</style>
