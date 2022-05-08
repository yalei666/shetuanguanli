import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/index.css'; // 全局自定义的css样式
import './assets/fonts/iconfont.css'; 
import axios from 'axios'
import VueAxios from 'vue-axios'
import Cookies from 'js-cookie';
Vue.use(VueAxios,axios)
Vue.use(ElementUI);
Vue.config.productionTip = false

const whiteList = ['/login','/index/index','/register'];
router.beforeEach((to,from,next) => {
	if(store.getters.uid){
		if(to.path === '/login'){
			next({path:'/'});
		}else{
			if(!store.getters.userInfo){
				console.log('未获取到用户信息',store.getters.userInfo)
				store.dispatch('GetInfo')
				.then(res => {
					next()
				})
				.catch(err =>{
					console.log(err)
				})
			}else{
				next()
			}
		}
	} else {

		if(whiteList.indexOf(to.path) !== -1){
			next()
		}else{
      ElementUI.Message({
        showClose: true,
        message: '请先登录',
        type: 'warning'
      });			
			next('/login');
		}
	}
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
