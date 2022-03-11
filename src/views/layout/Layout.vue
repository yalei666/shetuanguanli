<template>
	<div class="app-wrapper">
		<div class="header-wrapper">
			<Navbar/>
		</div>		
		<div class="main-wrapper">
			<App-main/>
		</div>
		<div class="footer-wrapper">
			<Footer/>
		</div>
	</div>	
</template>
<script type="text/javascript">
	import {Navbar,AppMain,Footer} from './';
	export default{
		name: 'layout',
		components:{
			Navbar,
			AppMain,
			Footer
		}
	};
</script>
<style type="text/css">
	.header-wrapper{
		font-weight: 400;
		width: 100%;
		z-index: 6;
		display: block;
		background-color:#ffe300;	}
	.main-wrapper{
		width: 100%;
	}	
</style>
