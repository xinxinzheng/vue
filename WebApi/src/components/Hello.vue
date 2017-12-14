<template>
  <div class="hello">
    <gd-select v-model="query" @on-change="handleChange">
      <gd-option v-for="item in items" :key='item.value' :value="item.value">{{item.label}}</gd-option>
    </gd-select>
  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      query:'',
      items:[{
        value:'1234',
        lable:'test'
      },
      {
        value:'122134',
        lable:'te21st'
      }],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    handleChange(){

    }
  },
  components:{
    gdSelect,
    gdOption
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
