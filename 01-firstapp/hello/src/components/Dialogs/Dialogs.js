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
    let dialogsData = [
        {id: 1, name: 'Peter'},
        {id: 2, name: 'Lois'},
        {id: 3, name: 'Chris'},
        {id: 4, name: 'Meg'},
        {id: 5, name: 'Brian'}
    ]

    let messagesData = [
        { id: 1, message: 'Hello World!'},
        { id: 2, message: 'React is Awesome!'},
        { id: 3, message: 'Think different'}
    ]

    let answersData = [
        {id: 1, answer: 'Thank You!'},
        {id: 2, answer: 'I want a hotdog!'}
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
               
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />

                {/*
                    Вариант записи собеседников без использования массива
                 <DialogItem name='Peter' id='1' />
                <hr />
                <DialogItem name='Lois' id='2' />
                <hr />
                <DialogItem name='Chris' id='3' />
                <hr />
                <DialogItem name='Meg' id='4' />
                <hr />
                <DialogItem name='Brian' id='5' /> */}
            </div>
            <div className={classes.messages}>
                
                <Message message={messagesData[0].message} id={messagesData[0].id} />
                <Message message={messagesData[1].message} id={messagesData[1].id} />
                <Answer answer={answersData[0].answer} id={answersData[0].id} />
                <Message message={messagesData[2].message} id={messagesData[2].id} />
                <Answer answer={answersData[1].answer} id={answersData[1].id} />


                {/*
                    Вариант записи сообщений без использования массива
                 <Message message='Hello World!' />
                <Message message='React is Awesome!' />
                <Message message='Think different' />
                <Answer answer='Thank you!' /> */}
            </div>
        </div>
    )
}

export default Dialogs