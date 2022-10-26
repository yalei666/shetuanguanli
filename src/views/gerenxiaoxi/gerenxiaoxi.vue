<template>
	<div id="gerenxiaoxi">
			    <el-header style="text-align: right; font-size: 12px">
						<div class="header_bt">
							{{this.$route.name}}
						</div>	

			    </el-header>
			    <el-main>	</el-main>			
	</div>	
</template>
<script type="text/javascript">
	export default{
		data(){
			return{

			}
		},
		methods:{

		},
		mounted(){
			 
			console.log(this.$route) 
		}		
	}
</script>
<style type="text/css">
	.header_bt{
		font-size:19px;
		position: relative;
		height: 2em;
	}
	.header_bt::after{
		position:absolute;
		bottom: -10px;
		left:1em;
		content: '';
		width: 2em;
		height: 4px;
		background: #ffe300;
		opacity: 1;
		border-radius: 2px;
	}
</style>			