import React from 'react';
import s from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
  let messagesElements = props.messages.map( message => <Message message={message.message}/>)
  let newMessageElement = React.createRef();

  const sendMessage = () => {
    alert(newMessageElement.current.value);
  }

  return (
    <div className={s.dialogs}>

      <div className={s.dialogsItems}>  
        {dialogsElements}
      </div>

      <div className={s.messages}>
        {messagesElements}

        <div>
          <textarea  ref={newMessageElement} name="" id="" cols="30" rows="2"></textarea>
        </div>

        <div>
          <button onClick={sendMessage}>Send Message</button>
        </div>

      </div>
    </div>
  );
}

export default Dialogs;