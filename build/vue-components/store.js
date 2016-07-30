import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

const state = {
	thing: 'lol',
    huts: [],
    tracks: [],
    hut: null,
    track: null,
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

    ADD_HUT(state, newvalue) {
        state.huts.push(newvalue);
    },

    ADD_TRACK(state, newvalue) {
        state.tracks.push(newvalue);
    },

    SELECT_HUT(state, newvalue) {
        state.hut = newvalue;
    },

    SELECT_TRACK(state, newvalue) {
        state.track = newvalue;
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