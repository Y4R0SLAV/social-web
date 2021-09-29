import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state';

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
  let messagesElements = props.messages.map( message => <Message message={message.message}/>);
  let newMessageBody = props.newMessageBody;

  const sendMessage = () => {
    props.dispatch(sendMessageCreator());
  }

  const onMessageChange = (e) => {
    let currentMessage = e.target.value;
    updateNewMessageBodyCreator();
    props.dispatch(updateNewMessageBodyCreator(currentMessage));
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>  
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div> {messagesElements} </div>
        <div> <textarea onChange={onMessageChange} value={newMessageBody}></textarea> </div>
        <div> <button onClick={sendMessage}>Send Message</button> </div>
      </div>
    </div>
  );
}

export default Dialogs;