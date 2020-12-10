<template>
  <el-menu
    :default-active="defaultActive"
    class="el-menu-vertical-demo"
    background-color="#2D75F4"
    active-text-color="#ffffff"
    text-color="#79B5F9"
    :unique-opened="true"
    @open="handleOpen"
    @close="handleClose"
    @select="onSelect"
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
      isCollapse: true,
      defaultActive: ''
    }
  },
  computed: {
    ...mapGetters({
      routers: 'authority/router'
    })
  },
  watch: {
    $route: function(route) {
      this.defaultActive = `${route.meta.oprId}`
    }
  },
  mounted() {
    this.initRoute()
  },
  methods: {
    handleOpen(key, keyPath) {
    },
    handleClose(key, keyPath) {
    },
    onSelect(key, keyPath) {
    },
    initRoute() {
      this.defaultActive = `${this.$route.meta.oprId}`
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  position: fixed;
  top: 132px;
  width: 201px;
  min-height: 100%;
  box-sizing: border-box;
  margin: 20px;
  border: none;
}
</style>
