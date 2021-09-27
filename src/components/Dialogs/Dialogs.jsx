import React from 'react';
import s from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={"/dialogs/" + props.id}> {props.name} </NavLink>
    </div>
  ); 
}

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  );
}

const Dialogs = () => {

  let DialogsData = [
    {id:1, name:"Dimych"},
    {id:2, name:"Andrey"},
    {id:3, name:"Sveta"},
    {id:4, name:"Sasha"},
    {id:5, name:"Victor"},
    {id:6, name:"Valera"}
  ]

  let MessagesData = [
    {id:1, message:"Hi"},
    {id:2, message:"How is your it-kamasytra"},
    {id:3, message:"Yo"},
    {id:4, message:"Yo"},
    {id:5, message:"Yo"}
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>  
        <DialogItem name={DialogsData[0].name} id={DialogsData[0].id}/>
        <DialogItem name={DialogsData[1].name} id={DialogsData[1].id}/>
        <DialogItem name={DialogsData[2].name} id={DialogsData[2].id}/>
        <DialogItem name={DialogsData[3].name} id={DialogsData[3].id}/>
        <DialogItem name={DialogsData[4].name} id={DialogsData[4].id}/>
        <DialogItem name={DialogsData[5].name} id={DialogsData[5].id}/>

      </div>
      <div className={s.messages}>
        <Message message={MessagesData[0].message}/>
        <Message message={MessagesData[1].message}/>
        <Message message={MessagesData[2].message}/>
      </div>
    </div>
  );
}

export default Dialogs;