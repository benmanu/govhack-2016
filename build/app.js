import $ from 'jQuery';
import Button from './bootstrap/button';
import Collapse from './bootstrap/collapse';
import L from 'leaflet';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Vue components
import store from './vue-components/store';
import HomeView from './vue-components/views/HomeView.vue';
import LocationView from './vue-components/views/LocationView.vue';

// navigation
let $sidebar = $('.sidebar');

$('.js-sidebar-toggle').on('click', (e) => {
    e.preventDefault();
    $sidebar.toggleClass('sidebar--active');
});

// Routing and Vue setup
Vue.config.debug = true;
Vue.config.devtools = true;

var DocketApp = Vue.extend({
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
  }
});

router.start(DocketApp, '.docket-app');