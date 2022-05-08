<template>
	<div class="head-juzhong">
		<div class="head-container">
			<div class="logo">
				<a class="head-logo" href="">
					<img class="head-logo-image" src="../../assets/img/shelian.png" alt="shetuan logo">
				</a>																										
			</div>				
			<div class="nav">
				<el-menu 
					:default-active="activeIndex" 
					class="el-menu-demo" 
					mode="horizontal" 
					@select="handleSelect"
					background-color="#ffe300"
					text-color="#282828">
				  <el-menu-item index="/index/index">
				  	<router-link to="/index/index">
				  		 社联首页
				  	</router-link>				  
					</el-menu-item>
				  <el-menu-item index="/faxian/shetuancardyemian">
				  	<router-link to="/faxian/shetuancardyemian">
				  		发现社团
				  	</router-link>
				  </el-menu-item>
				  <el-menu-item index="/faxian/huodongcardyemian">
				  	<router-link to="/faxian/huodongcardyemian">
				  		 发现活动
				  	</router-link>	
				  </el-menu-item>
				</el-menu>															
			</div>
			<div class="userinfo">
				<div class="userinfo-left"></div>
				<div class="userinfo-mid"></div>
				<div 
					class="touxiangquyu"
					@mouseover="touxiangvisble = true"
					@mouseleave="touxiangvisble = false">
					<ul 
						class="login"
						v-bind:class="{'hide':!uid}">
						<li class="user">
							<div class="avatar-container-30">
								<a href="#" class="user-list">
									<img src="../../assets/img/touxiang.jpg">
								</a>
							</div>				
						</li>
					</ul>
					<div class="touxiangflow" v-show="touxiangvisble">
						<div class="touxiangbuju">
							<div class="touxiangcontent">
								<ul>
									<li @click="tuichudenglv">退出登录</li>
								</ul>
							</div>
						</div>						
					</div>					
				</div>
				<div 
					class="userinfo-right"
					v-bind:class="{'hide':uid}">
					<router-link to="/login">登录</router-link>	
					<i>|</i>	
					<router-link to="/register">注册</router-link>								
				</div>					
			</div>
		</div>			
	</div>
</template>
<script type="text/javascript">
	import { mapGetters } from 'vuex'
	export default{
		data(){
			return{
				activeIndex:null,
				touxiangvisble:false
			}
		},
		computed:{
			...mapGetters(
				{uid:'uid'}
			)
		},
		methods:{
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      tuichudenglv(){
      		var that = this;
          this.$store.dispatch('LogOut').then(() => {
            location.reload();// 为了重新实例化vue-router对象 避免bug
            that.$message('已退出登录');
          });      	
      }			
		},
		mounted(){
			this.activeIndex = this.$route.path
			console.log(this.uid);
		}		
	};	
</script>
<style type="text/css">
.touxiangcontent ul li{
	cursor: pointer;
}
.touxiangbuju{
	padding: 20px 30px;
}
.touxiangflow{
	position: absolute;
	left: 0;
	top: 55px;
	background-color: #fff;
	z-index: 3;
	border-radius: 5px;
}
.touxiangquyu{
	position: relative;
	display: inline-block;
}
.hide{
	display: none !important;
}
.user a.user-list img{
	width: 30px;
	height: 30px;
	vertical-align: middle;
	border-radius: 50%;
	display: block;
}
.login .user .user-list{
	display: block;
}
.login .user .avatar-container-30{
	padding: 13px 20px;
}
ul li {
	list-style-type: none;
}
.login>li{
	float: left;
	cursor: pointer;
	position: relative;
}
.login{
	float: left;	
}
.head-container{
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.head-logo{
	height: 48px;
	display: block;
}	
.head-logo-image{
	display: block;
	height: 100%;
	width: 100%;
}
.nav{
	display: block;
	position: static;
	top: auto;
	left: auto;
	width: auto;
	z-index: 1;
	height: 54px;
}
.userinfo{
	display: flex;
	cursor: default;
	align-items: center;
	padding-left: 32px;
	white-space: nowrap;
	font-size: 14px;
	position: relative;
}
.userinfo-mid{
	margin-right: 20px;
	cursor: pointer;
}
.userinfo-right{
	display: flex;
	position: relative;
}
.userinfo-right a{
	font-size: 14px;
	width: 40px;
	text-align: center;
}
.userinfo-right i{
	height: 18px;
	color: #333;
	font-style: normal;
	margin: 0 15px;
}
.el-menu.el-menu--horizontal,.el-menu--horizontal>.el-menu-item.is-active{
	border-bottom: 0px !important;
}
.head-juzhong{
	position: relative;
	margin: 0 auto;
	width: auto;
	max-width: 1400px;
	min-width: 1000px;
}
.el-menu{
	background-color: transparent !important;
}
.is-active{
	font-weight:600;
}
.el-menu--horizontal>.el-menu-item,.el-menu--horizontal>.el-submenu .el-submenu__title{
	height: 54px !important;
	line-height: 54px !important;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
	background-color: #ffe300 !important;
}
.el-menu--horizontal>.el-menu-item{
	border-bottom: 0px  !important;
}

</style>