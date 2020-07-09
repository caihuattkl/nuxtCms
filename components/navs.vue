<template>
  <div class="nav">
    <ul>
      <li :key="i" v-for="(item, i) in newClassData">
        <a v-if="i == 0" :href="`/${item.directoryName}/`">
          <strong>{{ item.title }}</strong></a
        >
        <a
          v-else
          :href="`/${newClassData[0].directoryName}/${item.directoryName}/`"
        >
          {{ item.title }}</a
        >
      </li>
    </ul>
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