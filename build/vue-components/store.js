import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	thing: 'lol',
	registered: false,
	user: {
		name: '',
		email: '',
		password: ''
	}
}

const mutations = {
    // Data Import Mutations
    CHANGE_SOMETHING(state, newvalue) {
        state.thing = newvalue
    },
    SET_USER(state, user) {
    	state.user = user
    },
    SET_REGISTERED(state, value) {
    	state.registered = value
    }
}

export default new Vuex.Store({
    state,
    mutations
})