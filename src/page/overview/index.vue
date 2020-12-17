<template>
  <div class="overview">
    <HeadNav />
    <div class="overview-container">
      <div class="inlineBeforeCuboid">
        <span>本年使用总览</span>
      </div>
      <div class="overview-container-year">
        <div>
          <div class="year-top">
            <span>近六个月费用及任务数</span>
            <div>
              <span class="inlineBeforeCircle save">存储</span>
              <span class="inlineBeforeCircle computed">计算</span>
              <span class="inlineBeforeCircle opera">运维</span>
              <span class="inlineBeforeCircle deliver">交付</span>
              <span class="inlineBeforeCircle pass">高速通道</span>
            </div>
          </div>
          <div class="year-bottom">
            <p class="chartsTxt-public yearCost">总费用：<span>￥36213</span>任务数：<span>2190</span></p>
            <BarCharts chart-id="barChartYear" :chart-info="overviewChartInfo" />
          </div>
        </div>
        <div>
          <div class="year-top">
            <span>存储情况</span>
            <div>
              <span class="inlineBeforeStroge hotStorage">热存储量</span>
              <span class="inlineBeforeStroge coldStroage">冷存储量</span>
            </div>
          </div>
          <div class="year-bottom">
            <p class="chartsTxt-public yearStroge">热存数据量：<span>100<i>PB</i></span>   冷存数据量：<span>30</span>PB</p>
            <LineChart chart-id="lineChartYear" :chart-info="dataSizeChartInfo" />
          </div>
        </div>
      </div>
    </div>
    <div class="overview-container">
      <div class="inlineBeforeCuboid">
        <span>月使用总览</span>
        <span class="details" @click="monthDetails">详情</span>
      </div>
      <div class="overview-container-box">
        <div>
          <el-date-picker
            v-model="pickMonth"

            type="month"
            placeholder="账期筛选"
          />
          <div>
            <span class="inlineBeforeCircle save">存储</span>
            <span class="inlineBeforeCircle computed">计算</span>
            <span class="inlineBeforeCircle opera">运维</span>
            <span class="inlineBeforeCircle deliver">交付</span>
            <span class="inlineBeforeCircle pass">高速通道</span>
          </div>
        </div>
        <div>
          <div class="pieChart">
            <p class="chartsTxt-public chartsTxt-publicM">费用分布 (2020-11)</p>
            <PieChart chart-id="pieChartMonth" :chart-info="distribuChartInfo" />
          </div>
          <span />
          <div class="lineChart">
            <p class="chartsTxt-public chartsTxt-publicM">每月费用及任务 (2020-11)</p>
            <BarCharts chart-id="barChartMonth" :chart-info="overviewChartInfo" />
          </div>
        </div>
      </div>
    </div>
    <div class="overview-container">
      <div class="inlineBeforeCuboid">
        <span>用户用量</span>
        <span class="details" @click="userDetails">详情</span>
      </div>
      <div>
        <div class="overview-container-process">
          <Process :process-info="data">
            <template slot="spanContent">
              <div>接收样本数 (2020)</div>
            </template>
          </Process>
          <Process :process-info="data" template="process">
            <template slot="spanContent">
              <div>交付任务书/子项目数 (2020)</div>
            </template>
          </Process>
          <Process :process-info="data1">
            <template slot="spanContent">
              <div>存储情况</div>
              <div>
                <span class="inlineBeforeStroge hotStorage">热存储量</span>
                <span class="inlineBeforeStroge coldStroage">冷存储量</span>
              </div>
            </template>
          </Process>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import BarCharts from '@/components/Echarts/barChart'
