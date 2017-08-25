<template>
	<div class="flex-row flex1">
		<side-bar :navData='sidebarData'></side-bar>
		<div>
			<content></content>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import sideBar from '../common/sidebar'
	import content from './content'
	export default{
		data(){
			return {
				sidebarData:Vue.config.AngularNav
			}
		},
		components:{
			sideBar,
			content
		}

	}
</script>