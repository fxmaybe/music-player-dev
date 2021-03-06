// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import VueLazyload from 'vue-lazyload';
import fastclick from 'fastclick';

import '@/assets/stylus/index.styl';

Vue.config.productionTip = false

fastclick.attach(document.body);
Vue.use(VueLazyload, {
  loading: require('assets/images/default.png')
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
