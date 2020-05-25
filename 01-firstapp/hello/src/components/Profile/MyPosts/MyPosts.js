import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return <div className={classes.posts}>
    <textarea placeholder='Write something' rows='10' cols='45'></textarea>
    <div>
      <button className={classes.button}>Add post</button>
    </div> <br />
    <div>
      <Post message= 'Hello world' likes='15' />
      <Post message= 'React is awesome!' likes='20' />
    </div>
  </div>
}



export default MyPosts