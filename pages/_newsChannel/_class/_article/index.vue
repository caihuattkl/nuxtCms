<template>
  <div>
    文章
  </div>
</template>


<script>
export default {
  methods: {},
  created() {
    // console.log(this.$route.path);
  },
  async asyncData({ app }) {
    console.log(app.router.currentRoute.path);
  }
};
</script>