import Vue from "vue";
import Router from "vue-router";

const Login = () => import("@/views/Login");
const Index = () => import("@/views/Index");
const Home = () => import("@/views/Home");
const EditArticle = () => import("@/views/EditArticle");

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
          path: "/edit_article",
          name: "edit_article",
          component: EditArticle,
          meta: {
            title: "写博客",
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