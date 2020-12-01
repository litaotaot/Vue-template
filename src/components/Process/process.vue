<template>
  <div class="process-box">
    <div class="top">
      <slot name="spanContent" />
    </div>
    <div class="bottom">
      <ul>
        <li>
          <span>用户1 </span>
          <span class="process">
            <el-progress color="#3585FF" :stroke-width="10" :percentage="50" />
            <!-- <el-progress :color="customColors" :stroke-width="10" :percentage="50" /> -->
            <el-progress color="#0EEDF1" :stroke-width="10" :percentage="70" />
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Process',
  components: {
  },
  data() {
    return {
    }
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
    padding: 30px;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        &:nth-child(2) {
          width: 85%;
        }
      }
    }
  }
}
</style>
