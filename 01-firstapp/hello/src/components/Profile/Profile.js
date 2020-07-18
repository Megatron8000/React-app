import React from 'react';
import classes from './Profile.module.css'
import banner from './banner.jpg'
import MyPosts from './MyPosts/MyPosts';
import Avatar from './UserInfo/Avatar';
import Description from './UserInfo/Description';

const Profile = (props) => {

  return <div>
    <img src={banner} alt='banner' className={classes.banner} />
    <div>
      <Avatar />
      <Description />
    </div>
    <MyPosts 
        postData= {props.postData}  
        addPost= {props.addPost} 
        newPostText= {props.newPostText}
        updatePostText= {props.updatePostText}  
        />
  </div>
}


export default Profile