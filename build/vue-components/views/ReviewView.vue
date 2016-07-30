<template>
  <form v-on:submit.prevent>
    <h1>Submit a review</h1>
    <div class="row">
      <div class="col">
        <h4> Hut: {{ hut.name }} </h4></div>
      <div class="col"> </div>
    </div>
    <div class="form-group">
      <label for="review">Review:</label>
      <textarea class="form-control" rows="5" id="review"></textarea>
    </div>
    <div class="row">
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
            // FIXME: pass parameter
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
              alert('Thank you for the Review')
            }
        },
        created() {
            // Do something when this view is instantiated
        },
        vuex: {
            getters: {
            },
            actions: actions
        }
    }
</script>
