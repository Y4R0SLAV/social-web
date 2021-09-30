import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState().messagePage;
  let dispatch = props.store.dispatch;

  let dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
  
  let messagesElements = state.messages.map( message => <Message message={message.message}/>);
  let newMessageBody = state.newMessageBody;

  const sendMessage = () => {
    dispatch(sendMessageCreator());
  }

  const onMessageChange = (text) => {
    updateNewMessageBodyCreator();
    dispatch(updateNewMessageBodyCreator(text));
  }

  return (
    <Dialogs  sendMessage={sendMessage} 
              onMessageChange={onMessageChange} 
              dialogsElements={dialogsElements} 
              messagesElements={messagesElements} 
              newMessageBody={newMessageBody}/>
  );
}

export default DialogsContainer;