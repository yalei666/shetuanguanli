import Vue from 'vue';

export const global = {
	get:function (url,options = {},sucCb,errorCb) {
		if(!url){
			console.log('接口地址不能为空')
			return false;
		}
		Vue.axios.get(url,{params:options})
			.then(function(response){
				sucCb && sucCb(response)
			})
			.catch(function(response){
				errorCb && errorCb(response)
			})
	},
	post:function (url,options = {},sucCb,errorCb) {
		if(!url){
			console.log('接口地址不能为空')
			return false;
		}
		Vue.axios.post(url,options)
			.then(function(response){
				sucCb && sucCb(response)
			})
			.catch(function(error){
				errorCb && errorCb(error)
			})
	},	
}