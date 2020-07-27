<template>
  <div class="app-container">
    <VQueryContainer>
      <div slot="query">
        <div slot="header" class="clearfix">
          <h4>设置首页[头条]</h4>
          <el-input placeholder="一行一条记录使用逗号隔开,例如:文本标题,https://xxx.com/xxx.html" :rows="5" type="textarea" v-model="form1.content"></el-input>
          <el-button style="float: left;margin-top:10px;" type="primary" @click="_addHeadline(form1)">设置</el-button>
        </div>
        <div slot="header" class="clearfix">
          <h4>设置首页[sole]</h4>
          <el-input placeholder="一行一条记录使用逗号隔开,例如:文本标题,https://xxx.com/xxx.html" :rows="5" type="textarea" v-model="form2.content"></el-input>
          <el-button style="float: left;margin-top:10px;" type="primary" @click="_addHeadline(form2)">设置</el-button>
        </div>
      </div>
    </VQueryContainer>
  </div>
</template>

<script>
  import VQueryContainer from '@/components/AuthContainer/QueryContainer'
  import {Vue, Component, Prop, Model, Watch, Emit} from 'vue-property-decorator'
  import {addHeadline,queryHeadline} from '@/api/headline'

  @Component({
    components: {VQueryContainer},
    metas: {
      title: '头条设置',
      titleTemplate: '%s - 超级管理后台系统'
    }
  })
  export default class Headline extends Vue {

    loading = false
    form1 = {
      id:1,
      content: '',
      description: '',
      time:""
    }
    form2 = {
      id:2,
      content: '',
      description: '',
      time: ''
    }
    async _queryHeadline(){
      const res = await queryHeadline({})
      if (!res.success) return this.$msg.error(res.msg);
      this.form1.content = res.data[0].content;
      this.form2.content = res.data[1].content;
    }
    async _addHeadline(form){
      const res = await addHeadline({...form,time:Date.now()})
      if (!res.success) return this.$msg.error(res.msg);
      this.$msg.success(res.msg);
    }
    async created () {
      await this.$nextTick()
      this._queryHeadline()
    }
  }
</script>
<style scoped lang="scss">
  .app-container /deep/ {
    .tableFooter {
      height: 45px;
      line-height: 45px;
      text-indent: 10px;
    }
  }
</style>
