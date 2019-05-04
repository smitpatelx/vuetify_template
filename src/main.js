import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from "./router";
import Vuelidate from 'vuelidate';


Vue.config.productionTip = false;
Vue.use(Vuelidate);

let vm = new Vue({
  el: '#app',
  router,
  render: h => h(App),
});

export default vm;
