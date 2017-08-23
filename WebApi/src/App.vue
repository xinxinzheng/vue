<template>
  <div id="myApp">
  	<header-temp></header-temp>
    <body-temp></body-temp>
  </div>
</template>
<script>
  import headerTemp from './components/common/HeaderNav'
  import bodyTemp from './components/common/body'
  export default {
    name: 'myApp',
    components: {
      headerTemp,
      bodyTemp
    }
  }
</script>