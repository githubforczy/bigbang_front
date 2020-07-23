<template>
  <div class="rick-login-container">
    <div class="login-from-bg">
      <em style="font-size:26px; font-weight:bold; color:#fff">欢迎登陆</em>
      <a-form class="xs-login-form">
        <a-form-item>
          <a-input
            v-decorator="[
              'username',
              { rules: [{ required: true, message: '请输入您的用户名' }] }
            ]"
            placeholder="用户名"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              { rules: [{ required: true, message: '请输入您的密码' }] }
            ]"
            type="password"
            placeholder="密码"
            @keyup.enter="submitLogin"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>

        <a-form-item class="xs-center">
          <a-button type="primary" block @click="submitLogin">登录</a-button>
        </a-form-item>

        <div class="rick-center">
          <router-link to="home" style="color:#fff">去首页</router-link>
        </div>
      </a-form>
    </div>
  </div>
</template>

<script>
import {
  userLogin
} from "@/commons/service/login";
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {
    submitLogin() {
      userLogin().then((data) => {
        console.info(data);
      })
    }
  }
};
</script>

<style scoped>
.rick-login-container {
  width: 100%;
  min-height: 100vh;
  display: grid;
  justify-items: center;
  align-items: center;
  background-image: url("~@/assets/login-bg.jpg");
  background-size: 100% 100%;
}
.login-from-bg {
  width: 500px;
  height: 300px;
  display: grid;
  justify-items: center;
  padding: 10px;
}
.rick-center {
  display: grid;
  justify-items: center;
  color: #fff;
}
</style>
