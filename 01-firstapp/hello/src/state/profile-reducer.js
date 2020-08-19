const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


const profileReducer = (state, action) => {

    if (action.type === ADD_POST) { // экшн должен иметь свойство type
        let newPost = {
            id: 5,
            post: this._state.profilePage.newPostText,
            likes: 0
        }
        state.postData.push(newPost)
        state.newPostText = ''
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText
    }


    return state
}


export default profileReducer