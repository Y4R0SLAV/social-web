import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  console.log(props);
  const sendMessage = () => {
    props.sendMessage();
  }

  const onMessageChange = (e) => {
    let text = e.target.value;
    props.onMessageChange(text);
  }

  let dialogsElements = props.messagePage.dialogs.map( d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
  let messagesElements = props.messagePage.messages.map( m => <Message message={m.message} key={m.id}/>);
  let newMessageBody = props.messagePage.newMessageBody;

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