<template>
	<div id="gerenzhongxin">
		<div class="gerenzhongxin_container">
			<el-container style=" border: 1px solid #eee">
			  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
			  	<div class="user_info" style="text-align:center">
						<div class="userimg_container" >
							<img class="user_img" src="../../assets/img/shelian.png">
						</div>
						<div class="username_container" >
							<span class="user_name">李亚雷</span>
						</div>									  		
			  	</div>
			  	<el-divider></el-divider>
			    <el-menu>
	          <el-menu-item index="1-1">
	          	<i class="el-icon-message"></i>
					  	<router-link to="/gerenzhongxin/check/myshetuanapply" style="margin-left:-2px">
					  		 我的消息
					  	</router-link>
	        	</el-menu-item>
			      <el-submenu index="2">
			        <template slot="title"><i class="el-icon-message"></i>社团事务</template>
			        <el-menu-item-group>
			          <el-menu-item index="2-1">
							  	<router-link to="/gerenzhongxin/check/myshetuanapply">
							  		 我的社团申请
							  	</router-link>
			        	</el-menu-item>
			          <el-menu-item index="2-2">我加入的社团</el-menu-item>
			        </el-menu-item-group>
			      </el-submenu>
			      <el-submenu index="3">
			        <template slot="title"><i class="el-icon-menu"></i>活动事务</template>
			        <el-menu-item-group>
			          <el-menu-item index="3-1">选项1</el-menu-item>
			          <el-menu-item index="3-2">选项2</el-menu-item>
			        </el-menu-item-group>
			      </el-submenu>
			    </el-menu>
			  </el-aside>
			  
			  <el-container>
			    <el-main>
		        <transition name="fade" mode="out-in">
		            <router-view :key="key"></router-view>
		        </transition>				    	
			    </el-main>
			  </el-container>
			</el-container>						
		</div>		
	</div>		
</template>
<script type="text/javascript">
	import { mapGetters } from 'vuex'
	export default{
		data(){
		      const item = {
		        date: '2016-05-02',
		        name: '王小虎',
		        address: '上海市普陀区金沙江路 1518 弄'
		      };			
			return{
				 tableData: Array(20).fill(item)
			}
		},
    computed: {
      key() {
        return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
      },
			...mapGetters(
				{userInfo:'userInfo'}
			)      
    }		
	}	
</script>
<style type="text/css">
	#gerenzhongxin{
		background-color: #EFF3F5;
		margin-top: 15px;
		padding-top:5px ;
	}
	.gerenzhongxin_container{
		margin:0 auto;
		width:1160px;
		height:auto;
		background-color: #fff;
		box-sizing: content-box;	
	}	
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }	
  .gerenzhongxin_container .el-aside{
  	background-color :rgb(250,250,210) !important;
  }
  .gerenzhongxin_container .el-submenu__title:hover{
  	background-color :rgb(250,215,0) !important;
  }
  .gerenzhongxin_container .el-menu-item:focus, .el-menu-item:hover{
		background-color :rgb(250,215,0) !important;  	
  }
  .gerenzhongxin_container .el-menu-item.is-active{
  	color:#303133;
  	font-weight:600;
  }

  .user_info{
  	padding-top:24px;
  }
  .user_name{
  	width:100%;
  	height:24px;
  	font-size:21px;
  	margin-bottom:4px;
  	font-weight:400;
  	line-height:36px;
  	color:#333333;
  }
  .user_img{
  	width:72px;
  	height:72px;
  	border-radius:36px;
  }
</style>