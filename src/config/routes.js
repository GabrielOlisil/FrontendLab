import { createMemoryHistory, createRouter } from 'vue-router'

import AboutView from '@views/pages/AboutView.vue'
import HomeView from '@views/pages/HomeView.vue'
import LoginView from '@views/pages/auth/LoginView.vue'
import DefaultLayout from '@views/DefaultLayout.vue'
import AuthLayout from '@views/AuthLayout.vue'

const baseLayoutChildren = [
  { path: '', component: HomeView, name: "dashboard" },
  { path: 'about', component: AboutView }
]

const authChildren = [
  {path: 'login', component: LoginView }
]


const routes = [
  { path: '/', component: DefaultLayout, children: baseLayoutChildren },
  { path: '/auth', component: AuthLayout, children: authChildren },

]



export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})