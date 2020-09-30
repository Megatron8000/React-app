import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import ava from './ava.png';


const MyPosts = (props) => {

  let postElements =
    props.postData.map(post => <Post message={post.post} likes={post.likes} id={post.id} />) //маппинг постов из начального стейта

  let newPostElement = React.createRef() //создает ссылку на новый элемент

  let onAddPost = () => {
    props.addPost() // добавляет новый пост
  }
  
  let onTextChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text) //записывает в стейт новое значение в тектэреа
  }

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
        <button onClick={onAddPost} className={classes.button}>Post</button>
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