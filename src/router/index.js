import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/LoginView.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue")
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomeView.vue")
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router