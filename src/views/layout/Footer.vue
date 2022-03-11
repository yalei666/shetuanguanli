<template>
			<div class="foot-buju">
			<div class="foot-container">
				<div class="footerl fl">
					<div class="xinti">
						<p>版权所有 &nbsp;****大学 &nbsp;**学院社团联合会</p>				
						<p>© 2022 **大学**学院社团联合会  All Rights Reserved. </p>
						<p>地址：**省**市**大街**号 | 邮编：0500**</p>
					</div>								
				</div>						
				<div class="footerr fr">
					<div class="imgone">
						<img :src="require('./../../assets/img/wb.jpg')">
						<p>扫描关注官方微博</p>
					</div>	
					<div class="imgone">
						<img :src="require('./../../assets/img/wb.jpg')">
						<p>扫描关注官方微博</p>
					</div>										
				</div>
			</div>				
		</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				
			}
		}
	};
</script>
<style type="text/css">
	
.foot-buju{
	height: 170px;
	background:#282828;
	width: 100%;
	min-width: 1200px;
}
.foot-container{
	height: 140px;
	margin:0 auto;
	padding-top: 20px;
	width: 1200px;
}
.footerl{
	width: 700px;
	height: 100px;
	float: left;
}
.footerr{
	width: 370px;
	float: right;
	height: 100px;
}
</style>
