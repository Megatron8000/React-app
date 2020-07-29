import React from 'react';
import Quagmire from './Quagmire.jpg'
import Brian from './Brian.jpg'
import Peter from './Peter.jpeg'

 

//черновик под фотки

const brian  = <img src={Brian} alt='Brian' />
const peter  = <img src={Peter} alt='Peter' />
const quagmire  = <img src={Quagmire} alt='Brian' />


let rerenderEntireTree = () => {
    
}

// локальный перерисовщик UI, параметры функция subscriber

let state = {

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
   
    avatars: [
        {id: 1, value: brian},
        {id: 2, value: peter},
        {id: 3, value: quagmire}
    ]
 
}

export const addPost = (postMessage) => {
    let newPost = {
        id: 5,
        post: postMessage,
        likes: 0
    }
    state.profilePage.postData.push(newPost)
    rerenderEntireTree(state)
}

export const updatePostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

// addPost, updatePostText - коллбэки, вызываемые на UI и изменяющие state

export const subscriber = (observer) => {
    rerenderEntireTree = observer
} 
//коллбэк внешней функции, перерисовывающая ui при изменении state


export default state
