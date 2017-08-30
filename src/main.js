// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';  // import Vue
import VueResource from 'vue-resource'; // import vue resource
import App from './App';  // import main app component
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({                     // This is where the Vue instance is
  el: '#app',
  router,
  store,
  template: '<App />',
  components: {
    App,
  },
});
