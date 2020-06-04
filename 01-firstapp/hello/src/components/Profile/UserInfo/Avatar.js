import React from 'react';
import ava from './ava.jpg';
import classes from './Avatar.module.css';

const Avatar = () => {
    return <div className={classes.container}>
        <img src={ava} alt='avatar' className={classes.avatar} /> 
    </div>
}

export default Avatar
