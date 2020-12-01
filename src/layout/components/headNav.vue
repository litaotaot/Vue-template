<template>
  <div class="headNav-container">
    <div class="inlineBeforeCuboid">
      <span>消费明细</span>
    </div>
    <div class="headNav-auth">
      <el-popover
        v-model="visible"
        placement="top"
        width="240"
        popper-class="elPopover"
      >
        <div class="auth-info">
          <ul>
            <li><p><span>用</span><span>户</span><span>名</span></p><p>：zhangsan</p></li>
            <li><p><span>姓</span><span>名</span></p><p>：张三</p></li>
            <li><p><span>角</span><span>色</span></p><p>：系统管理员</p></li>
          </ul>
        </div>
        <div class="auth-determine" style="text-align: center; margin: 0; border-top:1px solid #999;">
          <el-button type="primary" size="mini" @click="loginOut">退出登录</el-button>
        </div>
        <div slot="reference" class="loginOut">
          <span class="title">ZhangSan</span>
          <i class="el-icon-caret-bottom titleIcon" />
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
    loginOut() {
      this.visible = false
      this.$store.dispatch('login/loginOut')
    }
  }
}
</script>

<style lang="scss" scoped>
.headNav-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
}

.title {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #666666;
  letter-spacing: 0;
}
.titleIcon {
  color: #666666;
}
</style>
<style lang="scss">
.auth-info {
  padding: 10px 20px;
  li {
    margin: 10px 0;
    display: flex;
    color: #666666;
    p {
      &:nth-child(1) {
        display: flex;
        width: 50px;
        white-space: nowrap;
        justify-content: space-between;
      }
    }
  }
}
.auth-determine {
  display: flex;
  height: 40px;
  justify-content: space-around;
  align-items: center;
}
.loginOut {
  cursor: pointer;
}
</style>
