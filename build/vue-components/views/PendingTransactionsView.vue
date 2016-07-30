<template>
    <h1>Pending Transactions</h1>
      <div class="row" v-for="payment in payments">
          <div class="col"> {{ payment.details }} </div>
          <div class="col"> {{ payment.amount }} </div>
          <div class="col">
            <button class="btn btn-sm btn-danger" @click="cancelTransaction()">cancel</button>
          </div>
       </div>
</template>
<script>
    import * as actions from '../actions'

    export default {
        components: { },
        data() {
          return {
            payments: [{
              "id": 1,
              "details": "The hut",
              "amount": 5
            }, {
              "id": 2,
              "details": "The hut2",
              "amount": 10
            }, {
              "id": 3,
              "details": "The hut3",
              "amount": 1
            }]
          }
        },
        methods: {
            // Perform actions of any kind
            cancelTransaction() {
              alert('transaction is canceled')
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
