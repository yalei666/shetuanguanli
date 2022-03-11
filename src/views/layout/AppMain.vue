<template>
	<section class="app-main" style="min-height:100%">
        <transition name="fade" mode="out-in">
            <router-view :key="key"></router-view>
        </transition>		
	</section>	
</template>
<script type="text/javascript">
	export default{
		name:'AppMain',
		components:{

		},
    computed: {
      key() {
        return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
      }
    }		
	};	
</script>
<style type="text/css">
	.app-main{
		position: relative;
		width: 100%;	
	}	
</style>