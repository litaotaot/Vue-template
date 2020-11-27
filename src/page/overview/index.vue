<template>
  <div>
    <div class="overview-container">
      <h3>本年使用总览</h3>
      <div class="overview-container-box">
        <BarCharts chart-id="barChart" :chart-info="overviewChartInfo" />
      </div>
    </div>
    <div class="overview-container">
      <h3>本年使用总览</h3>
      <div class="overview-container-box">
        <LineChart chart-id="lineChart" :chart-info="dataSizeChartInfo" />
      </div>
    </div>
    <div class="overview-container">
      <h3>本年使用总览</h3>
      <div class="overview-container-box">
        <PieChart chart-id="pieChart" :chart-info="distribuChartInfo" />
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import BarCharts from '@/components/Echarts/barChart'
import LineChart from '@/components/Echarts/lineChart'
import PieChart from '@/components/Echarts/pieChart'
export default {
  name: 'Overview',
  components: {
    BarCharts,
    LineChart,
    PieChart
  },
  data() {
    return {
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
  }
}
</script>

<style lang="scss" scoped>
.overview-container {
  width: 100%;
  height: 400px;
  h3 {
    margin-bottom: 5px;
    text-indent: 18px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #333;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 20px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #2D75F4;
      box-shadow: 0 2px 4px 0 rgba(20,166,250,0.68);
    }
  }
  .overview-container-box {
    height: 350px;
    box-shadow: 0 4px 12px 0 rgba(207, 217, 239, 0.78)
  }
}
</style>
