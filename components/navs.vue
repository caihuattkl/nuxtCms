<template>
  <div class="nav">
    <ul>
      <li :key="i" v-for="(value, key, i) in navData">
        <a v-if="i == 0" :href="`/${value.url}`">
          <strong>{{ value.name }}</strong>
        </a>
        <a v-else :href="`/${value.url}`"> {{ value.name }}</a>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  props: {
    navData: {
      default: () => [],
      type: Array | Object
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.nav {
  background: #225d98;
  height: 40px;
}
.nav ul li {
  line-height: 40px;
  display: inline-block;
  margin: 0 20px;
  font-size: 16px;
}
.nav ul li a {
  color: #ffffff;
}
</style>