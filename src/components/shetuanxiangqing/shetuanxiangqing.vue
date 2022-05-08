<template>
	<div id="shetuanxiangqing-buju">
		<div class="shetuanxiangqing-container">
			<div class="shetuandetails-wrap border-bottom border-top">
				<div class="shetuandetails-box-wrap clear overflow">
					<div class="left-details left">
						<div class="details-contitle-box">
							<h2>
								青年志愿者协会
							</h2>
							<p class="title-time">
								成立于2021年9月
							</p>
							<div class="shetuan-head-box">
								<div class="head-left">
									<span class="head-index">
										<span>
											院学生会
										</span>
									</span>		
								</div>
								<div class="head-right">
									<span class="head-data-show">
										<span class="iconfont icon-chakan see vertical-line">
											23		
										</span>				
										<span class="iconfont icon-31dianzan see">
											23
										</span>				
									</span>
								</div>
							</div>
						</div>		
					</div>	
					<div class="right-details border-left">
						<div class="avatar-container-80">
							<span class="avater">
								<img src="../../assets/img/touxiang.jpg">
							</span>
						</div>				
						<div class="shetuan-info">
							<p class="shetuan-info-biaoyu">
								<span class="biaoyu-content">
									风里雨里，社团等你！
								</span>
							</p>
							<div class="btn-area flex between">
								<el-button type="primary">加入社团</el-button>	
								<el-button>
									<span class="iconfont icon-31dianzan see"></span>
									点赞
								</el-button>
							</div>	
						</div>		
					</div>			
				</div>				
			</div>
			<div class="shetuandetails-content">
				<div class="shetuancontent-wrap">
					<div class="shetuan-center-con">
						<div class="atricel-text">
							<p class="txt-con">
								"文字文字文字文字文字文字文字文字"	
								<br>
								"文字文字文字文字文字文字文字文字"	
								<br>
								"文字文字文字文字文字文字文字文字"	
								<br>
								"文字文字文字文字文字文字文字文字"	
								<br>
							</p>
						</div>
						<div class="shetuan-show-box">
							<div class="reveal-work-wrap">
								<div class="photo-information-content">
									<img src="../../assets/img/lunbo1.jpg">					
								</div>
								<div class="photo-information-content">
									<img src="../../assets/img/lunbo1.jpg">					
								</div>											
							</div>		
						</div>		
					</div>		
				</div>
				<div class="recommend-box">
					<div class="recommend-works">
						<span class="iconfont icon-31dianzan font"></span>
						23									
					</div>		
				</div>		
			</div>		
		</div>	
		<div class="is-offset-fixed-wrap" style="left:0px;overflow:visible" v-show="dingbushow">
			<div class="follow-box flex-between">
				<div>
					<div class="flex items-center">
						<span class="follow-box-font">青年志愿者协会</span>				
					</div>
				</div>
				<div class="flex items-center p-relative">
					<div class="avatar-container-30">
						<span class="showMemberCard">
							<img src="../../assets/img/touxiang.jpg">
						</span>
					</div>
					<div class="js-project-focus-btn ml-20">
						<el-button class="buttonhover" type="primary">加入</el-button>		
					</div>			
				</div>		
			</div>				
		</div>
	</div>	
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				dingbushow:false,
			}
		},
		mounted(){
			window.addEventListener('scroll', this.handleScroll)
		},
		methods:{
			handleScroll(){
				console.log(document.documentElement.scrollTop)
				if(document.documentElement.scrollTop>=200){
					this.dingbushow  = true;
				}else{
					this.dingbushow  = false;
				}
			}
		},		
	};
