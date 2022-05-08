<template>
	<div id="register-buju">
		<div class="passcard-box">
			<div class="passcard-nav">
				<img src="../../assets/img/shelian.png">	
				通行证	
				<router-link to="/index/index" class="login-right-subnav main-link-color">
					返回首页
				</router-link>	
				<span class="login-right-subnav login-nav">
					已有账号,
					<router-link to="/login" class=" main-link-color">
						马上登陆
					</router-link>						
				</span>		
			</div>	
			<div class="passcon">
				<h2 class="passmail-title main-bg-color">注册会员</h2>
				<div id="form">
					<div class="retrieve-pass-box z-p-covers">
						<div class="retrie-center" id="inputparent">
							<el-form 
								ref="xuehaoform" 
								:model="xuehaoformdata" 
								:rules="resultrules"
								label-width="85px">
								<el-form-item label="学号" prop="xuehao">
									<el-input v-model.number="xuehaoformdata.xuehao"></el-input>	
								</el-form-item>
								<el-form-item label="密码" prop="password">
									<el-input v-model="xuehaoformdata.password" type="password">
									</el-input>	
								</el-form-item>
								<el-form-item label="确认密码" prop="conpwd">
									<el-input v-model="xuehaoformdata.conpwd" type="password"></el-input>	
								</el-form-item>																
							</el-form>
							<el-button plain @click="submitForm('xuehaoform')">注册</el-button>					
						</div>		
					</div>
				</div>
			</div>	
		</div>
	</div>	
</template>
<script type="text/javascript">
	import {global} from '../../global/global';
	import {api} from '../../global/api';
	export default{
		data(){
			const checkage      = (rule, value, callback) => {
				if(!value){
					return callback(new Error('学号不能为空'));
				}
				setTimeout(()=>{
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (String(value).length != 12) {
              callback(new Error('必须输入12位数字'));
            } else {
              callback();
            }
          }					
				},1000)
			};
      const validatePass  = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.xuehaoformdata.conpwd !== '') {
            this.$refs.xuehaoform.validateField('conpwd');
          }
          callback();
        }
      };	
      const validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.xuehaoformdata.password){
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }      	
      } 		
			return{
				xuehaoformdata:{
					xuehao:'',
					password:'',
					conpwd:''				
				},
				resultrules:{
					xuehao:[
						{trigger: 'blur', validator: checkage }						
					],
					conpwd:[
						{trigger: 'blur', validator: validatePass2 }	
					],
					password:[
						{trigger: 'blur', validator: validatePass }	
					],										
				}
			}
		},
		methods:{
			submitForm(formname){
				var  that = this;
				this.$refs[formname].validate((valid)=>{
          if (valid) {
            const data = {
              xuehao:       this.xuehaoformdata.xuehao,
              password:     this.xuehaoformdata.password,
             };          	
						global.post(api.zhuce,data,function(res){
							if (res.data.resultCode == 1) {
				        that.$message({
				          message: '恭喜你，注册成功,请完善个人信息',
				          type: 'success',
				        }); 
								that.$store.dispatch('LoginByAccount',data).then(()=>{
				          that.$router.push({ path: '/wanshanxinxi' });					
								}).catch(err=>{
									console.log('oo',err);
								})		
							}
						},function(rej){
							console.log(rej);
						})								            
          } else {
		        this.$message({
		          message: '请重新输入注册信息',
		          type: 'error',
		          duration:0,
		          showClose:true
		        });        		  	
          }							
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