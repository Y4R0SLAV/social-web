import React, {FC} from 'react'
import s from "./Users.module.css"
import userPhoto from "../../assets/images/user.png"
import { NavLink } from 'react-router-dom'
import {UserType} from '../../types/types'

type Props = {
  user: UserType
  followingInProgress: Array<number>
  follow: (id: number) => void
  unfollow: (id: number) => void
}

const User: FC<Props> = ({user, followingInProgress, follow, unfollow}) => {
    return (
      <div>
        <div> 
          <NavLink to={'/profile/'+ user.id}>
            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="" className={s.avatar}/> 
          </NavLink>
        </div>
        <div> 
          { user.followed 
          ? <button disabled={followingInProgress.some(id => id === user.id)}
              onClick = {() => { unfollow(user.id) }}> Unfollow </button> 
            : <button disabled={followingInProgress.some(id => id === user.id)}
              onClick = {() => { follow(user.id) }}> Follow </button> 
          }
        </div>
        <span>
          <span> 
            <div>  {user.name} </div>
            <div> {user.status} </div>
          </span>
          <span> 
            {/* <div>  {"user.location.country"}</div>
            <div> {"user.location.city"} </div> ` */}
          </span>
        </span>          
    </div>)
}

export default User;