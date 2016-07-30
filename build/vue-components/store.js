import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

const state = {
	thing: 'default value',
    huts: [],
    tracks: [],
    hut: null,
    track: null
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
    }
}

export default new Vuex.Store({
    state,
    mutations
})