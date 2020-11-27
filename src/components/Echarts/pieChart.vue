<template>
  <div :id="chartId" class="pieChart-container" />
</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'
export default {
  name: 'PieChart',
  mixins: [resize],
  props: {
    chartInfo: {
      type: Object,
      default() {
        return {}
      }
    },
    chartId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.chartId))
      var option = {
        title: this.chartInfo.title || [],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          top: '30%',
          left: '80%',
          textStyle: {
            lineHeight: 20
          },
          formatter: this.chartInfo.legend && this.chartInfo.legend.formatter ? this.chartInfo.legend.formatter : null,
          data: this.chartInfo.legend.data || [],
          right: 0
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        graphic: {
          type: 'text',
          left: 'center',
          top: '40%',
          style: {
            text: this.chartInfo.graphic.text || ' ',
            textAlign: 'center',
            fill: '#333',
            fontSize: 20,
            fontWeight: 700
          }
        },
        series: [
          {
            name: this.chartInfo.series.name || ' ',
            type: 'pie',
            radius: ['50%', '70%'],
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false,
              normal: {
                length: 10, // 改变标示线的长度
                lineStyle: {
                  color: '#999999' // 改变标示线的颜色
                }
              }
            },
            data: this.chartInfo.series.data || []
          }
        ]
      }

      this.chart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
.pieChart-container {
  width: 100%;
  height: 100%;
}
</style>
