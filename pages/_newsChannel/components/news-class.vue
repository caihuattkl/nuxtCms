<template>
  <div>
    <div class="channel-ad-001"></div>
    <template v-for="(item, i) in newClassData">
      <div v-if="i != 0" class="left3" :key="i">
        <h3>
          {{ item.title }}
          <a href="/"><span class="more rf">更多...&nbsp;</span></a>
        </h3>
        <ul class="list01 u-list-center" data-client="scroll">
          <li v-for="(item, i) in channelNewsData" :key="i">
            <a target="_blank" :href="`/${item.newsUrl}`" title="">{{
              item.title
            }}</a>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    newClassData: {
      default: [],
      type: Array
    },
    channelNewsData: {
      default: [],
      type: Array
    }
  },
  created() {
    // console.log(this.newClassData, "来了");
  }
};
</script>