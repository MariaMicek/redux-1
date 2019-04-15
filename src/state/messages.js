const SEND = 'messages/SEND'

export const sendAction = (receiver, text) => ({
    type: SEND,
    receiver,
    text
})

const initialState = {
    conversation: []
}

export default (state = initialState, action) => {
    switch (action.type){
        case SEND:
        return {
            ...state,
            conversation: state.conversation.concat({[action.receiver]: action.text})
        }
        default:
        return state
    }
}

