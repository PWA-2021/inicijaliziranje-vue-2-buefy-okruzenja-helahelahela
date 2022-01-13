import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: () =>
      import("../views/Calendar.vue"),
  },
  {
    path: "/timeline",
    name: "Timeline",
    component: () =>
      import("../views/Timeline.vue"),
  },
  {
    path: "/newentry",
    name: "NewEntry",
    component: () =>
      import("../views/NewEntry.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import("../views/Register.vue"),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
