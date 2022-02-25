<template>
	<div class="app-wrapper">
		<div class="header-wrapper">
			<Navbar/>
		</div>		
		<div class="main-wrapper">
			<App-main/>
		</div>
	</div>	
</template>
<script type="text/javascript">
	import {Navbar,AppMain} from './';
	export default{
		name: 'layout',
		components:{
			Navbar,
			AppMain
		}
	};
</script>
<style type="text/css">
	.header-wrapper{
		font-weight: 400;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 6;
		display: block;
		background: #ffe300;
	}
	.main-wrapper{
		width: 100%;
		margin-top: 60px;	
	}	
</style>
