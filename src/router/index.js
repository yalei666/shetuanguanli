import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Layout';
import Index from '../views/index/index';

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      //component: Layout,
      redirect: '/index/index',  //重定向到默认首页

      hidden: true,
    }, 
    {
      path: '/index',
      component: Layout,
      redirect: 'noredirect',
      name: '',      
      children:[
        {path: 'index', component: Index, name: '系统首页'}
      ],
      hidden: true,      
    }     
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
