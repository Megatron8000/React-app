import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import ava from './ava.png';

const MyPosts = () => {

  let postData = [
    { id: 1, post: 'Hello World!', likes: 66},
    { id: 2, post: 'React is awesome!', likes: 26}
  ]

  let postElements = postData
      .map ( post => <Post message={post.post} likes={post.likes} id={post.id} />)  

  return <div className={classes.wrapper}>
    <img src={ava} alt='ava' />
    <div className={classes.posts}>
      <textarea rows='5' cols='35'></textarea>
      <div>
        <button className={classes.button}>Post</button>
      </div>
      <br /><br /><br />
      <div className={classes.tape}>
        {postElements}


        {/* <Post message={postData[0].post} likes={postData[0].likes} />
        <Post message={postData[1].post} likes={postData[1].likes} /> */}
        {/* <Post message='Hello world' likes='15' />
        <Post message='React is awesome!' likes='20' /> */}
      </div>
    </div>
  </div>

}



export default MyPosts