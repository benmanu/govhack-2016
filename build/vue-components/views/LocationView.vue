<template>
	<h1>Locations</h1>
	<div id="map" class="map"></div>
    <p>Huts: {{huts.length}}</p>
    <p>Tracks: {{tracks.length}}</p>
    <p>{{hut}}</p>
    <p>{{track}}</p>
</template>
<script>
    import _ from 'lodash';
    import L from 'leaflet';
    import omnivore from 'leaflet-omnivore';
    import * as actions from '../actions';

	export default {
        props: [],
        data() {
        	return {
                map: false
            };
        },
        components: { },
        methods: {
            //
        },
        created() {
            //
        },
        ready: function() {
            // create the base map
            const lat = -39.2727,
                lng = 175.5802,
                zoom = 9;

            this.map = L.map('map').setView([lat, lng], zoom);
            L.Icon.Default.imagePath = 'dist/images';

            // add the tile layer
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.map);

            // create the kml layer for doc huts
            let hutLayer;
            hutLayer = omnivore
                .kml('/fixtures/doc-huts.kml')
                .on('ready', () => {
                    // After the 'ready' event fires, the GeoJSON contents are accessible
                    // and you can iterate through layers to bind custom popups.
                    hutLayer.eachLayer((layer) => {
                        // add layer to store
                        this.addHut(layer.feature);
                    });
                });

            // on track click show details
            hutLayer.on('click', (l) => {
                if (l.layer.feature.geometry !== void 0) {
                    this.selectHut(l.layer.feature);
                }
            });

            // create the kml layer for doc huts
            let trackLayer;
            trackLayer = omnivore
                .kml('/fixtures/doc-tracks.kml')
                .on('ready', () => {
                    // After the 'ready' event fires, the GeoJSON contents are accessible
                    // and you can iterate through layers.
                    trackLayer.eachLayer((layer) => {
                        // add track to store
                        this.addTrack(layer.feature);
                    });
                });

            // on track click show details
            trackLayer.on('click', (l) => {
                if (l.layer.feature.geometry !== void 0) {
                    this.selectTrack(l.layer.feature);
                }
            });

            // add the layer to the map
            this.map.addLayer(hutLayer);
            this.map.addLayer(trackLayer);

            // add layer controls
            L.control.layers({}, {
                'Huts': hutLayer,
                'Tracks': trackLayer
            }).addTo(this.map);
        },
        vuex: {
            getters: {
                huts: state => state.huts,
                tracks: state => state.tracks,
                hut: (state) => {
                    if (state.hut !== void 0 && state.hut) {
                        return `
                            Selected hut: ${state.hut.properties.DESCRIPTION}.
                            Status: ${state.hut.properties.STATUS}. 
                        `;
                    } else {
                        return 'No hut selected'
                    }
                },
                track: (state) => {
                    if (state.track !== void 0 && state.track) {
                        return `
                            Selected track: ${state.track.properties.DESCRIPTION}.
                        `;
                    } else {
                        return 'No track selected'
                    }
                }
            },
            actions: actions
        }
    }
</script>