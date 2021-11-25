import Vue from "vue";
import VueRouter from "vue-router";
import MySalary from "../views/MySalary.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MySalary",
    component: MySalary,
  },
  {
    path: "/statistics",
    name: "Statistics",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Statistics.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
