<template>
  <style>
    .item.item-divider {
      border-bottom: 2px solid black;
    }
    .item .badge {
      margin-top: 10px;
    }
    .label.label-default {
      height: 20px;
    }

  </style>
  <div class="row">
    <div class="col col-20">
    </div>
    <div class="col">
      <span class="label label-default label-lg" @click="setSearchType('all')">All</span>
      <span class="label label-default" @click="setSearchType('today')">Today</span>
      <span class="label label-default" @click="setSearchType('lastWeek')">Last week</span>
      <span class="label label-default" @click="setSearchType('lastMonth')">Last month</span>
    </div>
    <div class="col col-20">
    </div>
  </div>
  <div class="list card">
    <div  v-for="hut in huts | customDateFilter searchType">
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
            <a v-link="{ path: '/review/' + $index }" class="button button-positive">
              Write a review
            </a>
          </div>
          <div class="col">
            <a v-link="{ path: '/report/' + $index }" class="button button-assertive">
              Report a problem
            </a>
          </div>
          <div class="col" v-show="hut.price && !hut.paid">
            <button class="button button-balanced" @click="schedulePayment()">
              <i class="material-icons material-icons--sm">payment</i>Pay 4 HUT
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
    import $ from 'jquery'
    export default {
        components: { },
        data() {
          return {
            searchType: 'all',
            huts: [{
              'id': 1,
              'name': "Ball Hut",
              'region': "Cantrbury",
              'nationalPark': 'Aoraki/Mount Cook National Park',
              'dateVisited': new Date() - 20 * 24 * 60 * 60 * 1000,
              'price': 5,
              'paid': true
            }, {
              'id': 2,
              'name': "Bealey Spur Hut",
              'region': "Cantrbury",
              'nationalPark': "Arthur's Pass National Park",
              'dateVisited': new Date() - 2 * 24 * 60 * 60 * 1000,
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
        ready() {
          //FIXME: enable when server is ready
          // this.fetchHuts();
        },
        methods: {
          fetchHuts: function()
            {
                this.$http.get('/api/huts-visited', function(huts)
                {
                  console.log(huts)
                    this.$set('huts', huts);
                });
            },
            // Perform actions of any kind
            moment(date) {
              return moment(date);
            },
            toggleDescription(a) {
              $('#hut-description-' + a).toggle();
            },
            schedulePayment() {
              if (confirm("Do you want to proceed with payment")) {
                  alert('Payment approved');
                  this.$router.go('/pending-transactions');
              }
            },
            setSearchType(type) {
              this.$set('searchType', type);
            }
        },
        filters: {
          date(date) {
            return moment(date).format('MMMM Do YYYY');
          },
          money(money) {
            return money + "$";
          },
          customDateFilter(dates, searchType) {
            // TODO: define today, week and month correctly, based on dates
            switch (searchType) {
              case 'today':
                return dates.filter(date => {
                  return date.dateVisited > new Date() - 1 * 24 * 60 * 60 * 1000;
                })
                break;
              case 'lastWeek':
              return dates.filter(date => {
                return date.dateVisited > new Date() - 7 * 24 * 60 * 60 * 1000;
              })
                break;
              case 'lastMonth':
              return dates.filter(date => {
                return date.dateVisited > new Date() - 31 * 24 * 60 * 60 * 1000;
              })
                break;
              default:
                return dates;
            }
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
