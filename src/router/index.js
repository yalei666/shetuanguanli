import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Layout';
import Index from '../views/index/index';
import sheTuanCardYeMian from '../views/faxianshetuan/faxianshetuan';
import sheHuoDongYeMian from '../views/faxianhuodong/faxianhuodong';
import Login from '../views/login/login';
import Register from '../views/register/register';
import Wanshanxinxi from '../views/wanshanxinxi/wanshanxinxi';
import shetuanxiangqing from '../components/shetuanxiangqing/shetuanxiangqing';
import gerenzhongxin from '../views/gerenzhongxin/gerenzhongxin';
import myshetuanapply from '../views/myshetuanapply/myshetuanapply';
import gerenxiaoxi from '../views/gerenxiaoxi/gerenxiaoxi';


Vue.use(VueRouter)

const routes = [
  {path:'/login',component:Login,hidden: true},  
  {path:'/register',component:Register,hidden: true},  
  {path:'/wanshanxinxi',component:Wanshanxinxi,hidden: true},  
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
  },
  {
    path: '/faxian',
    component: Layout,
    redirect: 'noredirect',
    name: '',      
    children:[
      {path: 'shetuancardyemian', component: sheTuanCardYeMian, name: '发现社团'},
      {path: 'huodongcardyemian', component: sheHuoDongYeMian, name: '发现活动'}
    ],
    hidden: true,       
  },
  {
    path: '/shetuanxiangqing/:shetuanid/:shetuanname',
    component: Layout,
    redirect: 'noredirect',      
    children:[
      {path: '', component: shetuanxiangqing, name: '社团详情'}
    ],
    hidden: true, 
  },
  {
    path: '/gerenzhongxin',
    component: Layout,
    redirect: 'noredirect',
    name: '',      
    children:[
      {
        path: 'check', 
        component: gerenzhongxin, 
        name: '个人中心',
        children:[
          {path: 'myshetuanapply', component: myshetuanapply, name: '我的社团申请'},            
          {path: 'gerenxiaoxi', component: gerenxiaoxi, name: '我的消息'}            
          
        ]
      },
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
