import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import ava from './ava.png';

const MyPosts = (props) => {
  
  let postElements = 
        props.postData.map ( post => <Post message={post.post} likes={post.likes} id={post.id} />)  

  return <div className={classes.wrapper}>
    <img src={ava} alt='ava' />
    <div className={classes.posts}>
      <textarea rows='5' cols='35'></textarea>
      <div>
        <button className={classes.button}>Post</button>
      </div>
      <br /><br /><br />
      <div className={classes.tape}>
        <div className={classes.postsHeader}> My posts</div>
        {postElements}
      </div>
    </div>
  </div>

}



export default MyPosts