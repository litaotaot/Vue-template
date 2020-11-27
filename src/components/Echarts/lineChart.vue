<template>
  <div :id="chartId" class="lineChart-container" />
</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'
export default {
  name: 'LineChart',
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
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          backgroundColor: 'rgba(255,255,255,0.7)',
          textStyle: {
            color: '#666',
            fontSize: 14,
            lineHeight: 30
          }
        },
        legend: {
          data: this.chartInfo.legend || [],
          right: 0
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: this.chartInfo.xAxis.data || [],
            show: true,
            axisLabel: {
              show: true,
              textStyle: {
                color: '#999', // 更改坐标轴文字颜色
                fontSize: 14 // 更改坐标轴文字大小
              }
            },
            axisLine: { // 改变x轴样式
              lineStyle: {
                color: '#999',
                width: 1 // 这里是为了突出显示加上的
              }
            },
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: {
              lineStyle: {
                type: 'dashed'
              },
              show: true
            },
            axisLine: { // 改变y轴样式
              lineStyle: {
                color: '#999',
                width: 1 // 这里是为了突出显示加上的
              }
            }
          }
        ],
        series: this.chartInfo.series || []
      }
      this.chart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
.lineChart-container {
  width: 100%;
  height: 100%;
}
</style>
