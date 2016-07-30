<template>
	<h1>Locations</h1>

    <div id="map" class="map"></div>

    <div v-if="hut" class="card-group">
        <div class="card">
            <div class="card-block">
                <h3 class="card-title card-title--has-status">{{hut.properties.DESCRIPTION}}<span class="card-title__status card-title__status--open">{{hut.properties.STATUS}}</span></h3>
                <p class="card-text">Tararua Forest Park, Wellingon</p>
                <p class="card-text">{{hut.properties.OBJECT_TYPE_DESCRIPTION}}, {{hut.properties.DESCRIPTION}}</p>
                <p class="card-text">Track: North Head - Coastal Loop Track</p>
            </div>
            <img class="card-img-w" src="http://placehold.it/800x400" alt="Card image cap">
        </div>
        <div class="card">
            <div class="card-block">
                <h4 class="card-title">Facilities<span class="card-title__bookmark"><i class="material-icons material-icons--md">bookmark_border</i></span></h4>
                <div class="row">
                    <div class="col-xs-6">
                        <p>
                            <i class="material-icons material-icons--md">hotel</i>
                            <i class="material-icons material-icons--md">hotel</i>
                        </p>
                        <p>- 2 bunk beds</p>
                    </div>
                    <div class="col-xs-6">
                        <p><i class="material-icons material-icons--md">airline_seat_flat</i></p>
                        <p>- Mattresses</p>
                    </div>
                </div>
                <h4 class="card-title">Location</h4>
                <p>
                    NZTopo50 map sheet:<br>
                    BP53 Grid/NZTM2000<br>
                    coordinates:<br>
                    {{hut.geometry.coordinates[0]}}, {{hut.geometry.coordinates[1]}}
                </p>
                <h4 class="card-title">Approximate times from nearest huts</h4>
                <p class="card-text">
                    Anderson Memorial Hut: 2 hr<br>
                    Mid Waiohine Hut: 3 - 4 hr
                </p>
            </div>
        </div>
    </div>

    <div v-else v-if="track" class="card-group">
        <div class="card">
            <div class="card-block">
                <h3 class="card-title card-title--has-status">{{track.properties.DESCRIPTION}}</h3>
                <p class="card-text">{{track.properties.OBJECT_TYPE_DESCRIPTION}}</p>
            </div>
            <img class="card-img-w" src="http://placehold.it/800x400" alt="Card image cap">
        </div>
        <div class="card">
            <div class="card-block">
                <h4 class="card-title">Huts</h4>
                <ul>
                    <li>Lake Alabaster Hut</li>
                    <li>Steele Creek Hut</li>
                    <li>Great Walk Hut</li>
                </ul>
            </div>
        </div>
    </div>

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
                    // don't re-add tracks
                    if (this.huts.length > 0) {
                        return;
                    }

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
                    // don't re-add tracks
                    if (this.tracks.length > 0) {
                        return;
                    }

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
                        return state.hut;
                    } else {
                        return null;
                    }
                },
                track: (state) => {
                    if (state.track !== void 0 && state.track) {
                        return state.track;
                    } else {
                        return null;
                    }
                }
            },
            actions: actions
        }
    }
</script>