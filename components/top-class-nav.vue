<template>
  <div class="plan">
    <div class="left">
      <ul class="crumbs" id="crumbs">
        <li>
          <a href="/"><img src="~/assets/images/logo_fnc.jpg"/></a>
        </li>
        <li v-for="(item, i) in crumbs" :key="i">
          <a :href="`/${item.url}`">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    topClassNav: {
      default: () => [],
      type: Array | Object
    }
  },
  data() {
    return {
      crumbs: []
    };
  },
  methods: {
    _setCrumbs() {
      const classNames = this.$router.history.current.fullPath
        .replace(/\//g, "#")
        .replace(/^#(.+?)/g, "$1")
        .split("#");
      this.crumbs = classNames
        .filter(item => item)
        .map((item, i) => {
          return { name: this.topClassNav[item].name, url: this.topClassNav[item].url };
        });
    }
  },
  created() {
    this._setCrumbs();
  }
};
</script>

<style lang="scss" scoped>
.crumbs {
  padding: 8px 0;
  margin-bottom: 20px;
  list-style: none;
  li {
    float: left;
  }
  > li:first-child {
    padding: 0;
  }
  > li + li:before {
    color: #cccccc;
    content: ">";
    padding: 0 5px;
  }
  > li + li {
    margin-top: 9px;
  }
}
</style>
