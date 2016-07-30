<template>
    <nav class="header navbar navbar-fixed-top navbar-dark bg-inverse">
        <a class="navbar-brand" href="/">GovHack - 2016</a>

        <a href="#" title="Menu" class="btn btn-primary pull-xs-right hidden-md-up js-sidebar-toggle">[M]</a>
        <a v-if="registered" href="#" title="Admin" class="btn btn-success pull-xs-right">{{ username }}</a>
        <a v-if="!registered" v-link="{ path: '/register' }" href="#" title="Admin" class="btn btn-success pull-xs-right">Register</a>
    </nav>
</template>
<script>
	export default {
		vuex: {
            getters: {
                username: state => state.user.name,
                registered: state => state.registered
            }
        }
	}
</script>