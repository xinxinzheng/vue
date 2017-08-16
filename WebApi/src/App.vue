<template>
  <div id="myApp">
  	<header-temp></header-temp>
    <body-temp></body-temp>
  </div>
</template>
<script>
  import headerTemp from './components/HeaderNav'
  import bodyTemp from './components/body'
  export default {
    name: 'myApp',
    components: {
      headerTemp,
      bodyTemp
    }
  }
</script>