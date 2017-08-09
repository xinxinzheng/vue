<template>
  <div id="myApp">
  	<header-temp></header-temp>
  	<div class="content flex-row">
  		<div class="left-sidebar flex2">
  			<ul>
  			
  			</ul>
  		</div>
  		<div class="right-content flex8">right</div>
  	</div>
  	<footer class="footer">底部</footer>
  </div>
</template>
<script>
  import headerTemp from './components/HeaderNav'
  export default {
    name: 'myApp',
    components: {
      headerTemp
    }
  }
</script>