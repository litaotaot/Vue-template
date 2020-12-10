<template>
  <div class="headNav-container">
    <div v-if="titleInfo.title" class="inlineBeforeCuboid titleCudoid">
      <span>{{ titleInfo.title }}<el-tooltip v-if="titleInfo.icon" effect="light" :content="titleInfo.content" placement="bottom-start"><i class="color pointer el-icon-warning-outline" /></el-tooltip></span>
    </div>
    <div v-else />
    <div class="headNav-auth">
      <span>统计截止日期：{{ finalDate }}</span>
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
import { formatDate } from '@/utils/mUtils'
export default {
  name: 'HeadNav',
  data() {
    return {
      visible: false,
      titleInfo: {
        title: '',
        icon: '',
        content: ''
      },
      finalDate: formatDate(new Date(), 3)
    }
  },
  watch: {
    $route(e) {
      this.getTitle(e)
    }
  },
  mounted() {
    this.getTitle(this.$route)
  },
  methods: {
    loginOut() {
      this.visible = false
      this.$store.dispatch('login/loginOut')
    },
    getTitle(e) {
      switch (e.name) {
        case 'projectBill_user':
          this.titleInfo.title = '用户明细'
          this.titleInfo.icon = ''
          break
        case 'projectBill_consumption':
          this.titleInfo.title = '消费明细'
          this.titleInfo.icon = 'el-icon-warning-outline'
          this.titleInfo.content = '本月数据中包含未结算的后付费数据，查询结果仅供参考，不作为对账依据。本月最终账单将在次月初生成，在次月4日10点后可查看。'
          break
        case 'projectBill_subProject':
          this.titleInfo.title = '子项目账单'
          this.titleInfo.icon = ''
          break
        default:
          this.titleInfo.title = ''
          this.titleInfo.icon = ''
          this.titleInfo.content = ''
          break
      }
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
  .titleCudoid {
    margin-bottom: 0;
    .pointer {
      cursor: pointer;
    }
    .color {
      color: #666666;
    }
  }
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
.headNav-auth {
  display: flex;
  > span {
    font-size: 14px;
    color: #666666;
    padding-right: px2Rem(20);
  }
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
