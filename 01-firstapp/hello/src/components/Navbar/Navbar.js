import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
  return <nav className={classes.nav}>
    <div>
      <a href='/profile' className={classes.item}>Profile</a>
    </div>
    <div>
      <a href='/dialogs' className={classes.item}>Messages</a>
    </div>
    <div>
      <a href='/news' className={classes.item}>News</a>
    </div>
    <div>
      <a href='/music' className={classes.item}>Music</a>
    </div>
    <div>
      <a href='/settings' className={classes.item}>Settings</a>
    </div>
  </nav>
}


export default Navbar