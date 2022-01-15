import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant'
import 'vant/lib/index.css'

// 加载全局样式
import './styles/index.less'

// 加载动态设置rem基准值(注意：写在行内的样式不会生效)
import 'amfe-flexible'

// 注册使用Vant组件库
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
