export const doThing = (store, data) => {
    store.dispatch('CHANGE_SOMETHING', data)
}
export const addHut = (store, data) => {
    store.dispatch('ADD_HUT', data)
}
export const addTrack = (store, data) => {
    store.dispatch('ADD_TRACK', data)
}
export const selectHut = (store, data) => {
    store.dispatch('SELECT_HUT', data)
}
export const selectTrack = (store, data) => {
    store.dispatch('SELECT_TRACK', data)
}