<template>
	<div id="gerenzhongxin">
		<div class="gerenzhongxin_container">
			<el-container style=" border: 1px solid #eee">
			  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
			    <el-menu :default-openeds="['1', '3']">
			      <el-submenu index="1">
			        <template slot="title"><i class="el-icon-message"></i>社团事务</template>
			        <el-menu-item-group>
			          <el-menu-item index="1-1">
							  	<router-link to="/gerenzhongxin/check/myshetuanapply">
							  		 我的社团申请
							  	</router-link>
			        	</el-menu-item>
			          <el-menu-item index="1-2">我加入的社团</el-menu-item>
			        </el-menu-item-group>
			      </el-submenu>
			      <el-submenu index="2">
			        <template slot="title"><i class="el-icon-menu"></i>活动事务</template>
			        <el-menu-item-group>
			          <el-menu-item index="2-1">选项1</el-menu-item>
			          <el-menu-item index="2-2">选项2</el-menu-item>
			        </el-menu-item-group>
			      </el-submenu>
			    </el-menu>
			  </el-aside>
			  
			  <el-container>
			    <el-header style="text-align: right; font-size: 12px">
			      <el-dropdown>
			        <i class="el-icon-setting" style="margin-right: 15px"></i>
			        <el-dropdown-menu slot="dropdown">
			          <el-dropdown-item>查看</el-dropdown-item>
			          <el-dropdown-item>新增</el-dropdown-item>
			          <el-dropdown-item>删除</el-dropdown-item>
			        </el-dropdown-menu>
			      </el-dropdown>
			      <span>王小虎</span>
			    </el-header>
			    
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
      }
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
		padding:20px 20px 0px 20px;
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
</style>