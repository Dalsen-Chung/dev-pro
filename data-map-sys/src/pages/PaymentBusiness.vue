<template>
<div id="payBusiness">
  <el-container>
    <el-header>
      <span class="title">业务概况</span>
    </el-header>
    <el-main>
      <el-tabs :tab-position="tabPosition">

        <el-tab-pane label="总发卡量">
          <div class="card-capacity">
            <div class="card-title">
              <icon name="icCard" :scale="4"></icon>
              <span>总发卡量</span>
            </div>
            <span class="iCountUp">
              <countup
                :startVal="countup.startVal"
                :endVal="countup.endVal" :decimals="countup.decimals"
                :duration="countup.duration" :options="countup.options" />张
            </span>
          </div>
        </el-tab-pane>

        <el-tab-pane label="云卡用户量">
          <div class="card-capacity">
            <div class="card-title">
              <span>云卡用户量</span>
              <icon name="icCard" :scale="4"></icon>
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane label="卡类型组成">卡类型组成</el-tab-pane>
        <el-tab-pane label="昨日消费金额">昨日消费金额</el-tab-pane>
        <el-tab-pane label="昨日充值金额">昨日充值金额</el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</div>
</template>

<script>
import ICountUp from 'vue-countup-v2'
export default {
  name: "PaymentBusiness",
  components: {
    'countup': ICountUp
  },
  data: () => ({
    tabPosition: 'left',
    title: '业务概况',
    countup: {
      startVal: 0,
      endVal: 120500,
      decimals: 0,
      duration: 1,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      }
    }
  }),
  methods: {

  }
}
</script>

<style lang="scss" scoped>
#payBusiness .title {
    line-height: 60px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    display: block;
    color: #008CD7;
}
#payBusiness .card-capacity .iCountUp {
    display: block;
    text-align: center;
    font-size: 5em;
    margin: 0;
    color: #4d63bc;
}
#payBusiness .card-capacity .card-title {
    height: 40px;
    margin: 0 50px;
    color: #008CD7;
    font-weight: bold;
}
#payBusiness .card-capacity .card-title span {
    font-size: 20px;
}
</style>
