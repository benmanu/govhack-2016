<template>
  <form v-on:submit.prevent>
    <div class="row">
      <div class="col">
        <h4>Review the {{ hut.name }} </h4></div>
      <div class="col"> </div>
    </div>
    <div class="form-group" v-show="!reviewSubmited">
      <label for="review">Review:</label>
      <textarea class="form-control" rows="5" id="review"></textarea>
    </div>
    <div class="row" v-show="reviewSubmited">
      <div class="col">
        <p>Thank you for the review.</p>
      </div>
    </div>
    <div class="row" v-show="!reviewSubmited">
      <div class="col col-90"></div>
      <div class="col">
        <button class="btn btn-primary" @click="submitReview()">Submit</button>
      </div>
    </div>
  </form>

</template>
<script>
    import * as actions from '../actions'

    export default {
        components: { },
        data() {
          return {
            reviewSubmited: false,
            hut: {
              'name': "Ball Hut",
              'region': "Cantrbury",
              'nationalPark': 'Aoraki/Mount Cook National Park',
              'dateVisited': new Date() - 20 * 24 * 60 * 60 * 1000,
              'price': 5,
              'paid': true
            }

          }
        },
        methods: {
            // Perform actions of any kind
            submitReview() {
              this.$set('reviewSubmited', true);
            }
        },
        ready() {
          let hutIndex = this.$route.params.hutIndex;
          if (hutIndex !== void 0) {
              this.getHut(hutIndex);
          }
        },
        created() {
            // Do something when this view is instantiated
        },
        vuex: {
            getters: {
              huts: state => state.huts,
              hut: (state) => {
                  if (state.hut !== void 0 && state.hut) {
                      return state.hut;
                  } else {
                      return null;
                  }
              }
            },
            actions: actions
        }
    }
</script>
