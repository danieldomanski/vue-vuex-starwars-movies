import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/movies/:id",
    name: "Movie",
    component: () => import("../pages/Movie.vue"),
  },
  {
    path: "/reviews",
    name: "Reviews",
    component: () => import("../pages/MyReviews.vue"),
  },
  { path: "*", component: () => import("../pages/NotFound.vue") },
];

const router = new VueRouter({
  routes,
});

export default router;
