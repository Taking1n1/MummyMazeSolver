import Vue from 'vue';
import App from './App.vue';

import "./assets/mystyles.scss";

Vue.config.productionTip = false;

let v = new Vue({
  el: "#app",
  components: { App },
  template: `<App/>`
});
