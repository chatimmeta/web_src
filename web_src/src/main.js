import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Meta from 'vue-meta'
Vue.use(Meta)
import App from './App.vue'
import router from './router'
import store from './store'
Vue.use(VueI18n);

import 'styles/common.css'
// import 'styles/apdater.scss'

const i18n = new VueI18n({
  locale: 'en-US',
  messages: {
    'zh-CN': require('@/language/zh'),
    'en-US': require('@/language/en')
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
