import { createStore, combineReducers } from 'redux'
import counter, { incActionCreator, decActionCreator } from './state/counter'
import messages, { sendAction } from './state/messages'

const reducer = combineReducers({       //Łączenie reducerów
    counter,                             // to samo: counter: counter
    messages
})

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//different ways to use dispatch
store.dispatch(incActionCreator())
store.dispatch(decActionCreator())

const message1 = sendAction('Marysia', 'hej')
const message2 = sendAction('Marysia', 'cześć')

store.dispatch(message1)
store.dispatch(message2)
store.dispatch({
    type: 'messages/SEND',
    receiver: 'Ala',
    text: 'Ma kota',
})

export const sendMessage = (receiver, text) => {
    store.dispatch(                             //dispatch zwraca akcje
        sendAction(receiver, text)
    )
}




