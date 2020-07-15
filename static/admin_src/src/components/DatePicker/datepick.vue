<template>
  <!-- <span class="demonstration">带快捷选项</span> -->
  <el-date-picker v-model="currentValue" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"> </el-date-picker>
</template>
<script>
import moment from "moment";
export default {
  name: "VDatepicker",
  inheritAttrs: false,
  props: {
    // 接收一个由父级组件传递过来的值
    value: {
      type: Array,
      default:[]
    }
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
  computed: {
    listeners() {
      return {
        ...this.$listeners
      };
    },
    currentValue: {
      // 动态计算currentValue的值
      get: function() {
        return this.value; // 将props中的value赋值给currentValue
      },
      set: function(val) {
        this.$emit("input", val); // 通过$emit触发父组件
      }
    }
  }
};
</script>