const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'


const dialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage
            return state
        case SEND_MESSAGE:
            let newMessage = state.newMessageText
            state.newMessageText = ''
            state.messagesData.push({ id: 4, message: newMessage })
            return state
        default:
            return state
    }
}

 
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text
    }
}  

export const updateSendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}  

 



export default dialogsReducer