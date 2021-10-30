import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field} from 'redux-form';
import WithReduxFormComponent from './../../hoc/withReduxFrom';
import {WithValidationComponent} from './../common/FormsControl/FormsControl';
import { requiered } from '../../utilits/validators/validator';
import { MaxLengthCreator } from './../../utilits/validators/validator';


const maxLength30 = MaxLengthCreator(30);
const Textarea = WithValidationComponent('textarea');

let DialogsForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
        <div> <Field component={Textarea} name="messageBody" placeholder="Enter your message" validate={[requiered, maxLength30]}/></div>
        <div> <button>Send Message</button> </div>
    </form>
}

DialogsForm = WithReduxFormComponent(DialogsForm, 'dialog');

const Dialogs = (props) => {
  let dialogsElements = props.messagePage.dialogs.map( d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
  let messagesElements = props.messagePage.messages.map( m => <Message message={m.message} key={m.id}/>);

  let onSubmit = (formData) => {
    props.sendMessage(formData.messageBody);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>  
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div> {messagesElements} </div>
        <DialogsForm onSubmit={onSubmit}/>
        </div>
    </div>
  );
}

export default Dialogs;