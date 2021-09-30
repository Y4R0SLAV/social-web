import React from 'react';
import s from "./Dialogs.module.css";
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogReducer';

const Dialogs = (props) => {
  const sendMessage = () => {
    props.sendMessage();
  }

  const onMessageChange = (e) => {
    let text = e.target.value;
    props.onMessageChange(text);
  }
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>  
        {props.dialogsElements}
      </div>
      <div className={s.messages}>
        <div> {props.messagesElements} </div>
        <div> <textarea onChange={onMessageChange} value={props.newMessageBody}></textarea> </div>
        <div> <button onClick={sendMessage}>Send Message</button> </div>
      </div>
    </div>
  );
}

export default Dialogs;