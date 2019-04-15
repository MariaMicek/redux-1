import { createStore } from 'redux'

const reducer = (state, action) => {
    console.log(state)
    console.log(action)

    return 'zielona krowa'
}

export const store = createStore(reducer)

console.log(store)
console.log(store.getState())