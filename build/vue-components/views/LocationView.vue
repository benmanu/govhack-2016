<template>
	<h1>Locations</h1>
	<div id="map" class="map"></div>
</template>
<script>
    import L from 'leaflet';
    import omnivore from 'leaflet-omnivore';

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
            const lat = -41.0995128,
                lng = 171.7986386,
                zoom = 5;

            this.map = L.map('map').setView([lat, lng], zoom);
            L.Icon.Default.imagePath = 'images/leaflet';

            // add the tile layer
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.map);

            // add the kml layer for doc huts
            let hutLayer;
            hutLayer = omnivore
                .kml('/fixtures/doc-huts.kml')
                .on('ready', function() {
                    // After the 'ready' event fires, the GeoJSON contents are accessible
                    // and you can iterate through layers to bind custom popups.
                    hutLayer.eachLayer(function(layer) {
                        // See the `.bindPopup` documentation for full details. This
                        // dataset has a property called `name`: your dataset might not,
                        // so inspect it and customize to taste.
                        const props = layer.feature.properties;
                        let content = `
                            <p>
                                Description: ${props.DESCRIPTION}
                                <br>
                                Status: ${props.STATUS}
                            </p>
                        `;
                        layer.bindPopup(content);
                    });
                })
                .addTo(this.map);
        }
    }
</script>