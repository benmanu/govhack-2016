import $ from 'jQuery';
import Button from './bootstrap/button';
import Collapse from './bootstrap/collapse';
import L from 'leaflet';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Vue components
import store from './vue-components/store';
import AppNav from './vue-components/partials/AppNav.vue';
import HomeView from './vue-components/views/HomeView.vue';
import LocationView from './vue-components/views/LocationView.vue';
import RegisterView from './vue-components/views/RegisterView.vue';

// Routing and Vue setup
Vue.config.debug = true;
Vue.config.devtools = true;

var DocketApp = Vue.extend({
  components: { AppNav },
  store
});

var router = new VueRouter({
  linkActiveClass: 'sidebar__nav-link--active'
});

router.map({
  '/': {
    component: HomeView
  },
  '/locations': {
    component: LocationView
  },
  '/register': {
    component: RegisterView
  }
});

router.start(DocketApp, '.docket-app');

// navigation
let $sidebar = $('.sidebar');

$('.js-sidebar-toggle').on('click', (e) => {
    e.preventDefault();
    $sidebar.toggleClass('sidebar--active');
});