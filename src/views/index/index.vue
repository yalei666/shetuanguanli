<template>
	<div class="index-container">
		<div class="lunbo-container">
		  <el-carousel height="300px" direction="vertical" :autoplay="true">
		    <el-carousel-item v-for="(item,index) in imgurlArr" :key="index">
		    	<img :src="item.url">
		    </el-carousel-item>
		  </el-carousel>			
		</div>											
	</div>		
</template>
<script type="text/javascript">
	export default{
		data(){
			return{		
				imgurlArr:[
					{ url: require('./../../assets/img/lunbo1.jpg') },
        	{ url: require('./../../assets/img/lunbo2.jpg') },
        ]				
			}
		},
		methods:{
		
		},

	}				
</script>
<style type="text/css">
.index-container{
	position: relative;
	width: 100%;
}	
.lunbo-container{
	width: 100%;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
