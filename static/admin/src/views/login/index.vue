<template>
  <div class="login-container">
    <el-form @keyup.enter.native="handleLogin" class="login-form" auto-complete="off" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
      <div class="title-container">
        <h3 class="title">{{ "欢迎登录后台管理系统" }}</h3>
      </div>
      <el-form-item prop="username">
        <div class="icon-container">
          <span class="iconfont icon-icon-user"></span>
        </div>
        <el-input name="username" type="text" v-model.trim="loginForm.username" auto-complete="off" placeholder="用户名/手机号码" />
      </el-form-item>
      <el-form-item prop="password">
        <div class="icon-container">
          <span class="iconfont icon-mima"></span>
        </div>
        <el-input name="password" :type="passwordType" v-model.trim="loginForm.password" auto-complete="off" placeholder="密码" />
        <span class="iconfont icon-chakan" @click="showPwd"></span>
      </el-form-item>
      <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading" @click.native.prevent="handleLogin" title="点击登录系统">{{ "登录" }}</el-button>
    </el-form>
    <div class="icp">Copyright © 2005-2020 All Rights Reserved ocns.com.cn</div>
  </div>
</template>

<script>
import { Vue, Component, Prop, Model, Watch, Emit } from "vue-property-decorator";
import { loginByUsername } from "@/api/login/login";

@Component({})
export default class Login extends Vue {
  loginForm = { username: "", password: "" };
  loginRules = {
    username: {
      required: true,
      validator: (rule, value, callback) => {
        if (!/^[A-Za-z0-9_\-\u4e00-\u9fa5]{4,18}$/g.test(value)) return callback(`请输入4-18位账号,可使用字母,数字,中文,下划线`);
        callback();
      },
      trigger: "change"
    },
    password: {
      required: true,
      validator: (rule, value, callback) => {
        if (!/^[A-Za-z0-9_.]{6,18}$/g.test(value)) return callback(`请输入6-18位数的密码, 可使用字母，数字,下划线`);
        callback();
      },
      trigger: "change"
    }
  };
  passwordType = "password";
  loading = false;
  /** 切换显示代码 */
  showPwd() {
    if (this.passwordType === "password") return (this.passwordType = "");
    this.passwordType = "password";
  }
  /** 开始登陆代码 */
  async handleLogin() {
    if (!(await this.$refs.loginForm.validate())) return;
    this.loading = true;
    let res = await loginByUsername({ account: this.loginForm.username, password: this.loginForm.password });
    this.loading = false;
    if (!res.success) return this.$msg.error(res.data.message);
    this.$store.commit("SET_USER_INFO", res.data);
    this.$store.commit("SET_TOKEN", res.data.token);
    this.$store.commit("SET_ROUTERS");
    this.$router.push({ path: "/" });
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/variables.scss";
.login-container /deep/ {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #272822; //url("~@/assets/images/login_bg3.jpg");
  background-position: 0px -1700px;
  background-size: cover;
  .el-input {
    display: inline-block;
    height: 47px;
    width: calc(100% - 55px);
    input {
      border: none !important;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_black;
      height: 47px;
    }
  }
  .el-form-item {
    border-radius: 5px;
    color: #454545;
    border: 1px solid $light_gray;
    &.is-error {
      border: 1px solid #f56c6c;
    }
  }
  .el-input--medium {
    width: calc(100% - 80px);
  }
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 350px;
    height: 390px;
    padding: 35px 35px 0px 35px;
    margin: auto;
    background: #fff;
    border-radius: 10px;
  }
  .icon-container {
    padding: 0px 5px 0px 15px;
    color: $light_black;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $light_black;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 35px;
    bottom: 28px;
  }
  .icon-chakan {
    position: relative;
    &:before {
      position: absolute;
      top: -10px;
      right: -10px;
    }
  }
  .icp {
    position: absolute;
    bottom: 5%;
    z-index: 99;
    color: #fff;
    text-align: center;
    width: 100%;
  }
}
</style>