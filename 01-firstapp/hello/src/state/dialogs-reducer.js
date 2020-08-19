const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'


const dialogsReducer = (state, action) => {

    if (action.type === UPDATE_NEW_MESSAGE_TEXT) { 
        state.newMessageText = action.newMessage
        
    } else if (action.type === SEND_MESSAGE) {
        let newMessage = state.newMessageText
        state.newMessageText = ''
        state.messagesData.push({id:4, message: newMessage })
    }

    return state
}

export default dialogsReducer