<template>
	<div class="index-container">
		<div class="lunbo-container">
		  <el-carousel  direction="horizontal" :autoplay="true" >
		    <el-carousel-item v-for="(item,index) in imgurlArr" :key="index">
		    	<img :src="item.url">
		    </el-carousel-item>
		  </el-carousel>	
		</div>
		<div class="list-buju">
			<div class="list-container">
				<div class="first-row-buju">
					<div class="first-row-container">
						<div class="shetuannews">
							<div class="newstitle">
								<div class="newsbiaoti">学院新闻</div>									
								<div class="newsmore">
									<i class="el-icon-circle-plus"></i>更多
								</div>
							</div>
							<div class="newslist">
								<ul>
									<li v-for="item in news">
										<em>{{item.riqi}}</em>
										<div>{{item.biaoti}}</div>
									</li>
								</ul>								
							</div>						
						</div>
						<div class="huodonggonggao">
							<div class="newstitle">
								<div class="newsbiaoti">学院新闻</div>									
								<div class="newsmore">
									<i class="el-icon-circle-plus"></i>更多
								</div>
							</div>
							<div class="newslist">
								<ul>
									<li v-for="item in news">
										<em>{{item.riqi}}</em>
										<div>{{item.biaoti}}</div>
									</li>
								</ul>								
							</div>						
						</div>						
					</div>
				</div>
				<div class="second-row-buju">
					<div class="second-row-container">
						<div class="huodongimg">
							<div class="newstitle">
								<div class="newsbiaoti">学院新闻</div>									
								<div class="newsmore">
									<i class="el-icon-circle-plus"></i>更多
								</div>
							</div>
							<div class="list-content">
								<div id="c01" style="position:relative">
									<div class="neirong-set">
										<div class="neirong" v-for="(item,index) in listArr" :key="index" >
											<div class="neironglf">
												<img :src="item.url" style="width:142px;height:73px;">		
											</div>
											<div class="neirongrg">
												<h3>{{item.biaoti}}</h3>
												<p>{{item.neirong}}</p>
											</div>
										</div>
									</div>									
								</div>		
							</div>
						</div>
						<div class="huodongimg"></div>
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
				imgurlArr:[
					{ url: require('./../../assets/img/lunbo1.jpg') },
        	{ url: require('./../../assets/img/lunbo2.jpg') },
					{ url: require('./../../assets/img/lunbo1.jpg') },
        	{ url: require('./../../assets/img/lunbo2.jpg') },        	
        ],
        news:[
        	{biaoti:"学院领导慰问春节坚守工作一线教职员工",riqi:"2022-01-22"},
        	{biaoti:"学院领导慰问春节坚守工作一线教职员工",riqi:"2022-01-22"},
        	{biaoti:"学院领导慰问春节坚守工作一线教职员工",riqi:"2022-01-22"},
        	{biaoti:"学院领导慰问春节坚守工作一线教职员工",riqi:"2022-01-22"},
        	{biaoti:"学院领导慰问春节坚守工作一线教职员工",riqi:"2022-01-22"},
        	{biaoti:"学院领导慰问春节坚守工作一线教职员工",riqi:"2022-01-22"},
        ],
        listArr:[
        	{url: require('./../../assets/img/lunbo1.jpg'),biaoti:"学院领导慰问春节坚守工作一线教职员工",riqi:"2022-01-22",neirong:"1月29日，正值农历春节即将到来之际，学院领导马斌、刘风长、张进良、张金桐率领院办、安全工作部、南校区和西校区后勤保障部负责人，"},
        	 {url: require('./../../assets/img/lunbo1.jpg'),biaoti:"学院领导慰问春节坚守工作一线教职员工",riqi:"2022-01-22",neirong:"1月29日，正值农历春节即将到来之际，学院领导马斌、刘风长、张进良、张金桐率领院办、安全工作部、南校区和西校区后勤保障部负责人，"},
        	 {url: require('./../../assets/img/lunbo1.jpg'),biaoti:"学院领导慰问春节坚守工作一线教职员工",riqi:"2022-01-22",neirong:"1月29日，正值农历春节即将到来之际，学院领导马斌、刘风长、张进良、张金桐率领院办、安全工作部、南校区和西校区后勤保障部负责人，"}        	
        ]				
			}
		},
		methods:{
		
		},
	};				
</script>
<style type="text/css">
.index-container{
	position: relative;
	width: 100%;
}	
.lunbo-container{
	margin:0 auto;
	max-width:1130px;
	padding:20px 0 10px 0;
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
.list-container{
	margin:0 auto;
	max-width:1130px;
	height:800px;
	background-color: #fff;
}
.first-row-buju,.second-row-buju{
	height: auto;
	padding:20px 20px 0px 20px;;
}
.first-row-container,.second-row-container{
	border-bottom: 1px solid #c9c9c9;
	height: 330px;
	padding-bottom: 30px;
	box-sizing: content-box;
}
.list-buju{
	background-color: #ebebed	;
	margin-top: 15px;
	padding-top: 5px;
}
.newstitle{
	width: 100%;
	height: 40px;
	border-bottom: 1px solid #c9c9c9;
}
.shetuannews,.huodongimg{
	width: 560px;
	height: 330px;
	float: left;
}
.newsbiaoti{
	min-width: 150px;
	font-size: 20px;
	line-height: 40px;
	float: left;
}
.newsmore{
	width: 50px;
	line-height: 40px;
	height: 40px;
	float:right;
	text-align: right;
}
.huodonggonggao{
	float: right;
	width: 520px;
	height: 330px;
}
.newslist{
	width: 100%;
	height: auto;
	padding-top: 20px;
}
ul,li{
	list-style-type:none;
}
ul{
	padding: 0 !important;
	margin:0 !important;
}
.list-buju li{
	line-height: 30px;
	height:  	30px;
	margin-bottom: 15px;
	font-size: 14px;
}
.list-buju li em{
	height: 30px;
	line-height: 30px;
	float:right;
	font-weight: normal;
	font-style: normal;
}
.neirong-set{
	width: 100%;
	height: auto;
	padding-top: 5px;
}
.neirong{
	height: 70px;
	width: 100%;
	margin-top: 20px;
}
.neironglf{
	width: 135px;
	height: 70px;
	float: left;
}
.neirongrg{
	width: 400px;
	float: right;
	height: 70px;
}
.neirongrg h3{
	font-size: 12px;
	font-weight: normal;
	text-align: normal;
	line-height: 25px;
	color:rgb(153,153,153);

}
h3,p{
		padding:0;
	margin:0;
}
.neirongrg p{
	line-height: 20px;
	padding-top: 5px;
	font-size: 12px;
}
</style>
