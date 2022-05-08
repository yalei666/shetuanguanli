import Cookies from 'js-cookie';
import {global} from '../../global/global';
import {api} from '../../global/api';
import { Message } from 'element-ui';
const user = {
	state:{
		uid:Cookies.get('userId'),
		//token:Cookies.get('userToken'),
		userInfo:null,
	},
	mutations:{
		SET_UID:(state,uid)=>{
			state.uid = uid;
		},
		// SET_TOKEN:(state,token)=>{
		// 	state.token = token;
		// },
		SET_USERINFO:(state,userInfo)=>{
			state.userInfo = userInfo;
		}
	},
	actions:{
		LoginByAccount({commit,state},userInfo){
			return new Promise((resolve,reject) => {
				console.log('登陆入参',userInfo)
				global.get(api.login,userInfo,function (res) {
					console.log('-------获取到登录返回信息：',JSON.stringify(res) )
					if(res.data.resultCode  == 1 ){
						var resdata = JSON.parse(res.data.data.results);
            // Cookies.set('userToken',res.token,{ expires: 1/3}); //设置token
            Cookies.set('userId', resdata[0].id,{ expires: 1/3}); //设置用户id，
            commit('SET_UID', resdata[0].id);	
            resolve();					
					}else{
						//后端接口出错处理
	          Message({
	              showClose: true,
	              message: res.data.resultMsg,
	              type: 'error'
	          });						
					}		
				},function(res){
					reject(res);
				})
				return false;
			})
		},
		GetInfo({dispatch,commit,state}){
			return new Promise((resolve,reject) => {
				global.get(api.getUserInfo,{'userId':state.uid},function(res){
					console.log('-------根据id获取用户信息：',JSON.stringify(res) )
					if(res.data.resultCode == 1){
						var resdata = JSON.parse(res.data.data.results);
						commit('SET_USERINFO', resdata[0]);
						resolve();
					}else{
	          Message({
	              showClose: true,
	              message: res.data.resultMsg,
	              type: 'error'
	          });	
					}
				},function(res){
					reject(res);
				})
			})
		},
		LogOut({commit,state}){
			return new Promise((resolve,reject)=>{
          		Cookies.remove('userId');
          		resolve();
			});
		}
	}
}

export default user;