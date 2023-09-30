import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/components/HomePage/HomePage.vue"),
      },
      {
        path: "login",
        name: "Login",
        component: () => import("@/components/LoginPage/LoginPage.vue"),
      },
      {
        path: "settings",
        name: "Settings",
        component: () => import("@/components/SettingsPage/SettingsPage.vue"),
      },
      {
        path: "timetable",
        name: "Timetable",
        component: () => import("@/components/TimeTablePage/TimeTablePage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
