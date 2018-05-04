<template>
<div class="pieCanvas">

</div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    legendData: [],
    seriesData: []
  }),
  props: {
    getDataUrl: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    subtext: {
      type: String,
      required: true
    },
    seriesname: {
      type: String,
      required: true
    },
    canvasId: {
      type: String,
      required: true
    }
  },
  methods: {
    requestData: function() {
      this.$http.get(this.getDataUrl).then((res) => {
        let arr = res.data;
        arr.forEach((obj, index) => {
          let tempObj = {};
          tempObj.value = obj.value;
          tempObj.name = obj.key;
          this.seriesData.push(tempObj);
          this.legendData.push(obj.key);
        });
        this.inintChart();
      }, (error) => {
        console.log(error);
      });
    },
    inintChart: function() {
      let index = this.findParentIndex();
      let dom = document.getElementsByClassName('pieCanvas')[index];
      let myChart = this.$echarts.init(dom);
      let option = {
        title: {
          text: this.text,
          subtext: this.subtext,
          subtextStyle: {
            fontSize: 13
          },
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.legendData
        },
        series: [{
          name: this.seriesname,
          type: 'pie',
          radius: '70%',
          center: ['55%', '60%'],
          data: this.seriesData,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }]
      };
      myChart.setOption(option);
    },
    findParentIndex: function() {
      let ret = 0;
      let pieCanvas = document.getElementsByClassName('pieCanvas');
      switch (this.canvasId) {
        case 'appUseDataToPie':
          pieCanvas[0].style.width = '500px';
          pieCanvas[0].style.height = '300px';
          break;
        case 'cardTypeAmountDataToPie':
          pieCanvas[1].style.width = '800px';
          pieCanvas[1].style.height = '450px';
          ret = 1;
          break;
      }
      return ret;
    }
  },
  mounted() {
    this.requestData();
  }
}
</script>
<style lang="scss" scoped>
.pieCanvas {
    margin: 30px auto;
}
</style>
