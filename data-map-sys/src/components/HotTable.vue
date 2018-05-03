<template>
<div class="hotTable">
  <div class="panel-title">
    <span>{{title}}</span>
    <i class="iconfont icon-record"></i>
  </div>
  <el-table :data="tableData" stripe style="width: 100%" height="240px" highlight-current-row>
    <el-table-column v-for="(item,index) in cloumn" :key="index" :prop="item.prop" :label="item.label" align="center">
    </el-table-column>
  </el-table>
</div>
</template>
<script>
export default {
  name: "hotTable",
  data: () => ({
    cloumn: [],
    title : '',
    tableData: [],
    sendCloumn: [{
        label: '发卡日期',
        prop: 'sendCardDate'
      },
      {
        label: '发卡类型',
        prop: 'cardType'
      },
      {
        label: '发卡量',
        prop: 'cardAmount'
      }
    ],
    registCloumn: [{
        label: '注册日期',
        prop: 'registDate'
      },
      {
        label: '客户端',
        prop: 'client'
      },
      {
        label: '注册用户',
        prop: 'userAccount'
      }
    ]
  }),
  props: {
    requestUrl: {
      type: String,
      required: true
    },
    showType: {
      type: String,
      required: true
    }
  },
  methods: {
    init : function (arr) {
      if (this.showType === 'card'){
        this.cloumn = this.sendCloumn;
        this.title = '前十条发卡记录';
        arr.forEach((obj, index) => {
          let tempObj = {};
          tempObj.sendCardDate = obj.sendDate;
          tempObj.cardType = obj.cardType;
          tempObj.cardAmount = obj.amount;
          this.tableData.push(tempObj);
        });
      }else if (this.showType === 'regist'){
        this.cloumn = this.registCloumn;
        this.title = '前十条注册记录';
        arr.forEach((obj, index) => {
          let tempObj = {};
          tempObj.registDate = obj.registDate;
          tempObj.client = obj.os;
          tempObj.userAccount  = obj.name;
          this.tableData.push(tempObj);
        });
      }else{
        throw new Error('未填写表格数据类型字段');
      }
    },
    requestData: function() {
      this.$http.get(this.requestUrl).then((res) => {
        this.init(res.data);
      },(error) => {
        console.log(error)
      })
    }
  },
  mounted() {
    this.requestData();
  }
}
</script>
<style lang="scss" scoped>
.hotTable {
    margin: 20px 5% 15px;
}
.hotTable .panel-title {
    height: 40px;
    margin: 0 20px;
    color: #008CD7;
    font-weight: bold;
}
.hotTable .panel-title span {
    font-size: 18px;
}
.hotTable .iconfont {
    font-size: 20px;
    color: #f7b34d;
}
</style>
