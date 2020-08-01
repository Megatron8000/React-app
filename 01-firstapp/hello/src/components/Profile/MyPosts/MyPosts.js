import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import ava from './ava.png';

const MyPosts = (props) => {

  let postElements =
    props.postData.map(post => <Post message={post.post} likes={post.likes} id={post.id} />)

  let newPostElement = React.createRef() //создает ссылку на объект 

  let addPost = () => {
    let text = newPostElement.current.value
    props.addPost(text)
    props.updatePostText('')
  }
  // создает функцию, которая создает новый объект типа пост

  let onTextChange = () => {
    let newText = newPostElement.current.value
    props.updatePostText(newText)
  }
  // позволяет изменить строго заданное содержимое текстэреа


  return <div className={classes.wrapper}>
    <img src={ava} alt='ava' />
    <div className={classes.posts}>
      <textarea rows='5' cols='35' 
          ref={newPostElement}  
          className={classes.newPostEnter} 
          value={props.newPostText}
          onChange={onTextChange}  
          />
      <div>
        <button onClick={addPost} className={classes.button}>Post</button>
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