import LineChart from '@/components/Echarts/lineChart'
import PieChart from '@/components/Echarts/pieChart'
import Process from '@/components/Process/process'
import HeadNav from '@/layout/components/headNav'
export default {
  name: 'Overview',
  components: {
    BarCharts,
    LineChart,
    PieChart,
    Process,
    HeadNav
  },
  data() {
    return {
      pickMonth: `${new Date().getFullYear() + 1}-${new Date().getMonth() + 1}`,
      overviewChartInfo: {
        tooltip: {
          formatter: (params) => {
            const div = document.createElement('div')
            const div1 = document.createElement('div')
            const time = document.createElement('p')
            const totalCost = document.createElement('p')
            const task = document.createElement('p')
            // const tipType = ['save', 'computed', 'opera', 'deliver', 'pass']
            // tipType.map(item => {

            // })

            const saveP = document.createElement('p')
            const computedP = document.createElement('p')
            const operaP = document.createElement('p')
            const deliverP = document.createElement('p')
            const passP = document.createElement('p')
            const saveSpan = document.createElement('span')
            const computedSpan = document.createElement('span')
            const operaSpan = document.createElement('span')
            const deliverSpan = document.createElement('span')
            const passSpan = document.createElement('span')

            const date = new Date()
            div.style.padding = '10px 40px 10px 20px'
            time.innerHTML = `${date.getFullYear()} - ${date.getMonth() + 1 < 10 ? '0' + date.getMonth() : date.getMonth() + 1}`
            time.className = 'tooltipTitle'
            totalCost.innerHTML = `当月总费用 ￥5000`
            totalCost.className = 'tooltipTitle'
            task.innerHTML = `当月任务数 4134`
            task.className = 'tooltipTitle'

            saveSpan.innerHTML = '存储：1000 20%'
            saveSpan.className = 'tooltipStroge tooltipSave'
            saveP.appendChild(saveSpan)
            saveP.className = 'tooltipStrogeP'

            computedSpan.innerHTML = '计算：1000 20%'
            computedSpan.className = 'tooltipStroge tooltipComputed'
            computedP.appendChild(computedSpan)
            computedP.className = 'tooltipStrogeP'

            operaSpan.innerHTML = '运维：1000 20%'
            operaSpan.className = 'tooltipStroge tooltipOprea'
            operaP.appendChild(operaSpan)
            operaP.className = 'tooltipStrogeP'

            deliverSpan.innerHTML = '交付：1000 20%'
            deliverSpan.className = 'tooltipStroge tooltipDliver'
            deliverP.appendChild(deliverSpan)
            deliverP.className = 'tooltipStrogeP'

            passSpan.innerHTML = '高速通道：1000 20%'
            passSpan.className = 'tooltipStroge tooltipPass'
            passP.appendChild(passSpan)
            passP.className = 'tooltipStrogeP'

            div.appendChild(time)
            div.appendChild(totalCost)
            div.appendChild(task)
            div.appendChild(saveP)
            div.appendChild(computedP)
            div.appendChild(operaP)
            div.appendChild(deliverP)
            div.appendChild(passP)
            div1.appendChild(div)
            return div1.innerHTML
          }
        },
        xAxis: {
          data: ['1月', '2月', '3月', '4月', '5月', '6月']
        },
        series: [
          {
            name: '存储',
            type: 'bar',
            stack: '广告',
            data: [120, 132, 101, 134, 90, 230],
            barMaxWidth: 30,
            itemStyle: {
              color: '#50EDC9'
              // borderColor: '#ffffff'
            }
            // backgroundStyle: {
            //   borderColor: '#fff'
            // }
          },
          {
            name: '计算',
            type: 'bar',
            stack: '广告',
            data: [220, 182, 191, 234, 290, 330],
            itemStyle: {
              color: '#3585FF'
            }
          },
          {
            name: '运维',
            type: 'bar',
            stack: '广告',
            data: [150, 232, 201, 154, 190, 330],
            itemStyle: {
              color: '#F7B529 '
            }
          },
          {
            name: '交付',
            type: 'bar',
            stack: '广告',
            data: [120, 242, 201, 154, 190, 330],
            itemStyle: {
              color: '#FC6761 '
            }
          },
          {
            name: '高速通道',
            type: 'bar',
            stack: '广告',
            data: [150, 232, 201, 154, 190, 330],
            itemStyle: {
              color: '#B373EB '
            }
          },
          {
            name: '任务数',
            type: 'line',
            yAxisIndex: 1,
            data: [1400, 1782, 1351, 1604, 1140, 1580],
            symbol: 'none',
            lineStyle: {
              color: '#F2AA43'
            }
          }
        ]
      },
      dataSizeChartInfo: {
        xAxis: {
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        series: [
          {
            name: '热存储量',
            type: 'line',
            data: [120, 132, 101, 134, 90, 120, 132, 101, 134, 90, 230, 210],
            symbol: 'none',
            itemStyle: {
              color: '#3585FF'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(53,133,255,0.20)'
              }, {
                offset: 1,
                color: 'rgba(1,213,171,0.02)'
              }])
            }
          },
          {
            name: '冷村储量',
            type: 'line',
            data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290],
            symbol: 'none',
            itemStyle: {
              color: '#0EEDF1'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(14,237,241,0.20)'
              }, {
                offset: 1,
                color: 'rgba(1,213,171,0.02)'
              }])
            }
          }
        ]
      },
      distribuChartInfo: {
        tooltip: {
          formatter: (params) => {
            const div = document.createElement('div')
            const div1 = document.createElement('div')

            const saveP = document.createElement('p')
            const saveSpan = document.createElement('span')

            saveSpan.innerHTML = '存储：1000 20%'
            saveSpan.className = 'tooltipStroge tooltipSavePie'
            saveP.appendChild(saveSpan)
            saveP.className = 'tooltipStrogeP'

            div.appendChild(saveP)
            div1.appendChild(div)
            return div1.innerHTML
          }
        },
        graphic: {
          text: '当月总费用\n\n￥50000'
        },
        series: {
          name: '当月总消费',
          data: [
            { value: 335, name: '存储', itemStyle: {
              color: '#50EDC9'
            }},
            { value: 1310, name: '计算', itemStyle: {
              color: '#3585FF'
            }},
            { value: 234, name: '运维', itemStyle: {
              color: '#F7B529'
            }},
            { value: 135, name: '交付', itemStyle: {
              color: '#FC6761'
            }},
            { value: 548, name: '高速通道', itemStyle: {
              color: '#B373EB'
            }}
          ]
        }
      },
      data: {
        data: [
          {
            line: 1000,
            name: '用户1',
            all: 1000
          },
          {
            line: 340,
            name: '用户2',
            all: 1000
          },
          {
            line: 170,
            name: '用户3',
            all: 1000
          },
          {
            line: 680,
            name: '用户4',
            all: 1000
          },
          {
            line: 100,
            name: '用户5',
            all: 1000
          }
        ]
      },
      data1: {
        unit: 'PB',
        size: '12',
        data: [
          {
            line: 1000,
            name: '用户1',
            all: 1000,
            cold: 600
          },
          {
            line: 340,
            name: '用户2',
            all: 1000,
            cold: 600
          },
          {
            line: 170,
            name: '用户3',
            all: 1000,
            cold: 300
          },
          {
            line: 680,
            name: '用户4',
            all: 1000,
            cold: 600
          },
          {
            line: 100,
            name: '用户5',
            all: 1000,
            cold: 320
          }
        ]
      }
    }
  },
  methods: {
    monthDetails() {
      // this.$router.push({ path: '/consumption' })
      this.$router.push({ path: '/projectBill/consumption' })
      // 需匹配左侧menu
    },
    userDetails() {
      this.$router.push({ path: '/projectBill/user' })
    }
  }
}
</script>

