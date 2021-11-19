import React, { FC } from 'react'
import s from "./DialogItem.module.css"
import { NavLink } from 'react-router-dom'

const DialogItem: FC<{id: number, name: string}> = ({id, name}) => {
  let path = "/dialogs/" + id

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}> {name} </NavLink>
    </div>
  )
}

export default DialogItem