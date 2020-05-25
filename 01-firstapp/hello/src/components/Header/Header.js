import React from 'react';
import classes from './Header.module.css';
import logo from './logo.png';

const Header = () => {
    return <header className={classes.header}>
        <img src={logo} alt='logo' />
    </header>
}


export default Header