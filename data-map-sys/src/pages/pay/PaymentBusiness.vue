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
            <hot-table requestUrl='xxx' showType='card'></hot-table>
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
            <hot-table requestUrl='xxx' showType='regist'></hot-table>
          </div>
        </el-tab-pane>

        <el-tab-pane label="卡类型组成">
          <div class="warper card-type-composition">
            <div class="panel-title">
              <span>卡类型组成</span>
              <i class="iconfont icon-zuhe"></i>
            </div>
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
export default {
  name: "PaymentBusiness",
  components: {
    'counter': Counter,
    'hot-table': HotTable
  },
  data: () => ({
    tabPosition: 'left', //左边导航列表的配置项
    title: '业务概况',
    countOne: {
      getDataUrl: 'http:xxx',
      suffix: '张'
    },
    countTwo: {
      getDataUrl: 'http:xxx',
      suffix: '位'
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
