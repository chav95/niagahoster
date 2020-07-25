/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vuetify from 'vuetify';
Vue.use(Vuetify);

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('niagahoster', require('./components/Niagahoster.vue').default);
Vue.component('footer-nav', require('./components/sections/FooterNav.vue').default);

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
});
