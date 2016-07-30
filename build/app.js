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

// map - here (commented until we can integrate this into the relevant Vue component)

// let platform = new H.service.Platform({
//   app_id: 'Y1emgTiFpymkkeMT9X4k',
//   app_code: '-JWWNQtd-cu-sDr0hsswwQ'
// });

// // Obtain the default map types from the platform object:
// let defaultLayers = platform.createDefaultLayers();

// // Instantiate (and display) a map object:
// let map = new H.Map(
//   document.getElementById('map'),
//   defaultLayers.normal.map,
//   {
//     zoom: 10,
//     center: { lat: 52.5, lng: 13.4 }
//   }
// );

// // Enable the event system on the map instance:
// let mapEvents = new H.mapevents.MapEvents(map);

// // Add event listeners:
// map.addEventListener('tap', function(evt) {
//   // Log 'tap' and 'mouse' events:
//   console.log(evt.type, evt.currentPointer.type); 
// });

// let behavior = new H.mapevents.Behavior(mapEvents);

// // Create the default UI:
// let ui = H.ui.UI.createDefault(map, defaultLayers);