<template>
  <ul class="list">

    <li class="item item-toggle">
       Enable Authomatic background payments
       <label class="toggle toggle-positive">
         <input type="checkbox">
         <div class="track">
           <div class="handle"></div>
         </div>
       </label>
    </li>

    <li class="item item-toggle">
       Enable Emergency Contact Notification
       <label class="toggle toggle-positive">
         <input type="checkbox">
         <div class="track">
           <div class="handle"></div>
         </div>
       </label>
    </li>
    <li class="item item-toggle">
       Enable weather condition updates
       <label class="toggle toggle-positive">
         <input type="checkbox">
         <div class="track">
           <div class="handle"></div>
         </div>
       </label>
    </li>
    <li class="item item-toggle">
       Allow App write posts To Facebook
       <label class="toggle toggle-positive">
         <input type="checkbox">
         <div class="track">
           <div class="handle"></div>
         </div>
       </label>
    </li>
  </ul>
</template>
<script>
    import * as actions from '../actions'

    export default {
        components: { },
        methods: {
            // Perform actions of any kind
            callDoThing() {
                this.doThing('new value');
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
