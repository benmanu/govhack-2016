import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	thing: 'default value'
}

const mutations = {
    // Data Import Mutations
    CHANGE_SOMETHING(state, newvalue) {
        state.thing = newvalue
    }
}

export default new Vuex.Store({
    state,
    mutations
})