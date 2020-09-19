import React from 'react';
import classes from './Profile.module.css'
import banner from './banner.jpg'
import Avatar from './UserInfo/Avatar';
import Description from './UserInfo/Description';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {

  return <div>
    <img src={banner} alt='banner' className={classes.banner} />
    <div>
      <Avatar />
      <Description />
    </div>
    <MyPostsContainer
      
      postData={props.postData}
      newPostText={props.newPostText}
      dispatch={props.dispatch}
    />
  </div>
}

export default Profile