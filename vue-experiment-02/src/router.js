import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/example01",
      component: () => import("@/views/Example01.vue")
    }
  ]
});
