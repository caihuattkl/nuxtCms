<template>
  <el-cascader style="width:100%;" size="small" placeholder="请选择新闻分类" clearable v-model="newsClassOptions.newsClassValue" :options="newsClassOptions.selectOption" :props="{ expandTrigger: 'hover' }" @change="_handleChange"></el-cascader>
</template>

<script>
import { Vue, Component, Prop, Model, Watch, Emit } from "vue-property-decorator";
import { queryNewsClass } from "@/api/news";
@Component({ components: {}, props: { isAll: { type: Boolean, default: false } } })
export default class NewsClasse extends Vue {
  newsClassOptions = {
    newsClassValue: "",
    selectOption: []
  };

  /** 获取所有新闻分类 */
  async _queryNewsClass() {
    let res = await queryNewsClass({ className: "" });
    if (!res.success) return this.$msg.error(res.data.msg);
    this.newsClassOptions.selectOption = res.data.filter((topItem, topIndex) => topItem.firstId == "0");
    this.newsClassOptions.selectOption.forEach(item => {
      item.children = this.isAll ? [{ value: "", label: "全部" }] : [];
      item.value = item.id;
      item.label = item.title;
      res.data.forEach((topItem, topIndex) => {
        if (topItem.firstId == item.id) {
          item.children.push({ value: topItem.id, label: topItem.title,id:topItem.id,directoryName:topItem.directoryName });
        }
      });
    });
    this._getCacheFillNewsClass();
  }
  /* 取缓存数据 */
  async _getCacheFillNewsClass(){
    if(this.$store.state.newsClassCache)this.newsClassOptions.newsClassValue=[this.$store.state.newsClassCache[0].id,this.$store.state.newsClassCache[1].id];
  }
  async _handleChange(a) {
    let options=[{},{}]
    this.newsClassOptions.selectOption.forEach((item,i)=>{
      if(a[0]===item.id){
        options[0].id = item.id
        options[0].value=item.directoryName
      }
      if(a[1]){
        item.children.forEach((val,i)=>{
          if(a[1]==val.id){
            options[1].id = val.id
            options[1].value=val.directoryName
          }
        })
      }
    })
    this.$emit('change', options)
  }
  async created() {
    await this.$nextTick();
    this._queryNewsClass();
  }
}
</script>

