<template>
  <div class="user-container">
    <div class="container-shadow leftTable">
      <h2>本年度用户明细</h2>
      <Mtable
        :table-columns="Configure"
        :table-data="tableData"
        :table-height="tableHeight"
        :page-total="tableData.length"
        @setTableHeight="setTableHeight"
      />
    </div>
    <div class="container-shadow rightChart">
      <h3>史真香</h3>
      <div>
        <p>近3个月任务情况</p>
        <LineCharts chart-id="taskChart" :chart-info="taskInfo" />
      </div>
      <p />
      <div>
        <p>近3个月存储情况</p>
        <LineCharts chart-id="strogeChart" :chart-info="strogeInfo" />
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import Mtable from '@/components/From/table'
import LineCharts from '@/components/Echarts/lineChart'
import { Configure } from './configure'
import { px2Rem } from '@/utils/mUtils'
export default {
  name: 'User',
  components: {
    Mtable,
    LineCharts
  },
  data() {
    return {
      tableHeight: 0,
      tableData: [
        { a: 1606986807680, b: 1606986807680, c: '12345', d: '12345', e: '12345', f: '12345', g: '12345' },
        { a: 1606986807680, b: 1606986807680, c: '12345', d: '12345', e: '12345', f: '12345', g: '12345' },
        { a: 1606986807680, b: 1606986807680, c: '12345', d: '12345', e: '12345', f: '12345', g: '12345' }
      ],
      taskInfo: {
        xAxis: {
          data: ['1月', '2月', '3月']
        },
        series: [
          {
            name: '任务情况',
            type: 'line',
            data: [30, 60, 40],
            smooth: true,
            itemStyle: {
              color: '#F2AA43'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(242,170,67,0.5)'
              }, {
                offset: 1,
                color: 'rgba(255,255,255,0)'
              }])
            }
          }
        ]
      },
      strogeInfo: {
        xAxis: {
          // alignWithLabel: false,
          data: ['1月', '2月', '3月']
        },
        series: [
          {
            name: '热存',
            type: 'line',
            data: [10, 40, 60],
            smooth: true,
            itemStyle: {
              color: '#0EEDF1'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(14,237,241,0.5)'
              }, {
                offset: 1,
                color: 'rgba(14,237,241,0)'
              }])
            }
          },
          {
            name: '冷存',
            type: 'line',
            data: [15, 30, 70],
            smooth: true,
            itemStyle: {
              color: '#3585FF'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(53,133,255,0.5)'
              }, {
                offset: 1,
                color: 'rgba(53,133,255,0)'
              }])
            }
          }
        ]
      }
    }
  },
  computed: {
    Configure() {
      return Configure.tableColumns()
    }
  },
  mounted() {
    this.setTableHeight()
  },
  methods: {
    // 计算table高度
    setTableHeight() {
      console.log(px2Rem(40))

      this.$nextTick(() => {
        this.tableHeight = document.body.clientHeight - px2Rem(40) - 23 - 40 - 40 - 52
        console.log(this.tableHeight)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.user-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .leftTable {
    padding: px2Rem(10);
    padding-bottom: 0;
    width: 68%;
    box-sizing: border-box;
    h2 {
      padding: px2Rem(10);
      font-size: 20px;
      color: #666666;
      font-weight: normal;
      margin-bottom: px2Rem(10);
    }
  }
  .rightChart {
    width: 31%;
    margin-left: 1%;
    padding: px2Rem(20);
    box-sizing: border-box;
    overflow-y: auto;
    color: #666666;
    max-height: px2Rem(856);
    h3 {
        font-size: 20px;
        padding: px2Rem(10) 0;
        font-weight: normal;
    }
    > p {
        width: 100%;
        height: 1px;
        border-bottom: 1px dashed #D6D6D6;
        margin-top: px2Rem(60);
    }
    > div {
      width: 100%;
      height: px2Rem(248);
      // padding: px2Rem(10) 0;
      margin: px2Rem(30) 0;
      .lineChart-container {
        box-shadow: 0 4px 12px 0 rgba(207, 217, 239, 0.78);
      }
      p {
        font-size: 14px;
        margin-bottom: px2Rem(10);
      }
    }
  }
}
</style>
