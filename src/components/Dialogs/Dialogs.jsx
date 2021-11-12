import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Formik, Field, Form } from 'formik';

const DialogsForm = ({sendMessage}) => {
  return <Formik
      initialValues={{ messageBody: ""}}

      onSubmit = {(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          sendMessage(values.messageBody);
          resetForm();
          setSubmitting(false);
        }, 400);  
      }}>

      {({isSubmitting}) => (
        <Form>
          <Field as="textarea" name="messageBody" />
          <button type="submit" disabled={isSubmitting}> Send Message </button>
        </Form>
      )}
    </Formik>
}

const Dialogs = (props) => {
  let dialogsElements = props.messagePage.dialogs.map( d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
  let messagesElements = props.messagePage.messages.map( m => <Message message={m.message} key={m.id}/>);

  let sendMessage = (messageBody) => {
    props.sendMessage(messageBody);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>  
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div> {messagesElements} </div>
        <DialogsForm sendMessage={sendMessage}/>
        </div>
    </div>
  );
}

export default Dialogs;