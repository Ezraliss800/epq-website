import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage/HomePage.vue'
import LoginPage from '@/components/LoginPage/LoginPage.vue'
import SettingsPage from '@/components/SettingsPage/SettingsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/settings',
      name: 'Settings',
      component: SettingsPage
    }
  ]
})

export default router
