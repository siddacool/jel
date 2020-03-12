import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import './fix.css';
import './variables.css';
import store from './store';

Vue.config.productionTip = false;
Vue.use(require('vue-shortkey'));

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
