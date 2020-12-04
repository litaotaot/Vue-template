<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#2D75F4"
    @open="handleOpen"
    @close="handleClose"
  >

    <template v-if="routers[0].path === '/' && routers[0].children">
      <Menu :routers="routers[0].children" />
    </template>

  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import Menu from './menu'
export default {
  name: 'LeftMenu',
  components: {
    Menu
  },
  data() {
    return {
      isCollapse: true
    }
  },
  computed: {
    ...mapGetters({
      routers: 'authority/router'
    })
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100%;
    box-sizing: border-box;
}
</style>
