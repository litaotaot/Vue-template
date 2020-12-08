<template>
  <div class="fillcontain">
    <div ref="contain" class="contain">
      <div class="errPage-container cflex wflex">
        <img class="errorImg" :src="errorImg">
        <p class="errorTitle">401</p>
        <p class="errorTro">抱歉,您没有权限访问该页面</p>
        <el-button size="mini" type="primary" @click="goBack">返回</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import errorImg from '@/assets/img/401.png'

export default {
  name: 'Page401',
  data() {
    return {
      errorImg: errorImg
    }
  },
  mounted() {
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.fillcontain {
  display: flex;
  height: 80vh;
  justify-content: space-around;
  align-items: center;
  .errPage-container {
    text-align: center;
    p{
      font-size: 16px;
      color: #666666;
      margin: 5px 0;
    }
  }
}
</style>
