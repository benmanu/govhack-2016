<template>
    <h1>Home</h1>
    <p>yo</p>
    <button @click="callDoThing()">{{ thing }}</button>
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