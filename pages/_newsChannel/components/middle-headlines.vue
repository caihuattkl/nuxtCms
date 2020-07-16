<template>
  <div class="left2">
    <template v-for="(value, key, i) in hotNewsData">
      <h2 v-if="i == 0" :key="i">
        <a v-if="value.data.length" :href="`/${value.data[0][1]}`" target="_blank" title="">{{ value.data[0][0] }}</a>
      </h2>
      <ul v-if="i == 0" :key="i" class="list01 u-list-center" data-client="scroll">
        <template v-for="(item, index) in value.data">
          <li v-if="index !== 0" :key="index">
            <a v-if="value.data.length" target="_blank" :href="`/${item[1]}`" title="">{{ `${item[0]}` }}</a>
          </li>
        </template>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    hotNewsData: {
      default: () => [],
      type: Array | Object
    }
  },
  async asyncData({ app, error }) {},
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

<style lang="scss">
.left2 {
  width: 380px;
  overflow: hidden;
  vertical-align: top;
  display: inline-block;
  margin: 0 10px 10px 0;
  h2 {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 20px;
    font-weight: bold;
    font-family: "微软雅黑", "宋体";
    line-height: 40px;
    padding: 5px 0;
    text-align: center;
  }
  li {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    line-height: 26px;
    a {
      font-size: 14px;
    }
    p {
      font-size: 12px;
      margin-top: 5px;
      color: #666666;
    }
    &::before {
      color: #bfbfbf;
      content: "▪";
      padding-right: 3px;
    }
  }
}
</style>


