const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState =  {    
    dialogsData: [
        { id: 1, name: 'Peter' },
        { id: 2, name: 'Lois' },
        { id: 3, name: 'Chris' },
        { id: 4, name: 'Meg' },
        { id: 5, name: 'Brian' },
        { id: 6, name: 'Quagmire' }
    ],

    messagesData: [
        { id: 1, message: 'Hello World!' },
        { id: 2, message: 'React is Awesome!' },
        { id: 3, message: 'Think different' }
    ],

    newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage
            return state
        case SEND_MESSAGE:
            let newMessage = state.newMessageText
            state.newMessageText = ''
            state.messagesData.push({ id: 6, message: newMessage })
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