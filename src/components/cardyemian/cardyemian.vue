<template>
	<div id="cardyemain-buju">
		<div class="card-buju">
			<div class="card-container">
				<card :datalist="listData"></card>	
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import card  from '../card/card.vue' 
	import {global} from '../../global/global';
	import {api} from '../../global/api';		
	export default{
		components:{card},
		props:['zizujianlist'],
		data(){
			return{
        		listData:[],    						
			}
		},
		methods:{						
		},
		mounted(){
		},
		watch:{
			zizujianlist(newval){
				this.listData = newval
			}			
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