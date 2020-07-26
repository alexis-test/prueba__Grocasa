import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/detalle",
    name: "detalle",
    component: () =>
      import( "../views/detalle.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
