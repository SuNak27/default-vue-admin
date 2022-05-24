import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../components/layouts/Dashboard.vue";

import Login from "../views/Login.vue";
import Home from "../views/Home.vue";

import axios from "axios";

axios.defaults.headers.common["X-Admin-Token"] = localStorage.getItem("token");

axios.defaults.baseURL = "http://localhost:3000/";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    component: Dashboard,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };
  document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`;
  if (to.name !== "Login" && token == null) {
    next({ name: "Login" });
  } else if (to.name === "Login" && token) {
    next({ path: "/" });
  } else {
    if (to.matched.some((record) => record.meta.is_admin)) {
      if (parseJwt(token).role === "sysadmin") {
        next();
      } else {
        next({ path: "/" });
      }
    } else {
      next();
    }
  }
});

export default router;
