import { NoAuthRouter } from '@/router/router'

const authority = {
  namespaced: true,
  state: {
    routers: NoAuthRouter
  },
  getters: {
    router: state => state.routers
  }
}

export default authority
