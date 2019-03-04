import Vue from 'vue';
import VueSVGIcon from 'vue-svgicon';

import App from './App';
import store from './store';

Vue.use(VueSVGIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  render(h) { return h(App); },
}).$mount('#app');
