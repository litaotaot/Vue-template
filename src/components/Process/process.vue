<template>
  <div class="process-box">
    <div class="top">
      <slot name="spanContent" />
    </div>
    <div class="bottom">
      <ul>
        <li v-for="(item,index) in datab" :key="index">
          <span>{{ item.name }} </span>
          <span class="process">
            <!-- <el-progress color="#3585FF" :stroke-width="10" :percentage="50" />
            <el-progress color="#0EEDF1" :stroke-width="10" :percentage="70" /> -->
            <MyProcess :data="item" />
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MyProcess from './myProcess'
export default {
  name: 'Process',
  components: {
    MyProcess
  },
  props: {
    processInfo: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      datab: [
        {
          line: 1000,
          name: '用户1',
          all: 1000
        },
        {
          line: 340,
          name: '用户1',
          all: 1000
        },
        {
          line: 170,
          name: '用户1',
          all: 1000
        },
        {
          line: 680,
          name: '用户1',
          all: 1000
        },
        {
          line: 100,
          name: '用户1',
          all: 1000
        },
        {
          line: 1000,
          name: '用户1',
          all: 1000
        },
        {
          line: 340,
          name: '用户1',
          all: 1000
        },
        {
          line: 170,
          name: '用户1',
          all: 1000
        },
        {
          line: 680,
          name: '用户1',
          all: 1000
        },
        {
          line: 100,
          name: '用户1',
          all: 1000
        }
      ]
    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.process-box {
  background: #ffffff;
  width: 100%;
  height: px2Rem(380);
  border-radius: 5px;
  box-shadow: 0 4px 12px 0 rgba(207, 217, 239, 0.78);
  padding: 10px;
  .top {
    height: px2Rem(50);
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid #EBEFF7;
    span {
      font-size: 14px;
      color: #666666;
    }
  }
  .bottom {
    padding: px2Rem(20) px2Rem(30);
    overflow-y: scroll;
    box-sizing: border-box;
    height: px2Rem(330);
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: px2Rem(15) 0;
      span {
        &:nth-child(1) {
          font-size: 16px;
          color: #666666;
        }
        &:nth-child(2) {
          width: 85%;
        }
      }
    }
  }
}
</style>
