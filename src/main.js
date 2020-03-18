import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import './fix.css';
import './variables.css';
import store from './store';
import backdrop from './plugins/backdrop';
import iconbtn from './plugins/icon-btn';
import modal from './plugins/modal';

Vue.config.productionTip = false;
Vue.use(backdrop);
Vue.use(iconbtn);
Vue.use(modal);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
