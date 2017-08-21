<template>
  <el-carousel :interval="4000" type="card" height="600px">
    <el-carousel-item v-for="item in 6" :key="item">
      <el-row>
		<el-card :body-style="{ padding: '0px' }">
		    <img src="../assets/img/angular.jpg" class="image">
		    <div style="padding: 5px 15px;">
		        <span>AngularJS诞生于2009年，由Misko Hevery 等人创建，后为Google所收购。是一款优秀的前端JS框架，已经被用于Google的多款产品当中。AngularJS有着诸多特性，最为核心的是：MVC、模块化、自动化双向数据绑定、语义化标签、依赖注入等等。</span>
		        <div class="bottom clearfix">
		          <time class="time">2017-08-21 15:05</time>
		          <el-button type="text" class="button">快速开始</el-button>
		        </div>
		    </div>
		</el-card>
	</el-row>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
.time {
    font-size: 13px;
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
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    background-color: #99a9bf;
  }
   
</style>
<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>