import { createStore, combineReducers } from 'redux'
import counter, { incActionCreator, decActionCreator } from './state/counter'
import messages from './state/messages'

const reducer = combineReducers({       //Łączenie reducerów
    counter,                             // to samo: counter: counter
    messages
})

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.dispatch(incActionCreator())
store.dispatch(decActionCreator())
