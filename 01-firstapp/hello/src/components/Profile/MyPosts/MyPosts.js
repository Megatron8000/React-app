import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import ava from './ava.png';

const MyPosts = (props) => {
  
  let postElements = 
        props.postData.map ( post => <Post message={post.post} likes={post.likes} id={post.id} />)  

  let  newPostElement = React.createRef() //создает ссылку на объект

  let addPost = () => { let text= newPostElement.current.value; alert(text)} 
  // создает функцию, которая выводит в алерт текущее значение из текстэреа

  return <div className={classes.wrapper}>
    <img src={ava} alt='ava' />
    <div className={classes.posts}>
      <textarea ref={newPostElement} rows='5' cols='35' className={classes.newPostEnter}></textarea>
      <div>
        <button onClick= {addPost} className={classes.button}>Post</button> 
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