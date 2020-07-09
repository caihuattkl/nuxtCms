<template>
  <div class="zhengquan" id="zhishu">
    <div class="spin-container" v-if="!loading">
      <Spin fix size="large"></Spin>
    </div>
    <template v-if="loading">
      <dl v-for="(item, key) in diagrams" :key="key">
        <dt class="active" @click="_showDiagram(key)" v-if="item.indexs[2]">
          <ul class="rup">
            <li class="wmt_n" ref="z1">
              <span :class="item.class">{{ item.indexs[0] }}</span>
            </li>
            <li ref="z2">
              <span :class="item.class">{{ item.indexs[1] }}</span>
            </li>
            <li ref="z3">
              <span :class="item.class">{{ item.indexs[2] }}</span>
            </li>
            <li ref="z4">
              <span :class="item.class">{{ `${item.indexs[3] || 0}%` }}</span>
            </li>
          </ul>
        </dt>
        <dd :style="key == showHide ? 'display:block' : 'display:none'"><img :src="item.url + '?t=' + Date.now()" /></dd>
      </dl>
    </template>
  </div>
</template>


<script>
export default {
  data() {
    return {
      loading: false,
      showHide: "nsh000001",
      diagrams: {
        nsh000001: {
          name: "上证综指",
          url: "http://image.sinajs.cn/newchart/hollow/small/nsh000001.gif",
          indexs: [],
          class: ""
        },
        nsz399001: {
          name: "深证成指",
          url: "http://image.sinajs.cn/newchart/hollow/small/nsz399001.gif",
          indexs: [],
          class: ""
        },
        nsh000300: {
          name: "沪深300",
          url: "http://image.sinajs.cn/newchart/hollow/small/nsh000300.gif",
          indexs: [],
          class: ""
        },
        nsz399006: {
          name: "创业板指",
          url: "http://image.sinajs.cn/newchart/hollow/small/nsz399006.gif",
          indexs: [],
          class: ""
        }
      }
    };
  },
  methods: {
    _showDiagram(i) {
      this.showHide = i;
    },
    /* 判断开盘时间 */
    amTime(beginTime, endTime, varTime) {
      var strb = beginTime.split(":");
      if (strb.length != 2) return false;
      var stre = endTime.split(":");
      if (stre.length != 2) return false;
      var strv = varTime.split(":");
      if (strv.length != 2) return false;
      var b = new Date();
      var e = new Date();
      var v = new Date();
      b.setHours(strb[0]);
      b.setMinutes(strb[1]);
      e.setHours(stre[0]);
      e.setMinutes(stre[1]);
      v.setHours(strv[0]);
      v.setMinutes(strv[1]);
      if (v.getTime() - b.getTime() >= 0 && e.getTime() - v.getTime() > 0) return true;
      return false;
    },
    nowTime() {
      var date = new Date(+new Date());
      var h = date.getHours() + ":";
      var m = date.getMinutes();
      return h + m;
    },
    reloadTime() {
      if (this.amTime("9:30", "11:30", this.nowTime())) this._getSinaIndex();
      if (this.amTime("13:00", "15:00", this.nowTime())) this._getSinaIndex();
    },
    _removeClassStyle() {
      let classStr = "";
      if (this.diagrams["nsh000300"].indexs[2].indexOf("-") == 0) classStr = "green";
      classStr = "red";
      Object.keys(this.diagrams).forEach((key, i) => {
        this.diagrams[key].class = classStr;
      });
    },
    /* // 添加样式 文字and背景 */
    _addClassStyle(item) {
      let classStr = "";
      if (this.diagrams["nsh000300"].indexs[2].indexOf("-") == 0) classStr = "green green-bgcolor";
      classStr = "red red-bgcolor";
      Object.keys(this.diagrams).forEach((key, i) => {
        this.diagrams[key].class = classStr;
      });
    },
    async _getSinaIndex() {
      const res = await this.$axios.post("/v1/sina_index");
      if (res.data.error_code) return;
      const data = res.data.data.replace(/var.+?="(.+?)";/g, "$1").split("\n");
      this.diagrams.nsh000001.indexs = data[0].split(",");
      this.diagrams.nsz399001.indexs = data[1].split(",");
      this.diagrams.nsh000300.indexs = data[2].split(",");
      this.diagrams.nsz399006.indexs = data[4].split(",");
      this.loading = true;
      this._addClassStyle();
      setTimeout(() => this._removeClassStyle(), 800);
    },
    test() {
      this.$store.commit("increment");
    }
  },
  created() {
    /* 默认走一次,以后间隔5秒走一次 */
    this._getSinaIndex();
    setInterval(this.reloadTime, 5000);
  }
};
</script>

<style lang="scss">
.spin-container {
  width: 348px;
  height: 290px;
  position: relative;
}
.red-bgcolor {
  background: #f9e0e1;
}
.green-bgcolor {
  background: #e5fae3;
}
.red {
  padding: 2px 3px;
  color: red;
}
.green {
  color: green;
  padding: 2px 3px;
}
.zhengquan {
  vertical-align: top;
  display: inline-block;
  margin: 0 10px 10px 0;
}
.zhengquan {
  width: 348px;
  overflow: hidden;
  border: 1px solid $zzLight-1;
  dl {
    text-align: center;
  }
  dl dd {
    display: none;
    margin: 5px 0;
  }
  dl dt ul li {
    float: left;
    width: 86px;
    text-align: left;
    &:last-child {
      width: 60px;
      overflow: hidden;
    }
  }
  dl dt {
    text-align: center;
    overflow: hidden;
    cursor: pointer;
    line-height: 30px;
    padding: 0 5px;
    &:hover {
      background: $zzLight-1;
    }
  }
}
</style>