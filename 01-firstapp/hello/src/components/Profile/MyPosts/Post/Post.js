import React from 'react';
import classes from './Post.module.css';
import ava from './ava.png'

const Post = () => {
  return <div>
    <div className={classes.item}>
    <img src={ava} alt='ava' />
      Post1
      <div>
        <button>
          Like!
        </button>
      </div>
</div>  
  </div>
}



export default Post