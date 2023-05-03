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
  },
  {
    path: "/maps", // add new route for Maps.vue file
    name: "Maps",
    component: () => import("../views/MapsView.vue")
  },
  {
    path: "/fuel", // add new route for Maps.vue file
    name: "Fuel",
    component: () => import("../views/FuelView.vue")
  },
  {
    path: "/authors", // add new route for Maps.vue file
    name: "Authors",
    component: () => import("../views/AuthorsView.vue")
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router