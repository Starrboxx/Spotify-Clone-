import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
// import HomePage from '../views/HomePage.vue'
import TabsPage from '../views/TabsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    /* 
    if yo are using nested route you need to have ion page ion tabs ion router outlet in it
    https://github.com/ionic-team/ionic-framework/issues/19790
    if you have problem rendering different tabs just create a tabsPage where it contains the navigations
    */
    path: '/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/home',
        
      },
     {
      path:'home',
      component:() => import('@/views/HomePage.vue')
     },
     {
       path: 'search',
       
       component: () => import('@/views/searchPage.vue')
     },
     {
       path: 'collections/playlist',
       
       component: () => import('@/views/YourLibraryPage.vue')
     },
   
    ]
  },
  // {
  //   path: '/search',
  //   name: 'Search',
  //   component: searchPage,
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
