<template>
  <div class="plan">
    <div class="left">
      <ul class="crumbs" id="crumbs">
        <li>
          <a href="/"><img src="~/assets/images/logo_fnc.jpg"/></a>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    newClassData: {
      default: [],
      type: Array
    }
  },
  created() {
    // console.log(this.newClassData, "来了");
  }
};
</script>

<style lang="scss">
</style>
