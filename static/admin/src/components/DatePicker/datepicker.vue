<template>
  <!-- <span class="demonstration">带快捷选项</span> -->
  <el-date-picker
    v-model="currentValue"
    type="datetimerange"
    align="left"
	value-format="yyyy-MM-dd HH:mm:ss"
	:default-time="['00:00:00','23:59:59']"
    unlink-panels
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    :picker-options="pickerOptions"
	v-bind="$attrs"
	v-on="listeners"
	@click="changeStart"
  ></el-date-picker>
</template>
<script>

import moment from 'moment';
export default {
  name: "VDatepicker",
  inheritAttrs: false,
  props: {
    // 接收一个由父级组件传递过来的值
    value: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      pickerOptions: {
		  disabledDate(time) {
				return  Date.now()< time.getTime() //< Date.now() - 3600 * 1000 * 24 * 7 ;
			},
        shortcuts: [
			{
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      }
    };
  },
  methods: {
	  changeStart(val,val2){}
  },
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