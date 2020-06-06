import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import ava from './ava.png';

const MyPosts = () => {
  return <div className={classes.wrapper}>
    <img src={ava} alt='ava' />
    <div className={classes.posts}>
      <textarea rows='5' cols='35'></textarea>
      <div>
        <button className={classes.button}>Post</button>
      </div>
      <br /><br /><br />
      <div className={classes.tape}>
        <Post message='Hello world' likes='15' />
        <Post message='React is awesome!' likes='20' />
      </div>
    </div>
  </div>

}



export default MyPosts