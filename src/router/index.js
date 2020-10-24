import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import Page404 from "../views/Page404.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/cocktail/:id",
    name: "Cocktail",
    component: () =>
      import(
        /* webpackChunkName: "cocktail" */ "../views/Cocktail/Cocktail.vue"
      )
  },
  {
    path: "*",
    component: Page404
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
