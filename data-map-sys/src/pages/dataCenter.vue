<template>
<div id="data-center">
  <el-container>
    <el-header>
      <navbar></navbar>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <!-- <myfooter></myfooter> -->
    </el-footer>
  </el-container>
</div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: "",
  data: () => ({

  }),
  components: {
    'navbar': Navbar,
    'myfooter': Footer
  }
}
</script>
<style lang="scss" scoped>
  .el-header{
    background-color: #008CD7;
  }
</style>
