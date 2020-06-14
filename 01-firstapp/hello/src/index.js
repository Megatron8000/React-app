import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let postData = [
  { id: 1, post: 'Hello World!', likes: 66},
  { id: 2, post: 'React is awesome!', likes: 26}
]

let dialogsData = [
  {id: 1, name: 'Peter'},
  {id: 2, name: 'Lois'},
  {id: 3, name: 'Chris'},
  {id: 4, name: 'Meg'},
  {id: 5, name: 'Brian'}
]

let messagesData = [
  { id: 1, message: 'Hello World!'},
  { id: 2, message: 'React is Awesome!'},
  { id: 3, message: 'Think different'}
]

let answersData = [
  {id: 1, answer: 'Thank You!'},
  {id: 2, answer: 'I want a hotdog!'}
]

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData}  messagesData={messagesData} answersData={answersData}  />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
