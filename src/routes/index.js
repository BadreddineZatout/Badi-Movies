import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Actors from "../views/Actors.vue";

const routes = [
  {
    path: "/actors",
    name: "Actors",
    component: Actors,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Actors,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Actors,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
