<template>
  <div class="query-container" v-on="listeners">
    <slot name="query"></slot>
  </div>
</template>


<script>
export default {
  name: "query",
  created() {
    var that = this;
    document.onkeydown = function(e) {
      var key = window.event.keyCode;
      if (key === 13) {
        that.$emit("keyEnter");
      }
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners
      };
    }
  }
};
</script>

<style lang="css">
.query-container .el-form {
  background: #f3f3f3;
  padding-top: 23px;
  padding-left: 13px;
  margin-bottom: 10px;
}
</style>