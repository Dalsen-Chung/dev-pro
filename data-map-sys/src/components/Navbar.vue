<template>
<div id="navbar">
  <div class="navbar-title">
    <img src="../assets/dgt-logo.png" alt="" ondragstart="return false">
    <span>数据中心</span>
  </div>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    text-color="#fafafa"
    active-text-color="#f7b34d"
    background-color="#008CD7"
    router
    >
    <el-menu-item index="payment-business">支付业务分析</el-menu-item>
    <el-menu-item index="smart-city">智慧城市业务分析</el-menu-item>
    <el-menu-item index="idc-business">IDC业务分析</el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  name: "",
  data: () => ({
    activeIndex : 'payment-business'
  })
}
</script>

<style lang="scss" scoped>
  #navbar{
    text-align: center;
    background-color: #008CD7;
    height: 60px;
  }
  .navbar-title{
    display: inline-block;
    float: left;
    height: inherit;
    line-height: 60px;
    margin-left: 50px;
  }
  .navbar-title img {
    height: 40px;
    vertical-align: middle;
    margin-right: 30px;
  }
  .navbar-title span{
    color: #F7A727;
    font-weight: bold;
    font-size: 19px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  }
  #navbar ul{
    display: inline-block;
    border-bottom: none;
    float: left;
    margin-left: 15%;
  }
  #navbar ul li{
    font-weight: bold;
  }
</style>
