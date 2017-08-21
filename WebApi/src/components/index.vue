<template>
  <el-carousel :interval="4000" type="card" height="600px">
    <el-carousel-item v-for="item in 6" :key="item">
      <el-row>
		<el-card :body-style="{ padding: '0px' }">
		    <img src="../assets/img/angular.jpg" class="image">
		    <div style="padding: 14px;">
		        <span>好吃的汉堡</span>
		        <div class="bottom clearfix">
		          <time class="time">{{ 4 }}</time>
		          <el-button type="text" class="button">操作按钮</el-button>
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