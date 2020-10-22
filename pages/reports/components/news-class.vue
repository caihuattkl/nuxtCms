<template>
  <div>
    <div class="channel-ad-001"></div>
    <template v-if="value.data" v-for="(value, key, i) in channelNewsData">
      <div v-if="i !== 0" class="left3" :key="i">
        <h3>
          {{ value.name }}<a :href="`/${value.url}`"><span class="more rf">更多...&nbsp;</span></a>
        </h3>
        <ul class="list01 u-list-center" data-client="scroll">
          <template v-if="value.data" v-for="(item, key, i) in value.data">
            <li :key="i">
              <a target="_blank" :href="`/${item[1]}`" title="">{{ item[0] }}</a>
            </li>
          </template>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    channelNewsData: {
      default: () => [],
      type: Array | Object
    }
  },
  created() {}
};
</script>