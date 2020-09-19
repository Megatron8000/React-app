import React from 'react';
import { updateNewMessageTextActionCreator, updateSendMessageActionCreator } from '../../state/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let onSendMessageClick = () => {
        props.dispatch(updateSendMessageActionCreator())
    }

    let onNewMessageChange = (text) => {
       props.dispatch(updateNewMessageTextActionCreator(text))
    } 
    
    return (<Dialogs
        updateNewMessageText={onNewMessageChange}
        sendMessage={onSendMessageClick}
        dialogsData={props.dialogsData}
        messagesData={props.messagesData}
        newMessageText={props.newMessageText}
     />)
}

export default DialogsContainer