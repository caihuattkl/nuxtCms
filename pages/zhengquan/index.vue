<template>
  <div class="container">
    <div class="row">这里是首页</div>
    <div>{{ title }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  async asyncData(app) {
    let res = await axios({
      url:
        "https://hq.sinajs.cn/rn=1593671040453&list=s_sh000001,s_sz399001,s_sh000300,s_sz399415,s_sz399006"
    });
    res.data = res.data
      .replace(/(var hq_str_s_.+?=".+?,)|\n|\r|"/gm, "")
      .replace(/(\W\w\s\S|;)$/gm, "")
      .split(";");
    return { title: res.data };
  }
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
