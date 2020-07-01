import React from 'react';
import classes from './Friends.module.css';
import FriendElement from './FriendElement';



const Friends = (props) => {

  let friends = 
         props.avatars.map ( userPic => <FriendElement pic={userPic.value} id={userPic.id}/>)

  return  <div className={classes.container}>
    <div className={classes.subtitle}>My friends</div>
      {friends}      
    </div>
  }

  export default Friends