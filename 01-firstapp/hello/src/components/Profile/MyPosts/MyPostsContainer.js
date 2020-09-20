import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../state/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

  let addPost = () => {
    props.dispatch(addPostActionCreator())
  }
  let onTextChange = (text) => {
    props.dispatch(updateNewPostTextActionCreator(text))
  }
  return (<MyPosts
    updateNewPostText={onTextChange}
    addPost={addPost}
    postData={props.postData}
    newPostText={props.newPostText}
  />)
}

export default MyPostsContainer