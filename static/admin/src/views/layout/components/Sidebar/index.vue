<template>
  <ScrollBar>
    <ElMenu mode="vertical" :default-active="$route.path" :collapse="isCollapse" background-color="#393D49" text-color="#bfcbd9">
      <SidebarItem :routes="$store.state.permission.routers" />
    </ElMenu>
  </ScrollBar>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";
import ScrollBar from "@/components/ScrollBar";

export default {
  components: { SidebarItem, ScrollBar },
  computed: {
    isCollapse() {
      return !this.$store.state.app.sidebar.opened;
    }
  }
};
</script>
