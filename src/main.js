import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from './utils/request.js'

// 导入 Element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导入全局的样式, 在脚手架环境中 .vue / .less / .css / .png / .js 一系列文件, 都可以导入
// 脚手架会自动根据不同的文件类型, 会做不同的解析处理的
// 如果 import 了 css 或者 less, 那么就会直接作用于页面
import '@/styles/index.less'

// 一般基于vue的插件, 都是需要 use 一下, 例如: vue-router ElementUI vuex ...
Vue.use(ElementUI)

// 仅仅是控制控制台的一条提示(可选)
Vue.config.productionTip = false

// 将http请求模块, 挂载到原型
// 将来请求, this.$http.get(url).then(...)
Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
