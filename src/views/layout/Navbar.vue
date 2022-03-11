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
				<div class="userinfo-right">
					<router-link to="/login">登录</router-link>	
					<i>|</i>	
					<router-link to="/register">注册</router-link>								
				</div>					
			</div>
		</div>			
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				activeIndex:null,
			}
		},
		methods:{
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }			
		},
		mounted(){
			this.activeIndex = this.$route.path
		}		
	};	
</script>
<style type="text/css">
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
	margin: 8px 24px;
	display: flex;
	cursor: default;
	align-items: center;
	padding-left: 32px;
	white-space: nowrap;
	font-size: 14px;
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