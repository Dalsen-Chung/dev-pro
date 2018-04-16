<template>
<div id="data-center">
  <navbar></navbar>
  <router-view></router-view>
  <myfooter></myfooter>
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
</style>
