import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../state/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => { 

  let addPost = () => {
    props.dispatch(addPostActionCreator())
  }
  // создает функцию, которая создает новый объект пост

  let onTextChange = (text) => {
    props.dispatch(updateNewPostTextActionCreator(text))
  }
  // позволяет изменить строго заданное содержимое текстэреа

  return(<MyPosts 
      updateNewPostText={onTextChange} 
      addPost={addPost}
      postData={props.postData}
      newPostText={props.newPostText}
       />)
}

export default MyPostsContainer