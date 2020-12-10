<template>
  <div class="menu">
    <template v-for="item in routers">
      <template v-if="item.hidden">
        <router-link v-if="!item.children" :key="item.meta.oprId" :to="item.prefix ? item.prefix + item.path : item.path">
          <el-menu-item :class="item.meta.icon ? 'titleItem' : ''" :index="item.meta.oprId + ''">
            <div :class="item.meta.icon ? 'title' : ''">
              <!-- <i :class="item.meta.icon" /> -->
              <svg-icon :icon-class="idCurrentPath(item.path) ? item.meta.icon + '-on' : item.meta.icon + '-off'" class-name="svgIcon" />
              <span slot="title"> {{ item.meta.title }}</span>
            </div>
          </el-menu-item>
        </router-link>
        <template v-else>
          <el-submenu :key="item.meta.oprId" :index="item.meta.oprId + ''">
            <template slot="title">
              <div class="title">
                <!-- <i :class="item.meta.icon" /> -->
                <svg-icon :icon-class="idCurrentPath(item.path) ? item.meta.icon + '-on' : item.meta.icon + '-off'" class-name="svgIcon" />
                <span> {{ item.meta.title }}</span>
              </div>
            </template>
            <Menu :key="item.meta.oprId" :routers="item.children" />
          </el-submenu>
        </template>
      </template>
    </template>
  </div>
</template>

<script>
import Menu from '@/layout/components/menu'
// import SvgIcon from '@/components/SvgIcon'
export default {
  name: 'Menu',
  components: {
    Menu
    // SvgIcon
  },
  props: {
    routers: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isCollapse: true
    }
  },
  computed: {
  },
  methods: {
    idCurrentPath(path) {
      const currentPath = this.$route.path
      return currentPath.includes(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  height: 44px;
  border-radius: 22px;
  width: 100%;
  padding: 0 28px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  .svgIcon {
    width: 16px;
    height: 16px;
    margin-right: 3px;
  }
  span {
    padding-left: 6px;
    font-size: 18px;
  }
}

</style>
