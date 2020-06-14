import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Answer from './Answer/Answer';



const Dialogs = (props) => {

    let dialogElements = 
            props.dialogsData.map ( dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = 
            props.messagesData.map ( message => <Message message={message.message} id={message.id}/> )

    let answerElements =
             props.answersData.map (answer => <Answer answer={answer.answer} id={answer.id} />)

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