import React from 'react';
import classes from './../Dialogs.module.css';
import friend from './friend.jpg'
import { NavLink } from 'react-router-dom';



const DialogItem = (props) => {
    let url = '/dialogs/' + props.id

    return <div className={classes.dialog + ' ' + classes.active}>
        <img src={friend} alt='friendAva' />
        <NavLink to={url}>{props.name}</NavLink>
    </div>
}

export default DialogItem