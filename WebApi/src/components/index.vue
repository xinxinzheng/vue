<template>
  <el-carousel :interval="600000" type="card" height="600px" id="main">
    <el-carousel-item v-for="item in listData" :key="item.title">
      <el-row>
		<el-card :body-style="{ padding: '0px' }">
		    <div class="el-card-top">
          <img :src="item.logo" class="image">  
        </div>
		    <div class="el-card-bottom">
		        <span class="text-span">{{item.desc}}</span>
		        <div class="bottom clearfix">
		          <time class="el-card-bottom-title">{{item.title}}</time>
		          <el-button type="text" class="button">快速开始</el-button>
		        </div>
		    </div>
		</el-card>
	</el-row>
    </el-carousel-item>
  </el-carousel>
</template>

<style lang="scss">
  .el-card-top{
    img{
      height: 300px;
    }
  }
  .el-card-bottom{
    height: 300px;
    overflow: hidden;
    padding:15px 10px;
    .text-span{
      display: block;
      line-height: 30px;
      overflow-y:hidden;
      height: 200px; 
    }
  }
  .el-card-bottom-title {
    font-size: 20px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .button {
    padding: 0;
    float: right;
  }
  .image {
    width: 100%;
    display: block;
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  } 
  .clearfix:after {
      clear: both
  }
  .el-carousel{
  	width: 80%;
  	margin: 50px auto;
  }
  .el-carousel__item{
    color: #475669;
    font-size: 14px;
    opacity: 1;
    line-height: 200px;
    margin: 0;
    background-color: #99a9bf;
  }  
</style>
<script>
import Vue from 'vue'
export default {
  name:'main',
  data:function(){
    return {
      listData: Vue.config.WebData
    };
  }
}
</script>