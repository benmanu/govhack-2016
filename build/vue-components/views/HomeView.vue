<template>
    <div class="row home">
        <div class="col-xs-12">
            <img class="home__logo" src="dist/images/brand.png" alt="DOCKET Logo">
        </div>
    </div>
</template>
<script>
    import * as actions from '../actions'

    export default {
        components: { },
        methods: { },
        created() {
            // Do something when this view is instantiated
        },
        vuex: {
            getters: {},
            actions: actions
        }
    }
</script>