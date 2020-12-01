<template>
  <div class="overview">
    <div class="overview-container">
      <div class="inlineBeforeCuboid">
        <span>本年使用总览</span>
      </div>
      <div class="overview-container-year">
        <BarCharts chart-id="barChartYear" :chart-info="overviewChartInfo" />
        <LineChart chart-id="lineChartYear" :chart-info="dataSizeChartInfo" />
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
            size="small"
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
            <PieChart chart-id="pieChartMonth" :chart-info="distribuChartInfo" />
          </div>
          <span />
          <div class="lineChart">
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
          <Process>
            <template slot="spanContent">
              <span>接收样本数 (2020)</span>
            </template>
          </Process>
          <Process>
            <template slot="spanContent">
              <span>交付任务书/子项目数 (2020)</span>
            </template>
          </Process>
          <Process>
            <template slot="spanContent">
              <span>存储情况</span>
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
export default {
  name: 'Overview',
  components: {
    BarCharts,
    LineChart,
    PieChart,
    Process
  },
  data() {
    return {
      pickMonth: `${new Date().getFullYear() + 1}-${new Date().getMonth() + 1}`,
      overviewChartInfo: {
        title: [
          {
            text: `总费用: `,
            textStyle: {
              color: '#666',
              fontSize: '16',
              fontWeight: 'normal'
            },
            left: 0,
            top: 4
          },
          {
            text: `￥362134`,
            textStyle: {
              color: 'red',
              fontSize: '26',
              fontWeight: 'normal'
            },
            left: 55
          },
          {
            text: `   任务数: `,
            textStyle: {
              color: '#666',
              fontSize: '16',
              fontWeight: 'normal'
            },
            left: 180,
            top: 4
          },
          {
            text: `￥3621`,
            textStyle: {
              color: 'yellow',
              fontSize: '26',
              fontWeight: 'normal'
            },
            left: 250
          }
        ],
        tooltip: {
          formatter: (params) => {
            const div = document.createElement('div')
            const time = document.createElement('p')
            const date = new Date()
            time.innerHTML = `${date.getFullYear()} - ${date.getMonth() + 1 < 10 ? '0' + date.getMonth() : date.getMonth() + 1}`
            div.appendChild(time)
            return div.innerHTML
          }
        },
        legend: {
          data: [
            {
              name: '存储',
              icon: 'pin',
              textStyle: {
                color: '#666'
              }
            },
            {
              name: '计算',
              icon: 'pin',
              textStyle: {
                color: '#666'
              }
            },
            {
              name: '运维',
              icon: 'pin',
              textStyle: {
                color: '#666'
              }
            },
            {
              name: '交付',
              icon: 'pin',
              textStyle: {
                color: '#666'
              }
            },
            {
              name: '高速通道',
              icon: 'pin',
              textStyle: {
                color: '#666'
              }
            }
          ]
        },
        xAxis: {
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        series: [
          {
            name: '存储',
            type: 'bar',
            stack: '广告',
            data: [120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
              color: 'skyBlue',
              borderColor: '#ffffff'
            },
            backgroundStyle: {
              borderColor: '#fff'
            }
          },
          {
            name: '计算',
            type: 'bar',
            stack: '广告',
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
              color: 'green'
            }
          },
          {
            name: '运维',
            type: 'bar',
            stack: '广告',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '交付',
            type: 'bar',
            stack: '广告',
            data: [120, 242, 201, 154, 190, 330, 410]
          },
          {
            name: '高速通道',
            type: 'bar',
            stack: '广告',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '任务数',
            type: 'line',
            data: [400, 782, 351, 604, 540, 580, 860],
            symbol: 'none',
            lineStyle: {
              color: 'yellow'
            }
          }
        ]
      },
      dataSizeChartInfo: {
        title: [
          {
            text: `总费用: `,
            textStyle: {
              color: '#666',
              fontSize: '16',
              fontWeight: 'normal'
            },
            left: 0,
            top: 4
          },
          {
            text: `￥362134`,
            textStyle: {
              color: 'red',
              fontSize: '26',
              fontWeight: 'normal'
            },
            left: 55
          },
          {
            text: `   任务数: `,
            textStyle: {
              color: '#666',
              fontSize: '16',
              fontWeight: 'normal'
            },
            left: 180,
            top: 4
          },
          {
            text: `￥3621`,
            textStyle: {
              color: 'yellow',
              fontSize: '26',
              fontWeight: 'normal'
            },
            left: 250
          }
        ],
        legend: [
          {
            name: '热存储量',
            icon: 'roundRect',
            textStyle: {
              color: '#666'
            }
          },
          {
            name: '冷村储量',
            icon: 'roundRect',
            textStyle: {
              color: '#666'
            }
          }
        ],
        xAxis: {
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        series: [
          {
            name: '热存储量',
            type: 'line',
            data: [120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
              color: '#8ec6ad'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#8ec6ad'
              }, {
                offset: 1,
                color: '#ffe'
              }])
            }
          },
          {
            name: '冷村储量',
            type: 'line',
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
              color: '#d68262'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#d68262'
              }, {
                offset: 1,
                color: '#ffe'
              }])
            }
          }
        ]
      },
      distribuChartInfo: {
        title: [
          {
            text: `费用分布 (2020-4) `,
            textStyle: {
              color: '#666',
              fontSize: '16',
              fontWeight: 'normal'
            },
            left: 0,
            top: 4
          }
        ],
        legend: {
          data: [
            { name: '存储', icon: 'roundRect', textStyle: { color: '#666' }},
            { name: '计算', icon: 'roundRect', textStyle: { color: '#666' }},
            { name: '运维', icon: 'roundRect', textStyle: { color: '#666' }},
            { name: '交付', icon: 'roundRect', textStyle: { color: '#666' }},
            { name: '高速通道', icon: 'roundRect', textStyle: { color: '#666' }}
          ],
          formatter: (name) => {
            return 'Legend ' + name
          }
        },
        graphic: {
          text: '运动达标率\n\n80%'
        },
        series: {
          name: '当月总消费',
          data: [
            { value: 335, name: '存储' },
            { value: 310, name: '计算' },
            { value: 234, name: '运维' },
            { value: 135, name: '交付' },
            { value: 1548, name: '高速通道' }
          ]
        }
      }
    }
  },
  methods: {
    monthDetails() {

    },
    userDetails() {

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
      div {
        width: 49%;
        background: #ffffff;
        box-shadow: 0 4px 12px 0 rgba(207, 217, 239, 0.78);
      }
    }
    .overview-container-box {
      height: px2Rem(410);
      box-shadow: 0 4px 12px 0 rgba(207, 217, 239, 0.78);
      background: #ffffff;
      margin-bottom: 20px;
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
    .inlineBeforeStroge {
      position: relative;
      font-size: 10px;
      color: #999999;
      padding: 0 24px;
    }
  }
}
.details {
  font-size: 14px;
  color: #167AEB;
  cursor: pointer;
}
</style>
