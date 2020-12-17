<template>
  <div class="process-box">
    <div class="top">
      <slot name="spanContent" />
    </div>
    <div class="bottom">
      <ul>
        <li v-for="(item,index) in processInfo.data" :key="index">
          <span>{{ item.name }} </span>
          <span class="process">
            <template v-if="template">

              <el-progress color="#3585FF" :stroke-width="10" :percentage="60" />
            </template>
            <template v-else>
              <MyProcess :data="item" mark="line" color="#3585FF" :unit="processInfo.unit" :size="processInfo.size" />
              <MyProcess v-if="item.cold" :data="item" mark="cold" color="#0EEDF1" :unit="processInfo.unit" :size="processInfo.size" />
            </template>
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
      type: Object,
      default() {
        return {}
      }
    },
    template: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
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
    height: px2Rem(40);
    display: flex;
    justify-content: space-between;
    padding: 0 px2Rem(10);
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid #EBEFF7;
    div {
      font-family: $font-family-typeM;
      font-size: 14px;
      color: #666666;
    }
  }
  .bottom {
    padding: px2Rem(20) px2Rem(30);
    overflow-y: hidden;
    box-sizing: border-box;
    height: px2Rem(330);
    ul {
      display: flex;
      flex-direction: row;
      height: 100%;
      flex-wrap: wrap;
      li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
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
}
</style>
