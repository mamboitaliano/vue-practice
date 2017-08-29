// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';  // import Vue
import vueResource from 'vue-resource'; // import vue resource
import App from './App';  // import main app component
import router from './router';

Vue.config.productionTip = false;
Vue.use(vueResource);

/* eslint-disable no-new */
new Vue({   // This is where the Vue instance is
  el: '#app',   // <--- the element we're attaching it to
  router,
  template: '<App/>',   // <--- the app component
  components: { App },
});
