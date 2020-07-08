<template>
  <div class="container">
    <div class="zhengquan" id="zhishu">
      <dl>
        <dt class="active">
          <ul class="rup">
            <li class="wmt_n"><span>上证综指</span></li>
            <li><span class="sh000001"></span></li>
            <li><span class="sh000001Index"></span></li>
            <li><span class="sh000001Range"></span></li>
          </ul>
        </dt>
        <dd>
          <img
            class="sh000001"
            src="http://image.sinajs.cn/newchart/hollow/small/nsh000001.gif"
          />
        </dd>
      </dl>
      <dl>
        <dt>
          <ul class="rup">
            <li class="wmt_n"><span>深证成指</span></li>
            <li><span class="sz399001"></span></li>
            <li><span class="sz399001Index"></span></li>
            <li><span class="sz399001Range"></span></li>
          </ul>
        </dt>
        <dd>
          <img
            class="sz399001"
            src="http://image.sinajs.cn/newchart/hollow/small/nsz399001.gif"
          />
        </dd>
      </dl>
      <dl>
        <dt>
          <ul class="rup">
            <li class="wmt_n"><span>沪深300</span></li>
            <li><span class="sh000300">3339.66</span></li>
            <li><span class="sh000300Index"></span></li>
            <li><span class="sh000300Range"></span></li>
          </ul>
        </dt>
        <dd>
          <img
            class="sh000300"
            src="http://image.sinajs.cn/newchart/hollow/small/nsh000300.gif"
          />
        </dd>
      </dl>
      <dl>
        <dt>
          <ul class="rup">
            <li class="wmt_n"><span>创业板指</span></li>
            <li><span class="sz399006">1967.59</span></li>
            <li><span class="sz399006Index"></span></li>
            <li><span class="sz399006Range"></span></li>
          </ul>
        </dt>
        <dd>
          <img
            class="sz399006"
            src="http://image.sinajs.cn/newchart/hollow/small/nsz399006.gif"
          />
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import { getSinaSZList } from "@/apis/zhengquan";

export default {
  components: {},
  methods: {
    /* 获取上证指数数据 */
    async _getSinaSZList() {
      let res = await getSinaSZList({})
        /* 处理原始数据.原始数据中有中文字符解析乱码 */
        .data.replace(/(var hq_str_s_.+?=".+?,)|\n|\r|"/gm, "")
        .replace(/(\W\w\s\S|;)$/gm, "")
        .split(";");
      return { title: res.data };
    }
  },
  async asyncData(app) {}
};
</script>

<style lang="scss">
.container {
  .row {
    background: red;
    width: 100px;
    height: 100px;
  }
}
</style>
