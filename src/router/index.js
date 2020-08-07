import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Id from "../views/Id.vue";
import Input from "../views/Input.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  { 
    path: '/input', 
    component: Input, 
    props: true 
  },
  { 
    path: '/:id', 
    component: Id, 
    props: true 
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
