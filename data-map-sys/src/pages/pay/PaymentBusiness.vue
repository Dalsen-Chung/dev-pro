<template>
<div id="payBusiness">
  <el-container>
    <el-header>
      <span class="title">业务概况</span>
    </el-header>
    <el-main>
      <el-tabs :tab-position="tabPosition">

        <el-tab-pane label="总发卡量">
          <div class="warper total-card">
            <div class="panel-title">
              <span>总发卡量</span>
              <i class="iconfont icon-ICcard"></i>
            </div>
            <span class="iCountUp">
              <counter v-bind="countOne"></counter>
            </span>
            <hot-table v-bind="tableOne"></hot-table>
          </div>
        </el-tab-pane>

        <el-tab-pane label="云卡用户量">
          <div class="warper total-users">
            <div class="panel-title">
              <span>云卡用户量</span>
              <i class="iconfont icon-users"></i>
            </div>
            <span class="iCountUp">
              <counter v-bind="countTwo"></counter>
            </span>
            <data-to-pie v-bind="appUseDataToPie"></data-to-pie>
            <hot-table v-bind="tableTwo"></hot-table>
          </div>
        </el-tab-pane>

        <el-tab-pane label="卡类型组成">
          <div class="warper card-type-composition">
            <div class="panel-title">
              <span>卡类型组成</span>
              <i class="iconfont icon-zuhe"></i>
            </div>
            <all-cards></all-cards>
            <data-to-pie v-bind="cardTypeAmountDataToPie"></data-to-pie>
          </div>
        </el-tab-pane>

        <el-tab-pane label="昨日消费金额">
          <div class="warper payoff-lastday">
            <div class="panel-title">
              <span>昨日消费金额</span>
              <i class="iconfont icon-total"></i>
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane label="昨日充值金额">
          <div class="warper addup-lastday">
            <div class="panel-title">
              <span>昨日充值金额</span>
              <i class="iconfont icon-addup"></i>
            </div>
          </div>
        </el-tab-pane>

      </el-tabs>
    </el-main>
  </el-container>
</div>
</template>

<script>
import Counter from '@/components/Counter'
import HotTable from '@/components/HotTable'
import DataToPie from '@/components/DataToPie'
import AllCards from '@/components/AllCards'
export default {
  name: "PaymentBusiness",
  components: {
    'counter': Counter,
    'hot-table': HotTable,
    'data-to-pie': DataToPie,
    'all-cards': AllCards
  },
  data: () => ({
    tabPosition: 'left', //左边导航列表的配置项
    title: '业务概况',
    countOne: {
      getDataUrl: 'http://localhost:3003/totalCards',
      suffix: '张'
    },
    countTwo: {
      getDataUrl: 'http://localhost:3003/totalUsers',
      suffix: '位'
    },
    tableOne: {
      requestUrl: 'http://localhost:3003/sendCards',
      showType: 'card'
    },
    tableTwo: {
      requestUrl: 'http://localhost:3003/registors',
      showType: 'regist'
    },
    appUseDataToPie: {
      getDataUrl: 'http://localhost:3003/appUserAmount',
      text: 'APP用户下载量',
      subtext: 'Ios/Android',
      seriesname: '用户类型',
      canvasId: 'appUseDataToPie'
    },
    cardTypeAmountDataToPie: {
      getDataUrl: 'http://localhost:3003/cardTypeAmount',
      text: '卡类型组成',
      subtext: '共11种卡类型',
      seriesname: '卡类型',
      canvasId: 'cardTypeAmountDataToPie'
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
#payBusiness .iconfont {
    font-size: 23px;
    color: #f7b34d;
}
#payBusiness .warper {
    border-radius: 10px;
    padding: 20px;
    margin-left: 20px;
    background-color: #EAEAEA;
    box-shadow: inset -3px -3px 60px 0 #c0c4cc;
}
#payBusiness .iCountUp {
    display: block;
    text-align: center;
    font-size: 5em;
    color: #4d63bc;
}
#payBusiness .panel-title {
    height: 40px;
    margin: 0 50px;
    color: #008CD7;
    font-weight: bold;
}
#payBusiness .panel-title span {
    font-size: 18px;
}
</style>
