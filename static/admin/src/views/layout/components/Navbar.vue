<template>
  <el-menu class="navbar" mode="horizontal">
    <div class="right-menu">
      <el-popover placement="bottom" width="200" trigger="hover">
        <div class="logout">
          <span class="iconfont icon-dengchu">&nbsp;&nbsp;</span><a href="JavaScript:void(0)" title="修改密码" @click="_logout">{{ "退出登录" }}</a>
        </div>
        <a slot="reference">{{ $store.state.user.usersInfo.info.account }}</a>
      </el-popover>
    </div>
  </el-menu>
</template>

<script>
import { logout } from "@/api/login/login";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      dropActive: false
    };
  },
  methods: {
    toggleSideBar() {
      this.$store.commit("TOGGLE_SIDEBAR");
    },
    async _logout() {
      await logout({});
      this.$store.commit("LOGOUT");
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 69px;
  line-height: 69px;
  background: #393d49;
  border-bottom: 5px solid #5fb878;
  .right-menu {
    float: right;
    height: 100%;
    margin-right: 20px;
    color: #fff;
  }
}
.logout {
  padding: 10px;
}
</style>
