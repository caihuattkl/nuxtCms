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
  created() {
    // console.log(this.newClassData, "来了");
  }
};
</script>