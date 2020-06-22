import React from 'react';
import classes from './Friends.module.css';
import Quagmire from './Quagmire.jpg'
import Brian from './Brian.jpg'
import Peter from './Peter.jpeg'

const Friends = () => {
    return  <div className={classes.container}>
    <div className={classes.subtitle}>My friends</div>
    
    <div className={classes.friend}>
      <img src={Brian} alt='Brian' />
    </div>
    <div className={classes.friend}>
      <img src={Quagmire} alt='Quagmire' />
    </div>
    <div className={classes.friend}>
      <img src={Peter} alt='Peter' />
    </div>
  </div>
  }

  export default Friends