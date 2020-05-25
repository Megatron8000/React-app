import React from 'react';
import classes from './Post.module.css';
import ava from './ava.png'

const Post = (props) => {
  return <div>
    <div className={classes.item}>
    <img src={ava} alt='ava' />
      {props.message} <br />
      {props.likes}
      <div>
        <button>
          Like!
        </button>
      </div>
</div>  
  </div>
}



export default Post