<template>
  <div class="errPage-container">
    <div>
      <img class="errorImg width-100" :src="errorImg">
      <p class="errorTitle">404</p>
      <p class="errorTro">抱歉,没有找到该页面</p>
      <el-button size="mini" type="primary" @click="goBack">返回</el-button>
    </div>
  </div>
</template>

<script>
import errorImg from '@/assets/img/404.png'

export default {
  name: 'Page404',
  data() {
    return {
      errorImg: errorImg
    }
  },
  mounted() {
    // mutils.setContentHeight(this, this.$refs.contain, 250)
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.errPage-container {
  display: flex;
  height: 80vh;
  align-items: center;
  justify-content: space-around;
  div {
    font-size: 16px;
    color: #666666;
    text-align: center;
    img {
      display: block;
    }
    p {
      margin: 5px 0;
    }
  }
}
</style>
