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
    tableData: [{
      sendCardDate: '2016-05-02',
      cardType: '王小虎',
      cardAmount: '上海市普陀区金沙江路 1518 弄'
    }, {
      sendCardDate: '2016-05-04',
      cardType: '王小虎',
      cardAmount: '上海市普陀区金沙江路 1517 弄'
    }, {
      sendCardDate: '2016-05-01',
      cardType: '王小虎',
      cardAmount: '上海市普陀区金沙江路 1519 弄'
    }, {
      sendCardDate: '2016-05-03',
      cardType: '王小虎',
      cardAmount: '上海市普陀区金沙江路 1516 弄'
    },{
      sendCardDate: '2016-05-02',
      cardType: '王小虎',
      cardAmount: '上海市普陀区金沙江路 1518 弄'
    }, {
      sendCardDate: '2016-05-04',
      cardType: '王小虎',
      cardAmount: '上海市普陀区金沙江路 1517 弄'
    }, {
      sendCardDate: '2016-05-01',
      cardType: '王小虎',
      cardAmount: '上海市普陀区金沙江路 1519 弄'
    }, {
      sendCardDate: '2016-05-03',
      cardType: '王小虎',
      cardAmount: '上海市普陀区金沙江路 1516 弄'
    }],
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
    init : function () {
      if (this.showType === 'card'){
        this.cloumn = this.sendCloumn;
        this.title = '前十条发卡记录';
      }else if (this.showType === 'regist'){
        this.cloumn = this.registCloumn;
        this.title = '前十条注册记录';
      }else{
        throw new Error('未填写表格数据类型字段');
      }
    },
    requestData: function() {

    }
  },
  mounted() {
    this.init();
  }
}
</script>
<style lang="scss" scoped>
.hotTable {
    margin: 50px 5% 15px;
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
