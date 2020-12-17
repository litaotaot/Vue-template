
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/) // 获取该文件夹下后缀为.svg得文件
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
