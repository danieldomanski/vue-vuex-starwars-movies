import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Movie from "../pages/Movie.vue";
import NotFound from "../pages/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movies/:id",
    name: "Movie",
    component: Movie,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/About.vue"),
  },
  { path: "*", component: NotFound },
];

const router = new VueRouter({
  routes,
});

export default router;
