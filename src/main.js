import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import './fix.css';
import './variables.css';
import store from './store';
import backdrop from './plugins/backdrop';

Vue.config.productionTip = false;
Vue.use(require('vue-shortkey'));
Vue.use(backdrop);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
