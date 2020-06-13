import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Answer from './Answer/Answer';


// arrays with some data

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

    let dialogElements = dialogsData
            .map ( dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = messagesData
            .map ( message => <Message message={message.message} id={message.id}/> )

    let answerElements = answersData
    .map (answer => <Answer answer={answer.answer} id={answer.id} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
               
                {dialogElements} 
            </div>
            <div className={classes.messages}>
                
                        {messagesElements}
                        {answerElements}

            </div>
        </div>
    )
}

export default Dialogs