<template>
	<div class="flex-row flex1">
		<side-bar class="flex2" :navData='sidebarData'></side-bar>
		<div class="flex8">
			<router-view ></router-view>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import sideBar from '../sidebar'
	export default{
		data(){
			return {
				sidebarData:Vue.config.AngularNav
			}
		},
		components:{
			sideBar,
		}

	}
</script>