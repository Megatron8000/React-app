import * as serviceWorker from './serviceWorker';
import store from './state/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)}  store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState())
store.subscriber((rerenderEntireTree)) // в функицю из state приходит функция, перерисовывающая страницы при изменении state 


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
