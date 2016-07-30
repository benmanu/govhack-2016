<template>
  <div class="list card">
    <div  v-for="hut in huts">
      <div class="item item-divider" @click="toggleDescription(hut.id)">
        <div class="row">
          <div class="col">
            {{ hut.name }}
            <div class="badge badge-assertive" v-show="!hut.paid"> unpaid </div>
          </div>

          <div class="col">
            {{ hut.dateVisited | date }}
          </div>
        </div>
      </div>
      <div class="item item-text-wrap" id="hut-description-{{hut.id}}" style="display: none;">
        <div class="row">
          <div class="col">Region: </div>
          <div class="col"> {{ hut.region }} </div>
        </div>
        <div class="row">
          <div class="col">Location: </div>
          <div class="col">{{ hut.nationalPark }}</div>
        </div>
        <div class="row">
          <div class="col">Price: </div>
          <div class="col">
           <span v-if="hut.price"> {{ hut.price | money  }} </span>
           <span v-else> free </span>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <button class="button button-positive" @click="">
              Write a review
            </button>
          </div>
          <div class="col">
            <button class="button button-positive" @click="">
              Report a problem
            </button>
          </div>
          <div class="col">
            <button class="button button-positive" @click="">
              Sent to friend
            </button>
          </div>
         </div>
      </div>
    </div>
  </div>
</template>
<script>
    import * as actions from '../actions'
    import moment from '../../../bower_components/moment/src/moment'
    export default {
        components: { },
        data() {
          return {
            huts: [{
              'id': 1,
              'name': "Ball Hut",
              'region': "Cantrbury",
              'nationalPark': 'Aoraki/Mount Cook National Park',
              'dateVisited': new Date(),
              'price': 5,
              'paid': true
            }, {
              'id': 2,
              'name': "Bealey Spur Hut",
              'region': "Cantrbury",
              'nationalPark': "Arthur's Pass National Park",
              'dateVisited': new Date(),
              'price': null,
              'paid': true
            }, {
              'id': 3,
              'name': "Black Hill Hutt",
              'region': "Cantrbury",
              'nationalPark': "Oxford Forest Conservation",
              'dateVisited': new Date(),
              'price': 5,
              'paid': false
            }]
          }
        },
        methods: {
            // Perform actions of any kind
            moment(date) {
              return moment(date);
            },
            toggleHutTab() {
                console.log('toggle');
            },
            toggleDescription(a) {
              let desc = document.getElementById('hut-description-' + a)
                desc.style.display = desc.style.display === "none"? "block" : "none"
            }
        },
        filters: {
          date(date) {
            return moment(date).format('MMMM Do YYYY');
          },
          money(money) {
            return money + "$";
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
