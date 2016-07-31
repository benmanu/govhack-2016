<template>
    <h1>Search</h1>
    <div class="list">
      <label class="item item-input item-select">
        <div class="input-label">
          Region
        </div>
        <select v-on:change="updateSearchValues('region', $event)">
          <option></option>
          <option v-for="region in regions" > {{ region.name }}</option>
        </select>
      </label>
      <label class="item item-input item-select">
        <div class="input-label">
          Park
        </div>
        <select v-on:change="updateSearchValues('np', $event)">
          <option></option>
          <option v-for="np in nps" > {{ np.name }}</option>
        </select>
      </label>
      <label class="item item-input">
        <input type="text" placeholder="Hut Name" v-on:blur="updateSearchValues('name', $event)">
      </label>
    </div>
    <ul class="list">
      <li class="item" v-for="hut in huts | customSearch search">
        <div class="row">
          <div class="col"><em>Region</em></div>
          <div class="col">{{ hut.properties.DESCRIPTION }}</div>
          <div class="col">{{ hut.properties.OBJECT_TYPE_DESCRIPTION }}</div>
          <div class="col">
            <a v-link="{ path: '/hut/' + $index }">
              <i class="material-icons">keyboard_arrow_right</i>
            </a>
          </div>
        </div>
      </li>
    </ul>
</template>
<script>
    import L from 'leaflet';
    import omnivore from 'leaflet-omnivore';
    import * as actions from '../actions'

    export default {
        components: { },
        data() {
          return {
            search: {
              region: '',
              np: '',
              name: ''
            },
            regions: [{
              "name": "Northland" } , { "name": 	"Auckland" } , { "name": "Waikato" } , {
              "name": "Bay of Plenty" } , { "name": "Gisborne" } , { "name": "Hawke's Bay" } , {
              "name": "Manawatu-Whanganui" } , { "name": "Wellington" } , {  "name": "Tasman"  } , {
              "name": "Nelson" } , { "name": "Marlborough" } , { "name": "West Coast" } , {
              "name": "Canterbury" } , { "name": "Otago" } , { "name": "Southland"
            }],
            nps: [{
              "name": "Oxford Forest Conservation" } , { "name": 	"Tongariro National Park" } , {
              "name": 	"Arthur's Pass National Park" } , { "name": "Whanganui National Park" } , {
              "name": "Abel Tasman National Park" } , { "name": "Aoraki/Mount Cook National Park" }]
          };
        },
        methods: {
            // Perform actions of any kind
            updateSearchValues(field, event) {
              this.$set(`search.${field}`, event.target.value);
            }
        },
        filters: {
          customSearch(huts, search) {
            return huts.filter(hut => {
              return hut.region === search.region ||
              hut.nationalPark === search.np ||
              hut.properties.DESCRIPTION.indexOf(search.name) > -1;
            })
          }
        },
        created() {
            // Do something when this view is instantiated
            if (!this.huts.length) {
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
            }
        },
        vuex: {
            getters: {
                huts: state => state.huts
            },
            actions: actions
        }
    }
</script>
