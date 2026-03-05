import { createMemoryHistory, createRouter } from 'vue-router'

import AboutView from '@views/pages/AboutView.vue'
import HomeView from '@views/pages/HomeView.vue'
import DefaultLayout from '@views/DefaultLayout.vue'

const baseLayoutChildren = [
  { path: '', component: HomeView },
  { path: '/about', component: AboutView }
]


const routes = [
  { path: '/', component: DefaultLayout, children: baseLayoutChildren },

]



export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})