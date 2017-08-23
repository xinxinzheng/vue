<template>
	 <el-col :span="8">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
      <el-submenu :index="item.title" v-for="item in navData">
        <template slot="title">{{item.title}}</template>
        <el-menu-item :index="row" v-for="row in item.child" >{{row}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-col>
</template>
<script>
  import Vue from 'vue' 
  export default {
  	props:['navData'],
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>