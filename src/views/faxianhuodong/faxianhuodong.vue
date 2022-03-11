<template>
	<div id="faxianhuodong">
		<cardtemian :datalistarr="shetuanlistarr"></cardtemian>	
	</div>
</template>
<script type="text/javascript">
	import cardtemian  from '../../components/cardyemian/cardyemian.vue'
	export default{
		data(){
			return{
				shetuanlistarr:[
					{imgurl:require("../../assets/img/cardimg.jpg"),name:'青年志愿者协会',shuyu:'院学生会',chakan:12,dianzan:23,biaoyu:"风里雨里，社联等你"},
					{imgurl:require("../../assets/img/cardimg.jpg"),name:'青年志愿者协会',shuyu:'院学生会',chakan:12,dianzan:23,biaoyu:"风里雨里，社联等你"},
					{imgurl:require("../../assets/img/cardimg.jpg"),name:'青年志愿者协会',shuyu:'院学生会',chakan:12,dianzan:23,biaoyu:"风里雨里，社联等你"},
					{imgurl:require("../../assets/img/cardimg.jpg"),name:'青年志愿者协会',shuyu:'院学生会',chakan:12,dianzan:23,biaoyu:"风里雨里，社联等你"},
					{imgurl:require("../../assets/img/cardimg.jpg"),name:'青年志愿者协会',shuyu:'院学生会',chakan:12,dianzan:23,biaoyu:"风里雨里，社联等你"},
					{imgurl:require("../../assets/img/cardimg.jpg"),name:'青年志愿者协会',shuyu:'院学生会',chakan:12,dianzan:23,biaoyu:"风里雨里，社联等你"},
					{imgurl:require("../../assets/img/cardimg.jpg"),name:'青年志愿者协会',shuyu:'院学生会',chakan:12,dianzan:23,biaoyu:"风里雨里，社联等你"},
					{imgurl:require("../../assets/img/cardimg.jpg"),name:'青年志愿者协会',shuyu:'院学生会',chakan:12,dianzan:23,biaoyu:"风里雨里，社联等你"},
					{imgurl:require("../../assets/img/cardimg.jpg"),name:'青年志愿者协会',shuyu:'院学生会',chakan:12,dianzan:23,biaoyu:"风里雨里，社联等你"},
					{imgurl:require("../../assets/img/cardimg.jpg"),name:'青年志愿者协会',shuyu:'院学生会',chakan:12,dianzan:23,biaoyu:"风里雨里，社联等你"},					
				]				
			}

		},
		components:{cardtemian},
		methods:{

		}
	};
</script>
<style type="text/css">
	
</style>