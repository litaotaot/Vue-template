<template>
  <div class="headNav-container">
    <div class="headNav-title">
      <span>消费明细</span>
    </div>
    <div class="headNav-auth">
      <el-popover
        v-model="visible"
        placement="top"
        width="200"
        popper-class="elPopover"
      >
        <p style="margin: 10px">用户名: zhangsan</p>
        <p style="margin: 10px">姓  名: 张三</p>
        <p style="margin: 10px">角  色: 系统管理员</p>
        <div style="text-align: center; margin: 0; border-top:1px solid #999;">
          <el-button style="margin-top: 10px;" type="primary" size="mini" @click="visible = false">退出登录</el-button>
        </div>
        <div slot="reference">
          <span>ZhangSan</span>
          <i class="el-icon-caret-bottom" />
        </div>
      </el-popover>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadNav',
  data() {
    return {
      visible: false
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.headNav-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #999999;
}
.headNav-title {
        line-height: px2Rem(60);
    height: px2Rem(60);
    margin-bottom: 5px;
    text-indent: 18px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #333;
    font-family: PingFangSC-Regular;
    position: relative;
        &::before {
      content: " ";
      position: absolute;
      top: px2Rem(24);
      width: px2Rem(10);
      height: px2Rem(10);
      border-radius: 50%;
      background: #2D75F4;
      box-shadow: 0 2px 4px 0 rgba(20,166,250,0.68);
      z-index: 9;
    }
}
</style>
