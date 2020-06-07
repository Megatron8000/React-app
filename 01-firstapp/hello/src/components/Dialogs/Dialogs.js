import React from 'react';
import classes from './Dialogs.module.css';
import friend from './friend.jpg'
import { NavLink } from 'react-router-dom';
// import Avatar from '../Profile/UserInfo/Avatar';


const DialogItem = (props) => {
    let url = '/dialogs/' + props.id

    return <div className={classes.dialog + ' ' + classes.active}>
        <img src={friend} alt='friendAva' />
        <NavLink to={url}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
        return <div className={classes.message}>{props.message}</div>
}

const Answer = (props) => {
        return <div className={classes.answer}>{props.answer}</div>
}



const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name='Peter' id='1' />
                <hr />
                <DialogItem name='Lois' id='2' />
                <hr />
                <DialogItem name='Chris' id='3' />
                <hr />
                <DialogItem name='Meg' id='4' />
                <hr />
                <DialogItem name='Brian' id='5' />
            </div>
            <div className={classes.messages}>
                <Message message='Hello World!' />
                <Message message='React is Awesome!' />
                <Message message='Think different' />
                <Answer answer='Thank you!' />
            </div>
        </div>
    )
}

export default Dialogs