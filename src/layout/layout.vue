<template>
  <el-container>
    <el-aside width="200px">
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
.el-header {
  max-height: 60px !important;
  padding: 0;
}
.el-main {
  width: 100%;
  height: 100%;
  // box-shadow: 0 4px 12px 0 rgba(207, 217, 239, 0.78);
}
</style>
