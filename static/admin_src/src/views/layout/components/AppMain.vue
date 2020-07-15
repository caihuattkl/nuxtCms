<template>
  <section class="app-main" style="min-height: 100%">
    <transition name="fade" mode="out-in">
        <router-view :key="Date.now().toString(16)"></router-view>
      <!-- <keep-alive :include="cachedViews"></keep-alive> -->
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
	},
  },
  
}
</script>
