<template>
<div class="counter">
  <button type="button" name="button" @click="addup">add</button>
  <countup :startVal="startVal" :endVal="endVal" :decimals="decimals" :duration="duration" :options="{
      useEasing: true,useGrouping: true,separator: ',',decimal: '.',prefix: '',suffix: suffix
    }" />
</div>
</template>
<script>
import ICountUp from 'vue-countup-v2'
export default {
  name: "",
  components: {
    'countup': ICountUp
  },
  data: () => ({
    startVal: 0,      //动画从0开始
    duration: 1,      //动画持续时间
    endVal: 0,        //定义结束量
  }),
  props: {
    getDataUrl: {     //获取请求地址，在mounted时请求发卡量
      type: String,
      required: true
    },
    decimals: {      //精确到小数点后几位,默认为0
      type: Number,
      default: 0
    },
    suffix: {        //数字后缀
      type: String,
      default: ''
    }
  },
  mounted() {
    this.endVal = 1257000;
  },
  methods: {
    addup() {
      this.endVal += 1000;
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
