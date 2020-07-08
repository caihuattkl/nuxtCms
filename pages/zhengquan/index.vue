<template>
  <div>
    <headAriticle />
    <topClassNav :newClassData="newsClass" />
    <div class="main">
      <navs :newClassData="newsClass" />
      <div class="content">
        <div class="leftBox">
          <indexDiagram />
          <left2 />
          <newClass
            :newClassData="newsClass"
            :channelNewsData="channelNewsData"
          />
        </div>
        <right />
      </div>
    </div>
    <footerReport />
  </div>
</template>

<script>
import headAriticle from "@/components/head-ariticle.vue";
import navs from "@/components/navs.vue";
import topClassNav from "@/components/top-class-nav.vue";
import reportsMeun from "@/components/reports-meun.vue";
import channelSlideReport from "@/components/channel-slide-report.vue";
import footerReport from "@/components/footer-report.vue";
import indexDiagram from "./components/index-diagram.vue";
import left2 from "./components/left2.vue";
import right from "./components/right.vue";
import newClass from "./components/news-class.vue";
import { getSinaSZList } from "@/apis/zhengquan";
import { getNewsClass } from "@/apis/bases";
export default {
  components: {
    navs,
    newClass,
    right,
    left2,
    indexDiagram,
    topClassNav,
    headAriticle,
    reportsMeun,
    channelSlideReport,
    footerReport
  },
  methods: {},
  created() {},
  async asyncData(app) {
    let res1 = await app.$axios.post("/v1/news_class/item", {
      className: "证券"
    });
    let res2 = await app.$axios.post("/v1/channel_news/item", {
      className: "证券"
    });
    return { newsClass: res1.data.data, channelNewsData: res2.data.data };
  }
};
</script>

<style lang="scss">
</style>
