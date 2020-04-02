import Vue from 'vue'
import App from './App'
import globalVariable from './language.js'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.GLOBAL = globalVariable

const app = new Vue({
    ...App
})
app.$mount()
