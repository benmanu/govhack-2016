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
    <div class="row" v-for="hut in huts | customSearch search">
      <div class="col">{{ hut.region }}</div>
      <div class="col">{{ hut.nationalPark }}</div>
      <div class="col">{{ hut.name }}</div>
    </div>
</template>
<script>
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
              "name": 	"Bay of Plenty" } , { "name": "Gisborne" } , { "name": "Hawke's Bay" } , {
              "name": "Manawatu-Whanganui" } , { "name": "Wellington" } , {  "name": "Tasman"  } , {
              "name": "Nelson" } , { "name": "Marlborough" } , { "name": "West Coast" } , {
              "name": "Canterbury" } , { "name": "Otago" } , { "name": "Southland"
            }],
            nps: [{
              "name": "Oxford Forest Conservation" } , { "name": 	"Tongariro National Park" } , {
              "name": 	"Arthur's Pass National Park" } , { "name": "Whanganui National Park" } , {
              "name": "Abel Tasman National Park" } , { "name": "Aoraki/Mount Cook National Park" }],
            huts: [{
              'id': 1,
              'name': "Ball Hut",
              'region': "Canterbury",
              'nationalPark': 'Aoraki/Mount Cook National Park',
              'dateVisited': new Date() - 20 * 24 * 60 * 60 * 1000,
              'price': 5,
              'paid': true
            }, {
              'id': 2,
              'name': "Bealey Spur Hut",
              'region': "Canterbury",
              'nationalPark': "Arthur's Pass National Park",
              'dateVisited': new Date() - 2 * 24 * 60 * 60 * 1000,
              'price': null,
              'paid': true
            }, {
              'id': 3,
              'name': "Black Hill Hutt",
              'region': "Canterbury",
              'nationalPark': "Oxford Forest Conservation",
              'dateVisited': new Date(),
              'price': 5,
              'paid': false
            }]
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
              hut.name.indexOf(search.name) > -1;
            })
          }
        },
        created() {
            // Do something when this view is instantiated
        },
        vuex: {
            getters: {
                thing: state => state.thing
            },
            actions: actions
        }
    }
</script>