<style lang="scss" scoped>
.overview {
  .overview-container {
    width: 100%;
    // height: px2Rem(430);
    margin-bottom: 20px;
    .overview-container-year {
      display: flex;
      justify-content: space-between;
      height: px2Rem(380);
      >div {
        width: 49%;
        background: #ffffff;
        box-shadow: 0 4px 12px 0 rgba(207, 217, 239, 0.78);
        border-radius: 5px;
        .year-top {
          width: 100%;
          height: px2Rem(45);
          display: flex;
          justify-content: space-between;
          padding: 10px;
          align-items: center;
          box-sizing: border-box;
          border-bottom: 1px solid #EBEFF7;
          > span {
            font-family: $font-family-typeM;
            font-size: 14px;
            color: #666666;
          }
          .inlineBeforeCircle {
            font-size: 12px;
            color: #666666;
            position: relative;
            padding: 0 14px;
          }
        }
        .year-bottom {
          position: relative;
          .yearCost {
            span {
              &:nth-child(1) {
                font-size: 14px;
                color: #FC6761;
                padding-right: 10px;
              }
              &:nth-child(2) {
                font-size: 14px;
                color: #F7B529;
              }
            }
          }
          .yearStroge {
            span {
              &:nth-child(1) {
                font-size: 14px;
                color: #3585FF;
                padding-right: 10px;
                i {
                  color: #666666;
                }
              }
              &:nth-child(2) {
                font-size: 14px;
                color: #0EEDF1;
              }
            }
          }
          .barChart-container {
            height: px2Rem(335);
          }
          .lineChart-container {
            height: px2Rem(335);
          }
        }
      }
    }
    .overview-container-box {
      height: px2Rem(410);
      box-shadow: 0 4px 12px 0 rgba(207, 217, 239, 0.78);
      background: #ffffff;
      margin-bottom: 20px;
      border-radius: 5px;
      >div {
        &:nth-child(1) {
          display: flex;
          justify-content: space-between;
          padding: 10px;
          height: px2Rem(55);
          align-items: center;
          box-sizing: border-box;
          border-bottom: 1px solid #EBEFF7;
          .inlineBeforeCircle {
            font-size: 12px;
            color: #666666;
            position: relative;
            padding: 0 14px;
          }
        }
        &:nth-child(2) {
          display: flex;
          width: calc(100% - 2px);
          height: px2Rem(355);
          .pieChart {
            width: 34%;
          }
          .lineChart {
            width: 64%;
          }
          span {
            display: inline-block;
            height: 80%;
            border-left: 2px dashed #D6D6D6;
            margin: 2% 1% 0;
          }
        }
      }
    }
  }
  .overview-container-process {
    display: flex;
    .process-box {
      width: 32%;
      &:nth-child(2) {
        margin: 0 2%;
      }
    }
  }
}
.inlineBeforeStroge {
  position: relative;
  font-family: $font-family-typeR !important;
  font-size: 10px !important;
  color: #999999 !important;
  padding: 0 24px;
}
.chartsTxt-public {
  font-size: 14px;
  color: #666666;
  font-family: $font-family-typeR;
  position: absolute;
  padding: 10px;
  line-height: 20px;
}
.chartsTxt-publicM {
  font-family: $font-family-typeM;
}
.details {
  font-family: $font-family-typeM;
  font-size: 14px;
  color: #167AEB;
  cursor: pointer;
  font-weight: normal;
}
</style>
