<template>
  <style>
    nav .badge {
      margin-top: 5px;
    }
  </style>
    <nav class="header navbar navbar-fixed-top navbar-dark bg-inverse">
        <a class="navbar-brand" href="/">
          <img alt="Brand" width="70" height="30" src="dist/images/brand.png">
        </a>

        <span class="badge badge-balanced" v-show="isOnline">Online</span>
        <span class="badge badge-assertive"v-show="!isOnline">Offline</span>

        <a href="#" title="Menu" class="btn btn-primary pull-xs-right hidden-md-up js-sidebar-toggle">
          <i class="material-icons material-icons--sm">reorder</i></a>
        <a v-if="registered" href="#" title="Admin" class="btn btn-success pull-xs-right">{{ username }}</a>
        <a v-if="!registered" v-link="{ path: '/register' }" href="#" title="Admin" class="btn btn-success pull-xs-right">Register</a>
    </nav>
</template>
<script>
	export default {
		vuex: {
            getters: {
                username: state => state.user.name,
                registered: state => state.registered,
                isOnline: state => state.isOnline
            }
        }
	}
</script>
