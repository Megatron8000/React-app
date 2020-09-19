import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogElements =
        props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements =
        props.messagesData.map(message => <Message message={message.message} id={message.id} />)

    let newMessageText = props.newMessageText  

    let onSendMessageClick = () => {
            props.sendMessage()
        //props.dispatch(updateSendMessageActionCreator())
    }

    let onNewMessageChange = (event) => {
       let text = event.target.value
       props.updateNewMessageText(text)
       //props.dispatch(updateNewMessageTextActionCreator(text))
    } 
    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                
                <div className={classes.answerContainer}>
                    <textarea value={newMessageText} 
                              onChange= {onNewMessageChange}
                              className={classes.answerEnterArea}>
                    </textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick} className={classes.button}>Send!</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs