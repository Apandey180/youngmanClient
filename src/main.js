/*!

=========================================================
* BootstrapVue Argon Dashboard PRO - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/bootstrap-vue-argon-dashboard-pro
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from 'vue';
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';

// router setup
import router from "./routes/router";

// google analytics
import VueAnalytics from 'vue-analytics';

// vuex setup
import store from "./store";

// currency filter
import { currency } from './common/Currency'

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';

Vue.prototype.$events = new Vue(); // Global event bus

// plugin setup
Vue.use(DashboardPlugin);
Vue.filter('currency', currency)

// use google analytics https://medium.com/js-dojo/how-to-use-google-analytics-in-your-vue-app-with-vue-analytics-9cdb913301d1
/*
Vue.use(VueAnalytics, {
  id: 'UA-12345678-1',
  router
});
*/

const base = axios.create({
  baseURL: process.env.VUE_APP_URL,
});
base.defaults.headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Basic MhjDLYbr44CfE6hivAGjq3PGUejxUeKTnbPYFbeg',
  'grant_type' : 'client_credentials'
} 

Vue.prototype.$http = base; 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
});
