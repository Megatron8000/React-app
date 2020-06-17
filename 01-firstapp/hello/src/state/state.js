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
            { id: 2, answer: 'I want a hotdog!' }
        ]

    },

    profilePage: {   //объект хранящий данные для страницы профиля

        postData: [
            { id: 1, post: 'Hello World!', likes: 66 },
            { id: 2, post: 'React is awesome!', likes: 26 }
        ]

    }

   

 
}


export default state