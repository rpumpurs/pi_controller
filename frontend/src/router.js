import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/sinks",
      name: "sinks",
      component: () => import("./components/SinkList")
    },
  ]
});
