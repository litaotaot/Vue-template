<template>
  <div class="menu">
    <template v-for="item in routers">
      <template v-if=" item.hidden">
        <router-link v-if="!item.children && item.hidden" :key="item.meta.oprId" :to="item.prefix ? item.prefix + item.path : item.path">
          <el-menu-item :index="item.meta.oprId + ''">
            <i :class="item.meta.icon" />
            <span slot="title"> {{ item.meta.title }}</span>
          </el-menu-item>
        </router-link>
        <router-link v-else :key="item.meta.oprId" :to="item.prefix ? item.prefix + item.path : item.path">
          <el-submenu :index="item.meta.oprId + ''">
            <template slot="title">
              <i :class="item.meta.icon" />
              <span> {{ item.meta.title }}</span>
            </template>
            <Menu :key="item.meta.oprId" :routers="item.children" />
          </el-submenu>
        </router-link>
      </template>
    </template>
  </div>
</template>

<script>
import Menu from '@/layout/components/menu'
export default {
  name: 'Menu',
  components: {
    Menu
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
  }
}
</script>

<style lang="scss" scoped>
.menu {
  span {
    color: white;
  }
  i {
    color: white;
  }
}
</style>
