const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState =  {   
    postData: [
        { id: 1, post: 'Hello World!', likes: 66 },
        { id: 2, post: 'React is awesome!', likes: 26 }
    ],

    newPostText: 'What on your mind?'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                likes: 0
            }
            state.postData.push(newPost)
            state.newPostText = ''
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
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

export default profileReducer