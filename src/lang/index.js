import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
import zh from './zh'
import en from './en'

// 注册 `formatter` 选项
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'en': {
      ...en
    },
    'zh': {
      ...zh
    }
  }
})

export default i18n
