import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'

let store = {


    _state: {

        dialogsPage: {    //объект хранящий данные для страницы сообщений

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
        },

        profilePage: {   //объект хранящий данные для страницы профиля

            postData: [
                { id: 1, post: 'Hello World!', likes: 66 },
                { id: 2, post: 'React is awesome!', likes: 26 }
            ],

            newPostText: 'What on your mind?'

        },

    },

    _callSubscriber() {

    },


    getState() {
        return this._state
    },

    subscriber(observer) {
        this._callSubscriber = observer
    },
  


    
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }   
}


export default store
