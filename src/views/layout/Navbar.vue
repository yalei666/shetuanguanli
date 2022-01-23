<template>
	<div class="head-juzhong">
		<div class="head-container">
			<div class="logo">
				<a class="head-logo" href="">
					<img class="head-logo-image" src="../../assets/img/shelian.png" alt="shetuan logo">
				</a>																										
			</div>				
			<div class="nav">
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				  <el-menu-item index="1">处理中心</el-menu-item>
				  <el-submenu index="2">
				    <template slot="title">我的工作台</template>
				    <el-menu-item index="2-1">选项1</el-menu-item>
				    <el-menu-item index="2-2">选项2</el-menu-item>
				    <el-menu-item index="2-3">选项3</el-menu-item>
				    <el-submenu index="2-4">
				      <template slot="title">选项4</template>
				      <el-menu-item index="2-4-1">选项1</el-menu-item>
				      <el-menu-item index="2-4-2">选项2</el-menu-item>
				      <el-menu-item index="2-4-3">选项3</el-menu-item>
				    </el-submenu>
				  </el-submenu>
				  <el-menu-item index="3" disabled>消息中心</el-menu-item>
				  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
				</el-menu>															
			</div>
			<div class="userinfo">
				<div class="userinfo-left"></div>
				<div class="userinfo-mid">
					
				</div>
				<div class="userinfo-right">
					<a href="">登录</a>	
					<i>|</i>	
					<a href="">注册</a>								
				</div>					
			</div>
		</div>			
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				activeIndex: '1',
			}
		},
		methods:{
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }			
		},

	}	
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
	height: 60px;
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
	color: 33px;
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

</style>