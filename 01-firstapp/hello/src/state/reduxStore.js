import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer 
})

let store = createStore(reducers)

export default store