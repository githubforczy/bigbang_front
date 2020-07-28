import Vue from "vue";
import Router from "vue-router";
import VueCookies from "vue-cookies";

const Index = () => import("@/views/Index");
const Login = () => import("@/views/Login");
const Home = () => import("@/views/Home");
const Article = () => import("@/views/Article");

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
      redirect: "/home",
      meta: {
        anonymous: true,
      },
      children: [
        {
          path: "/home",
          name: "home",
          component: Home,
          meta: {
            title: "首页",
          },
        },
        {
          path: "/article",
          name: "article",
          component: Article,
          meta: {
            title: "文章专题",
          },
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        title: "登陆页",
      },
    }
  ]
});

export default router;