</script>
<style type="text/css">
	.shetuandetails-wrap{
		background-color: #fff;
	}
	#shetuanxiangqing-buju{
		margin: 5px 0px;
	}
	.border-top{
		border-top: 1px solid #eee;
	}
	.border-bottom{
		border-bottom: 1px solid #eee;
	}	
	.border-left{
		border-left: 1px solid #eee;
	}
	.clear{
		clear: both;
	}
	.overflow{
		overflow: hidden;
	}
	.left{
		float: left;
	}
	.right{
		float: right;
	}
	@media screen and (max-width: 1600px){
		.shetuandetails-box-wrap{
			width: 1130px;
			margin: 0 auto;
		}
		.left-details{
			width: 779px;
		}	
	}
	.details-contitle-box{
		padding: 13px 30px 20px 0;
	}
	.details-contitle-box h2{
		color:#333;
		font-size: 24px;
		font-weight: 400;
		display: inline-block;
		margin: 0;
		padding: 0;
	}
	.details-contitle-box .title-time{
		padding-top:8px;
		font-size:14px;
		color: #bbb; 
	}
	.shetuan-head-box{
		padding-top: 9px;
		overflow: hidden;
	}
	.shetuan-head-box .head-left{
		float: left;
	}
	.shetuan-head-box .head-index{
		display: inline-block;
		vertical-align: middle;
		zoom:1;
	}
	.shetuan-head-box .head-index{
		font-size:14px;
		color: #bbb;
	}
	.shetuan-head-box .head-right{
		float: right;
		overflow: hidden;
	}
	.shetuan-head-box .head-data-show{
		float: right;
		color: #bbb;
	}
	.head-data-show .see{
		padding-left: 27px;
		padding-right: 28px;
	}
	.head-data-show .vertical-line{
		border-right: 1px solid #f2f2f2;
	}
	.right-details{
		width: 320px;
		float: left;
		padding: 15px 0px 20px 30px;
		overflow: inherit;
		background-color: #fff;
		box-sizing:content-box;
	}
	.avatar-container-80{
		position: relative;
		width: 80px;
	}
	.right-details .avater{
		margin-bottom: 0;
		float: left;
		margin-top: 9px;
	}
	.right-details .avater img{
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}
	.right-details .shetuan-info{
		float: left;
		width: 220px;
		margin-left: 20px;
		position: relative;
	}
	.right-details .shetuan-info .biaoyu-content{
		color: #444;
		font-size: 16px;
		font-weight: 600;
		vertical-align: middle;
	}
	.between{
		-webkit-box-pack:justify;
		justify-content: space-between;
	}
	.flex{
		display: flex;
	}
	.shetuan-info-biaoyu{
		margin-bottom: 15px;
	}
	#shetuanxiangqing-buju .el-button--primary{
		background-color:#ffe300;
		border-color:#ffe300;
		color: #282828;	
	}	
	.shetuancontent-wrap{
		padding-top: 40px;
	}
	@media screen and (max-width: 1600px){
		.shetuan-center-con{
			width: 1130px;
			margin: 0 auto;
		}
	}
	.shetuan-center-con .txt-con{
		width: 800px;
		line-height: 32px;
		font-size:16px;
		word-wrap: break-word;
		margin: 0 auto;
	}
	.shetuan-show-box{
		margin-top:40px; 
	}
	.reveal-work-wrap{
		text-align:center;
	}
	.photo-information-content{
		position: relative;
		display: inline-block;
		vertical-align: middle;
		zoom:1;
	}
	.shetuan-show-box img{
		max-width: 100%;
		cursor: pointer;
	}
	.recommend-box{
		margin: 40px 0;
		position: relative;
	}
	.recommend-works{
		width: 118px;
		height: 72px;
		padding-top: 13px;
		position: relative;
		display: flex;
		flex-flow: column;
		-webkit-box-align:center;
		align-items: center;
		background-color: #ffe300;
		margin: 0 auto;
		border-radius: 50px;
		cursor: pointer;
		box-sizing: border-box;
		-webkit-box-direction:normal;
		-webkit-box-orient:vertical;
	}
	.font{
		font-size:25px !important;
	}
	.is-offset-fixed-wrap{
		height: 56px;
		width: 100%;
		background-color: #fff;
		position: fixed;
		top:0;
		right:0;
		box-shadow:0 1px 4px 0 rgb(0 0 0 /10%);
		z-index: 11;
		transition: height linear .2s;
		box-sizing: border-box;
	}
	@media screen and (max-width: 1600px){
		.follow-box{
			width: 1130px;
			margin: 0 auto;
		}
	}
	.follow-box{
		height: 56px;
	}	
	.flex-between{
		display: flex;
		-webkit-box-align:center;
		align-items: center;
		-webkit-box-pack:justify;
		justify-content: space-between;
	}
	.items-center{
		-webkit-box-align:center;
		align-items: center;
	}
	.flex{
		display: flex;
	}
	.follow-box-font{
		font-weight: 600;
		font-size: 16px;
	}
	.p-relative{
		position: relative;
	}
	#shetuanxiangqing-buju .avatar-container-30{
		width: 30px;
		position: relative;
	}
	.showMemberCard img{
		border-radius: 50%;
		display: block;
	}
	.avatar-container-30 .showMemberCard img{
		width: 30px;
		height: 30px;
	}
	.js-project-focus-btn{
		position: relative;
	}
	.ml-20{
		margin-left: 20px;
	}
	.buttonhover:hover{
		color: #444;
		background:#ffd100 !important;
		border:1px solid #ffd100 !important;
	}
</style>