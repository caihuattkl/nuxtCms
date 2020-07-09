<template>
  <div class="zhengquan" id="zhishu">
    <dl v-for="(item, key) in diagrams" :key="key">
      <dt class="active" @click="_showDiagram(key)" v-if="item.indexs[2]">
        <ul class="rup">
          <li class="wmt_n">
            <span :style="`${item.indexs[2].indexOf('-') == 0 ? 'color:green' : 'color:red'}`">{{ item.indexs[0] }}</span>
          </li>
          <li>
            <span :style="`${item.indexs[2].indexOf('-') == 0 ? 'color:green' : 'color:red'}`">{{ item.indexs[1] }}</span>
          </li>
          <li>
            <span :style="`${item.indexs[2].indexOf('-') == 0 ? 'color:green' : 'color:red'}`">{{ item.indexs[2] }}</span>
          </li>
          <li>
            <span :style="`${item.indexs[2].indexOf('-') == 0 ? 'color:green' : 'color:red'}`">{{ `${item.indexs[3] || 0}%` }}</span>
          </li>
        </ul>
      </dt>
      <dd :style="key == showHide ? 'display:block' : 'display:none'"><img :src="item.url + '?t=' + Date.now()" /></dd>
    </dl>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showHide: "nsh000001",
      diagrams: {
        nsh000001: {
          name: "上证综指",
          url: "http://image.sinajs.cn/newchart/hollow/small/nsh000001.gif",
          indexs: []
        },
        nsz399001: {
          name: "深证成指",
          url: "http://image.sinajs.cn/newchart/hollow/small/nsz399001.gif",
          indexs: []
        },
        nsh000300: {
          name: "沪深300",
          url: "http://image.sinajs.cn/newchart/hollow/small/nsh000300.gif",
          indexs: []
        },
        nsz399006: {
          name: "创业板指",
          url: "http://image.sinajs.cn/newchart/hollow/small/nsz399006.gif",
          indexs: []
        }
      }
    };
  },
  methods: {
    _showDiagram(i) {
      this.showHide = i;
    },
    async _getSinaIndex() {
      const res = await this.$axios.post("/v1/sina_index");
      if (res.data.error_code) return;
      const data = res.data.data.replace(/var.+?="(.+?)";/g, "$1").split("\n");
      this.diagrams.nsh000001.indexs = data[0].split(",");
      this.diagrams.nsz399001.indexs = data[1].split(",");
      this.diagrams.nsh000300.indexs = data[2].split(",");
      this.diagrams.nsz399006.indexs = data[4].split(",");
    },
    test() {
      this.$store.commit("increment");
    }
  },
  created() {
    setInterval(() => this._getSinaIndex(), 2000);
  }
};
</script>

<style lang="scss">
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