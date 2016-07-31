<template>
  <style>
    #reader-wrapper p {
      margin-top: 100px;
    }
    #reader {
      background: black;
      border: 1px solid red;
      margin-bottom: 10px;
      margin-top: 10px;
    }
  </style>
<!-- FIXME -->
<!-- ADD SPINNER AND DELAY -->
    <div id="reader-wrapper" class="row" >
      <div class="col">
      </div>
      <div class="col" v-show="!isCheckedIn&&!loading">
        <div id="reader" style="width:300px;height:250px" >
        </div>
      </div>
      <div class="col" v-show="loading">
        <img src="dist/images/spinner.gif" width="300" height="250" />
      </div>
      <div class="col" v-show="isCheckedIn" style="width:300px;height:250px;">
        <p>Thank you for checking in</p>
      </div>
      <div class="col">
      </div>
    </div>
    <div class="row">
      <div class="col">
      </div>
      <div class="col" v-show="!isCheckedIn">
        <button @click="checkin()" class="button button-positive">Check In</button>
      </div>
      <div class="col">
      </div>
    </div>

</template>
<script>
    import * as actions from '../actions'

    export default {
        components: { },
        data() {
          return {
            isCheckedIn: false,
            loading: false
          }
        },
        methods: {
            // Perform actions of any kind
            checkin() {
              this.$set('loading', true);
              setTimeout(() => {
                this.$set('isCheckedIn', true);
                this.$set('loading', false);
              }, 2000)
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
