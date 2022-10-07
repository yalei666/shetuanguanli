<template>
	<div id="login-buju">
		<div class="passcard-box">
			<div class="passcard-nav">
				<img src="../../assets/img/shelian.png">	
				通行证	
				<router-link to="/index/index" class="login-right-subnav main-link-color">
					返回首页
				</router-link>	
			</div>	
			<div class="passcon">
				<h2 class="passmail-title main-bg-color">登陆</h2>
				<div id="form">
					<div class="retrieve-pass-box z-p-covers">
						<div class="retrie-center" id="inputparent">
							<el-form ref="xuehaoform" :model="xuehaoform" label-width="85px">
								<el-form-item label="学号">
									<el-input v-model="xuehaoform.xuehao"></el-input>	
								</el-form-item>
								<el-form-item label="密码">
									<el-input v-model="xuehaoform.password" type="password"></el-input>	
								</el-form-item>													
							</el-form>
							<el-button plain style="margin-bottom:20px" @click="handleLogin">登陆</el-button>				
							<div class="auto-login">
								<div class="login-links">
									<router-link to="">
										忘记密码
									</router-link>
									&nbsp;|&nbsp;
									<router-link to="/register">
										注册
									</router-link>	
								</div>		
							</div>								
						</div>		
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
				xuehaoform:{
					xuehao:'',
					password:'',			
				}
			}
		},
		methods:{
			handleLogin(){
				this.$store.dispatch('LoginByAccount',this.xuehaoform).then(()=>{
          			console.log('登陆成功即将跳转--------')
          			this.$router.push({ path: '/' });					
				}).catch(err=>{
					console.log('oo',err);
				})
			}
		}
	};
</script>
<style type="text/css">

	.el-button.is-plain:hover{
		background:#ffe300 !important;
		border-color:#ffe300 !important;
		color: black !important;
	}
	.login-links{
		color: #999999;
		float: right;
	}
	.retrie-center .el-form-item__label{
		text-align: justify;
		text-align-last: justify;
		padding:0 20px 0 5px;
		background-color: #f4f4f4;
	}

	.retrie-center .el-button{
		margin-top: 30px;
		width: 333px;
		background:#f4f4f4;
	}
	.retrie-center .el-input__inner{
		border:1px solid #f4f4f4;
		background-color: #f4f4f4;
	}
	.retrie-center .el-input__inner:focus{
		border:1px solid #dddddd;
		background-color: #fff;
	}
	.passcon .retrieve-pass-box .retrie-center{
		width: 336px;	
	}

	.passcon .retrieve-pass-box{
		padding: 40px 0 40px;
		border-top: none;
	}
	.passcon .retrieve-pass-box{
		border-bottom-left-radius:4px;	
		border-bottom-right-radius:4px;
	}
	.main-bg-color{
		background: #ffe300;
		color: #333333;
	}
	.passcon .passmail-title{
		height: 76px;
		line-height: 76px;
		font-size: 24px;
		text-align: center;
		font-weight: normal;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		margin: 0;
	}
	.passcon{
		min-height: 394px;
		margin: 30px 0;
		-webkit-border-radius:4px;
		background: #ffffff;
	}
	body{
		background:#f4f4f4;
		height: 100%;
	}
	.passcard-box{
		width: 900px;
		padding-top: 48px;
	}	
	.passcard-box, .passcon .retrieve-pass-box .retrie-center{
		margin: 0 auto;
	}
	.passcard-nav{
		color: #444444;
	}
	.passcard-nav, .login-passcard-nav{
		padding-top:40px;
		line-height: 50px;
		font-size: 24px; 
	}
	.passcard-nav img{
		height: 50px;
		float: left;
		margin-right: 22px;
	}
	.passcard-nav .login-right-subnav{
		margin-left: 25px;
		font-size: 14px;
		float: right;
	}
	.main-link-color{
		color: #d36f16;
	}
	.passcard-nav .login-nav{
		color: #666666;
	}
	.passcard-nav .login-nav:after{
		content:"";
		display: inline-block;
		vertical-align: middle;
		zoom:1;
		width: 1px;
		height: 14px;
		margin-top:-4px;
		background:#666666;
		margin-left: 20px;
	}
</style>