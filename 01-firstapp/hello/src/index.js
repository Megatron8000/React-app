import * as serviceWorker from './serviceWorker';
import state, { subscriber } from './state/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './state/state.js';
import {updatePostText} from './state/state.js';



let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <App state={state} addPost={addPost} updatePostText={updatePostText}/>
        </React.StrictMode>,
        document.getElementById('root')
      );
}

rerenderEntireTree(state)
subscriber(rerenderEntireTree) // в функицю из state приходит функция, перерисовывающая страницу при изменении state 


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
