// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router/index'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
Vue.use(iView);
Vue.prototype.$axios = axios
var instance = axios.create({
  transformRequest: [function (data) {
    // 对 data 进行任意转换处理
    return  Qs.stringify(data, {arrayFormat: 'brackets'})
    
  }]
  
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  render: h => h(App)
})
