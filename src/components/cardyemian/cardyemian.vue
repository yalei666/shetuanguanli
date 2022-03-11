<template>
	<div id="cardyemain-buju">
		<div class="cardyemain-container">
			<div class="lunbo-buju">
				<div class="lunbo-container">
				  <el-carousel  direction="horizontal" :autoplay="true" >
				    <el-carousel-item v-for="(item,index) in imgurlArr" :key="index">
				    	<img :src="item.url">
				    </el-carousel-item>
				  </el-carousel>	
				</div>					
			</div>
			<div class="shaixuan-buju">
				<div class="shaixuan-container">
					<el-button type="primary" round>主要按钮</el-button>
					<el-button type="primary" round>主要按钮</el-button>
					<el-button type="primary" round>主要按钮</el-button>
					<el-button type="primary" round>主要按钮</el-button>
				</div>
			</div>
			<div class="card-buju">
				<div class="card-container">
					<card :datalist="datalistarr"></card>	
				</div>
			</div>
			<div class="fenye-buju">
				<div class="fenye-container">
					<el-pagination
					  background
					  layout="prev, pager, next"
					  :total="1000">
					</el-pagination>					
				</div>	
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import card  from '../card/card.vue' 	
	export default{
		components:{card},
		props:['datalistarr'],
		data(){
			return{
				imgurlArr:[
					{ url: require('./../../assets/img/lunbo1.jpg') },
        	{ url: require('./../../assets/img/lunbo2.jpg') },
					{ url: require('./../../assets/img/lunbo1.jpg') },
        	{ url: require('./../../assets/img/lunbo2.jpg') },        	
        ],				

			}
		},
		methods:{

		}
	};
</script>
<style type="text/css">
	#cardyemain-buju{
		position: relative;
		width: 100%;
		background: #EFF3F5;
	}
	.cardyemain-container{
		overflow: hidden;
		height: auto;
		margin:0 auto;
		width:1200px;
		padding:20px 0 10px 0;
	}
	.lunbo-container{
		height: 330px;
	}
	.el-carousel__item h3 {
	  color: #475669;
	  font-size: 14px;
	  opacity: 0.75;
	  line-height: 200px;
	  margin: 0;
	} 
	.el-carousel{
		border-radius: 4px;
	}
	#cardyemain-buju .el-button--primary{
		background-color:#fff;
		border-color:#fff;
		color: #282828;
	}
	#cardyemain-buju .el-button--primary:hover{
		background-color:#ffe300;
		border-color:#ffe300;	
	}
	.shaixuan-buju{
		margin-bottom: 30px;
	}
	.card-box:nth-child(5n+0){
		margin-right: 0px !important;
	} 
	.fenye-container{
		text-align: center;
	}
	.el-pagination.is-background .el-pager li:not(.disabled).active{
		background-color:#ffe300 !important;
		color: #282828 !important;
	}
	.el-pager li{
		min-width: 35px !important;
		height: 33px !important;
		font-size: 14px !important;
	}
</style>