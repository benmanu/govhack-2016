export const doThing = (store, data) => {
    store.dispatch('CHANGE_SOMETHING', data)
}
export const addHut = (store, data) => {
    store.dispatch('ADD_HUT', data)
}
export const addTrack = (store, data) => {
    store.dispatch('ADD_TRACK', data)
}
export const addCamp = (store, data) => {
    store.dispatch('ADD_CAMP', data)
}
export const getHut = (store, index) => {
    store.dispatch('GET_HUT', index)
}
export const selectHut = (store, data) => {
    store.dispatch('SELECT_HUT', data)
    store.dispatch('SELECT_TRACK', null)
    store.dispatch('SELECT_CAMP', null)
}
export const selectTrack = (store, data) => {
    store.dispatch('SELECT_TRACK', data)
    store.dispatch('SELECT_HUT', null)
    store.dispatch('SELECT_CAMP', null)
}
export const selectCamp = (store, data) => {
    store.dispatch('SELECT_CAMP', data)
    store.dispatch('SELECT_HUT', null)
    store.dispatch('SELECT_TRACK', null)
}
export const registerUser = (store, name, email, password) => {
    store.dispatch('SET_USER', { name, email, password })
    store.dispatch('SET_REGISTERED', true)
}