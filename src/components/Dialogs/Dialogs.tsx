import React, {FC} from 'react'
import s from "./Dialogs.module.css"
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Formik, Field, Form } from 'formik'
import { DialogsPageType } from '../../redux/reduxStore'

type DialogsFormProps = {
  sendMessage: (message: string) => void
}

const DialogsForm: FC<DialogsFormProps> = ({sendMessage}) => {
  return <Formik
      initialValues={{ messageBody: ""}}

      onSubmit = {(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          sendMessage(values.messageBody)
          resetForm()
          setSubmitting(false);
        }, 400)
      }}>

      {({isSubmitting}) => (
        <Form>
          <Field as="textarea" name="messageBody" />
          <button type="submit" disabled={isSubmitting}> Send Message </button>
        </Form>
      )}
    </Formik>
}


type DialogProps = {
  messagesPage: DialogsPageType
  sendMessage: (msg: string) => void
}

const Dialogs: FC<DialogProps> = ({messagesPage, sendMessage}) => {
  let dialogsElements = messagesPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
  let messagesElements = messagesPage.messages.map( m => <Message message={m.message} key={m.id}/>)

  let onHandleSendMessage = (messageBody: string) => {
    sendMessage(messageBody)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>  
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div> {messagesElements} </div>
        <DialogsForm sendMessage={onHandleSendMessage}/>
        </div>
    </div>
  )
}

export default Dialogs