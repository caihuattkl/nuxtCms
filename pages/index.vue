<template>
  <div>网站建设中...</div>
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
