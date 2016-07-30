export const doThing = (store, data) => {
    store.dispatch('CHANGE_SOMETHING', data)
}

export const registerUser = (store, name, email, password) => {
    store.dispatch('SET_USER', { name, email, password })
    store.dispatch('SET_REGISTERED', true)
}