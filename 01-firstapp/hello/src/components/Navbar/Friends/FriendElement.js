import React from 'react';
import classes from './Friends.module.css';
import Brian from './Brian.jpg'
import Quagmire from './Quagmire.jpg'
import Peter from './Peter.jpeg'


const Friends = (props) => {

  return  <div>
    <div className={classes.friend}>
      <img src={Brian} alt='Brian' />
    </div>
    <div className={classes.friend}>
      <img src={Quagmire} alt='Brian' />
    </div>
    <div className={classes.friend}>
      <img src={Peter} alt='Brian' />
    </div>
  </div>
  }

  export default Friends