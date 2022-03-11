<template>
  <div class="card">
    <div class="card-box" v-for="(item,index) in datalist">
      <div class="card-img">
        <router-link :to="item.url" class="card-img-hover">
           <img :src="item.imgurl">
        </router-link>  
      </div>        
      <div class="card-info">
        <p class="card-info-title">
          <router-link to="#" class="title-content">
            {{item.name}}
          </router-link>  
        </p>
        <p class="card-info-type">
            {{item.shuyu}}
        </p>  
        <p class="card-info-item">
          <span class="iconfont icon-chakan">
            {{item.chakan}}
          </span>           
          <span class="iconfont icon-31dianzan">
            {{item.dianzan}}    
          </span>   
        </p>  
      </div>        
      <div class="card-item">
      <p>{{item.biaoyu}}</p>        
      </div>        
    </div>    
  </div>
</template>
<script type="text/javascript">	
	export default{
    props:['datalist'],
		data(){
			return{
			}
		},

		methods:{
		},
    mounted(){
      console.log(this.shetuanlist);
    }
	};
</script>
<style type="text/css">
  .card-item{
  	padding:0 16px;
  	align-items: center;
  	height: 30px;
  	line-height: 30px;
  	position: relative;
  }
	@media screen and (max-width: 1600px){
		.card-box{
			width:210px;
		}		
	}
  .card{
    overflow: hidden;
  }
	.card-box{
		float: left;
		position: relative;
		background-color: #fff;
		border-radius: 4px;
		margin:0 35px 20px 0;
	}
	@media screen and (max-width: 1600px){
		.card-box .card-img, .card-box .card-img a img{
			width:210px;
			height:158px;
		}		
	}

  .card-box .card-img{
 		position: relative;
 		border-radius: 4px 4px 0 0;
  }
  .card-img-hover img:hover{
  	opacity: .8;
  }
  .card-box .card-img a img{
  	vertical-align: middle;
  	border:none;
  	border-radius: 4px 4px 0 0;
  	transition: .1s linear;
  	display: block;
  }
  .card-box .card-info{
  	border-bottom:1px solid #eee;
  }
  .card-box .card-info{
  	padding:11px 16px 13px;
  	height: 75px;
  	position: relative;
  	box-sizing: content-box;
  }
  .card-box .card-info .card-info-title{
  	margin-bottom:1px;
  	position:relative;
  	height: 20px;
  	line-height: 20px;
  	white-space: nowrap;
  	text-overflow: ellipsis;
  	overflow: hidden;
  }
  .card-box .card-info .card-info-title .title-content{
  	width: 178px;
  	display: inline-block;
  	float: left;
  	vertical-align: center;
  	white-space: nowrap;
  	text-overflow: ellipsis;
  	overflow: hidden;
  }
  .card-box .card-info .card-info-title a{
  	font-size: 14px;
  	color:#333;
  }
  .card-box .card-info .card-info-type{
  	font-size: 12px;
  	color:#bbb;
  	margin-bottom: 17px;
  	height: 18px;
  }
  .card-box .card-info .card-info-item{
  	font-size: 12px ;
  	color: #bbb;
  }
  .card-box .card-info .card-info-item .iconfont{
  	font-size: 12px ;
  }
	.card-box .card-info .card-info-item span[class^=iconfont]{
		margin-right:7px;
		cursor: default;
	}
</style>