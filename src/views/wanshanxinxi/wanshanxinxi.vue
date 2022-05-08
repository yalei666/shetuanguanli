<template>
	<div id="wanshan-buju">
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
				<h2 class="passmail-title main-bg-color">完善个人信息</h2>
				<div id="form">
					<div class="retrieve-pass-box z-p-covers">
						<div class="retrie-center" id="inputparent">
							<el-form 
								ref="xuehaoform" 
								:model="xuehaoform" 
								label-width="85px"
							>
								<el-form-item class="touxianavater">
									<el-upload
									  class="avatar-uploader"
									  action="#"
									  :show-file-list="false"
									  accept="image/png,image/gif,image/jpg,image/jpeg"
									  :on-change="handlefilechange"
									  :auto-upload="false"
									  :limit="1"
									  >
									  <div class="opacity-layer" :class="{hide:xianshi}">修改头像</div>
									  <img src="../../assets/img/touxiang.jpg" class="avatar" @mouseover="xianshi = false" @mouseout="xianshi = true">
									</el-upload>									
								</el-form-item>
								<el-form-item label="真实姓名">
									<el-input v-model="xuehaoform.xingming"></el-input>	
								</el-form-item>
								<el-form-item label="班级">
							  <el-cascader
							    v-model="xuehaoform.banji"
							    :options="options"
							    > 	
							  </el-cascader>
								</el-form-item>																
							</el-form>
							<el-button plain @click="handleupload">确定</el-button>					
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
			return{
				xuehaoform:{
					xingming:'',
					banji:''				
				},
				options: [ {
				          value: 'zujian',
				          label: '组件',
				          children: [{
				            value: 'basic',
				            label: 'Basic',
				            children: [{
				              value: 'layout',
				              label: 'Layout 布局'
				            }, {
				              value: 'color',
				              label: 'Color 色彩'
				            }, {
				              value: 'typography',
				              label: 'Typography 字体'
				            }, {
				              value: 'icon',
				              label: 'Icon 图标'
				            }, {
				              value: 'button',
				              label: 'Button 按钮'
				            }]
				          }, {
				            value: 'form',
				            label: 'Form',
				            children: [{
				              value: 'radio',
				              label: 'Radio 单选框'
				            }, {
				              value: 'checkbox',
				              label: 'Checkbox 多选框'
				            }, {
				              value: 'input',
				              label: 'Input 输入框'
				            }, {
				              value: 'input-number',
				              label: 'InputNumber 计数器'
				            }, {
				              value: 'select',
				              label: 'Select 选择器'
				            }, {
				              value: 'cascader',
				              label: 'Cascader 级联选择器'
				            }, {
				              value: 'switch',
				              label: 'Switch 开关'
				            }, {
				              value: 'slider',
				              label: 'Slider 滑块'
				            }, {
				              value: 'time-picker',
				              label: 'TimePicker 时间选择器'
				            }, {
				              value: 'date-picker',
				              label: 'DatePicker 日期选择器'
				            }, {
				              value: 'datetime-picker',
				              label: 'DateTimePicker 日期时间选择器'
				            }, {
				              value: 'upload',
				              label: 'Upload 上传'
				            }, {
				              value: 'rate',
				              label: 'Rate 评分'
				            }, {
				              value: 'form',
				              label: 'Form 表单'
				            }]
				          }, {
				            value: 'data',
				            label: 'Data',
				            children: [{
				              value: 'table',
				              label: 'Table 表格'
				            }, {
				              value: 'tag',
				              label: 'Tag 标签'
				            }, {
				              value: 'progress',
				              label: 'Progress 进度条'
				            }, {
				              value: 'tree',
				              label: 'Tree 树形控件'
				            }, {
				              value: 'pagination',
				              label: 'Pagination 分页'
				            }, {
				              value: 'badge',
				              label: 'Badge 标记'
				            }]
				          }, {
				            value: 'notice',
				            label: 'Notice',
				            children: [{
				              value: 'alert',
				              label: 'Alert 警告'
				            }, {
				              value: 'loading',
				              label: 'Loading 加载'
				            }, {
				              value: 'message',
				              label: 'Message 消息提示'
				            }, {
				              value: 'message-box',
				              label: 'MessageBox 弹框'
				            }, {
				              value: 'notification',
				              label: 'Notification 通知'
				            }]
				          }, {
				            value: 'navigation',
				            label: 'Navigation',
				            children: [{
				              value: 'menu',
				              label: 'NavMenu 导航菜单'
				            }, {
				              value: 'tabs',
				              label: 'Tabs 标签页'
				            }, {
				              value: 'breadcrumb',
				              label: 'Breadcrumb 面包屑'
				            }, {
				              value: 'dropdown',
				              label: 'Dropdown 下拉菜单'
				            }, {
				              value: 'steps',
				              label: 'Steps 步骤条'
				            }]
				          }, {
				            value: 'others',
				            label: 'Others',
				            children: [{
				              value: 'dialog',
				              label: 'Dialog 对话框'
				            }, {
				              value: 'tooltip',
				              label: 'Tooltip 文字提示'
				            }, {
				              value: 'popover',
				              label: 'Popover 弹出框'
				            }, {
				              value: 'card',
				              label: 'Card 卡片'
				            }, {
				              value: 'carousel',
				              label: 'Carousel 走马灯'
				            }, {
				              value: 'collapse',
				              label: 'Collapse 折叠面板'
				            }]
				          }]
				        }, {
				          value: 'ziyuan',
				          label: '资源',
				          children: [{
				            value: 'axure',
				            label: 'Axure Components'
				          }, {
				            value: 'sketch',
				            label: 'Sketch Templates'
				          }, {
				            value: 'jiaohu',
				            label: '组件交互文档'
				          }]
				}],
				xianshi:true,
				formdata:new FormData()				
			}
		},
		methods:{
			handleupload(){
				this.formdata.append('xingming',this.xuehaoform.xingming);
				this.formdata.append('banji',this.xuehaoform.banji);
				global.post(api.wanshanxinxi,this.formdata,function(res){				
				},function(rej){
				});
			},
			handlefilechange(file,filelist){
				this.formdata.append('file',file.raw);
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
	.hide{
		display: none;
	}
	.opacity-layer{
		width:108px;
		height:108px;
		background: rgba(0,0,0,0.5);
		position: absolute;
		border-radius: 50%;
		color: #ffffff;
		line-height: 120px;
	}
	.touxianavater{
		margin-bottom:0 !important; 
		margin-left:20px;
	}
  .avatar-uploader .el-upload {
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar {
    width: 108px;
    height: 108px;
    display: block;
    border-radius: 50%;
  }
  .el-cascader .el-input__inner{
  	width: 116%;
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