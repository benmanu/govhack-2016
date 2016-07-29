import $ from 'jQuery';
import Button from './bootstrap/button';
import Collapse from './bootstrap/collapse';
import L from 'leaflet';

// navigation

let $sidebar = $('.sidebar');

$('.js-sidebar-toggle').on('click', (e) => {
    e.preventDefault();
    $sidebar.toggleClass('sidebar--active');
});

// map - here

let platform = new H.service.Platform({
  app_id: 'Y1emgTiFpymkkeMT9X4k',
  app_code: '-JWWNQtd-cu-sDr0hsswwQ'
});

// Obtain the default map types from the platform object:
let defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
let map = new H.Map(
  document.getElementById('map'),
  defaultLayers.normal.map,
  {
    zoom: 10,
    center: { lat: 52.5, lng: 13.4 }
  }
);

// Enable the event system on the map instance:
let mapEvents = new H.mapevents.MapEvents(map);

// Add event listeners:
map.addEventListener('tap', function(evt) {
  // Log 'tap' and 'mouse' events:
  console.log(evt.type, evt.currentPointer.type); 
});

let behavior = new H.mapevents.Behavior(mapEvents);

// Create the default UI:
let ui = H.ui.UI.createDefault(map, defaultLayers);
