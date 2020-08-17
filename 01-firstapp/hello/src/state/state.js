import React from 'react'
import Quagmire from './Quagmire.jpg'
import Brian from './Brian.jpg'
import Peter from './Peter.jpeg'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
    //черновик под фотки

    brian: <img src={Brian} alt='Brian' />,
    peter: <img src={Peter} alt='Peter' />,
    quagmire: <img src={Quagmire} alt='Brian' />,



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

        // avatars: [
        //     {id: 1, value: this.brian},
        //     {id: 2, value: this.peter},
        //     {id: 3, value: this.quagmire}
        // ]

    },

    _callSubscriber() {

    },
    // локальный перерисовщик UI, параметры функция subscriber

    getState() {
        return this._state
    },

    subscriber(observer) {
        this._callSubscriber = observer
    },
    //коллбэк внешней функции, перерисовывающая ui при изменении state


    
    dispatch(action) {
        if (action.type === ADD_POST) { // экшн должен иметь свойство type
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) { 
            this._state.dialogsPage.newMessageText = action.newMessage
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = this._state.dialogsPage.newMessageText
            this._state.dialogsPage.newMessageText = ''
            this._state.dialogsPage.messagesData.push({id:4, message: newMessage })
            this._callSubscriber(this._state)
        }
    }   
}


export const addPostActionCreator = () => {   //создает экшн для добавления поста
    return {
      type: ADD_POST
    }
  }
export const updateNewPostTextActionCreator = (text) => { //создает экшн для обновления текста в текстэреа
    return {
      type: UPDATE_NEW_POST_TEXT, newText: text
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

 


export default store
