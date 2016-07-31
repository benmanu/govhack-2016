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
import HutsVisitedView from './vue-components/views/HutsVisitedView.vue';
import UserSettingsView from './vue-components/views/UserSettingsView.vue';
import ReviewView from './vue-components/views/ReviewView.vue';
import ReportView from './vue-components/views/ReportAProblemView.vue';
import PendingTransactionsView from './vue-components/views/PendingTransactionsView.vue';
import HutSearchView from './vue-components/views/HutSearchView.vue';
import HutView from './vue-components/views/HutView.vue';
import CheckInView from './vue-components/views/CheckInView.vue';

// Routing and Vue setup
Vue.config.debug = true;
Vue.config.devtools = true;

var DocketApp = Vue.extend({
  components: { AppNav },
  store,
  methods: {
    checkOnlineStatus() {
    }
  },
  created() {
    window.setInterval(() => {
      // check status every 5 sec
      this.checkOnlineStatus();
    }, 5000);
  }
});

var router = new VueRouter({
  linkActiveClass: 'sidebar__nav-link--active'
});

router.map({
  '/': {
    component: HutSearchView
  },
  '/locations': {
    component: LocationView
  },
  '/register': {
    component: RegisterView
  },
  '/huts-visited': {
    component: HutsVisitedView
  },
  '/settings': {
    component: UserSettingsView
  },
  '/review/:hutIndex': {
    component: ReviewView
  },
  '/report/:hutIndex': {
    component: ReportView
  },
  '/pending-transactions': {
    component: PendingTransactionsView
  },
  '/hut-search': {
    component: HutSearchView
  },
  '/hut/:hutIndex': {
    component: HutView
  },
  '/checkin': {
    component: CheckInView
  }

});

router.start(DocketApp, '.docket-app');

// navigation
let $sidebar = $('.sidebar');
let $content = $('.content');

$('.js-sidebar-toggle').on('click', (e) => {
    e.preventDefault();
    $sidebar.toggleClass('sidebar--active');
    $content.toggleClass('content--sidebar-active');
});
