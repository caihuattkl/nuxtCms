<template>
  <div>
  <div :key="i" v-for="(item,i) in [1,2,3]">{{item.id}}999</div>
  </div>
</template>

<script>
export default {
  layout: "com",
  components: {},
  methods: {},
  created() {
  },
  async asyncData({ app, error }) {
    console.log('324234');
    try {
      const {
        data: { data: testData }
      } = await app.$axios.post("/v1/reports/report_class", {});
      /* 获取header头部数据 */
      return { testData };

    } catch (err) {
      error({ statusCode: 404, message: "Post not found" });
    }
  }
};
</script>
