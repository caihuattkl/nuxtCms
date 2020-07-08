<template>
  <div class="zhengquan" id="zhishu">
    <dl v-for="(item,key) in diagrams">
      <dt :key="key" class="active" @click="_showDiagram(key)">
        <ul class="rup">
          <li class="wmt_n"><span>{{item.name}}</span></li>
          <li><span>3000</span></li>
          <li><span>50</span></li>
          <li><span>10</span></li>
        </ul>
      </dt>
      <dd :style="key == showHide?'display:block':'display:none'"><img :src="item.url"/></dd>
    </dl>
  </div>
</template>


<script>
export default {
	data(){
		return {
			showHide:"nsh000001",
			diagrams:{
				"nsh000001":{
					name:"上证综指",
					url:"http://image.sinajs.cn/newchart/hollow/small/nsh000001.gif"
				},
				"nsz399001":{
					name:"深证成指",
					url:"http://image.sinajs.cn/newchart/hollow/small/nsz399001.gif"
				},
				"nsh000300":{
					name:"沪深300",
					url:"http://image.sinajs.cn/newchart/hollow/small/nsh000300.gif"
				},
				"nsz399006":{
					name:"创业板指",
					url:"http://image.sinajs.cn/newchart/hollow/small/nsz399006.gif"
				}
			}
		}
	},
  methods: {
		_showDiagram(i){
			this.showHide=i;
		},
    test() {
     this.$store.commit('increment')
    }
  },
  created() {

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