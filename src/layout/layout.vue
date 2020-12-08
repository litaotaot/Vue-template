<template>
  <el-container>
    <el-aside width="240px">
      <img src="../assets/img/GENEAN-log.png" alt="">
      <LeftMenu />
    </el-aside>
    <el-container>
      <el-header>
        <HeadNav />
      </el-header>
      <el-main>
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import LeftMenu from './components/leftMenu'
import HeadNav from './components/headNav'
export default {
  name: 'Layout',
  components: {
    LeftMenu,
    HeadNav
  }
}
</script>

<style lang='scss' scoped>
.el-container {
  .el-aside {
    img {
      width: 116px;
      height: 82px;
      margin: 20px 0 30px 62px;
    }
    box-sizing: border-box;
    background: #2D75F4;
  }
  .el-container {
    background: $bg-rightContainer-color
  }
}
.el-header {
  padding: 0 20px;
  height: 40px !important;
}
.el-main {
  width: 100%;
  height: 100%;
}
</style>
