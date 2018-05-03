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
      let dom = document.getElementsByClassName('pieCanvas')[0];
      let myChart = this.$echarts.init(dom);
      let option = {
        title: {
          text: this.text,
          subtext: this.subtext,
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
    }
  },
  mounted() {
    this.requestData();
  }
}
</script>
<style lang="scss" scoped>
.pieCanvas {
    width: 500px;
    height: 300px;
    margin: 25px auto;
}
</style>
