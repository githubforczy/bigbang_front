// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './commons/router'
// cookies插件
import VueCookies from "vue-cookies";
// 引入 ant design
import Antd from "ant-design-vue";
// 引入 ant design 样式
import "ant-design-vue/dist/antd.min.css";

Vue.config.productionTip = false

Vue.use(Antd);
Vue.use(VueCookies);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
