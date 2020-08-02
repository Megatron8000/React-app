import React from 'react'
import Quagmire from './Quagmire.jpg'
import Brian from './Brian.jpg'
import Peter from './Peter.jpeg'

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
        
            answersData: [
                { id: 1, answer: 'Thank You!' },
            ]
    
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

    getState () {
        return this._state
    },

    _callSubscriber  () {
        
    },
    // локальный перерисовщик UI, параметры функция subscriber
    
    
    addPost (postMessage) {
        let newPost = {
            id: 5,
            post: this._state.postMessage,
            likes: 0
        }
        this._state.profilePage.postData.push(newPost)
        this._callSubscriber(this._state)
    },
    
    
    updatePostText (newText)  {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    
    // addPost, updatePostText - коллбэки, вызываемые на UI и изменяющие state
    
    subscriber (observer)  {
        this._callSubscriber = observer
    } 
    //коллбэк внешней функции, перерисовывающая ui при изменении state
    
 }



export default store
