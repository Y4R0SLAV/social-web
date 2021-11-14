import React, {FC} from 'react'
import { UserType } from '../../types/types'
import Paginator from '../common/Paginator/Paginator'
import User from './User'

type PropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  users: Array<UserType>
  onPageChanged: (p: number) => void
  followingInProgress: Array<number>
  follow: (id: number) => void
  unfollow: (id: number) => void
}

const Users: FC<PropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props}) => {
    return (
      <div>
        { users.map(u => (<User key={u.id} user={u} followingInProgress={props.followingInProgress} 
                                                follow = {props.follow} unfollow = {props.unfollow}/>))}
        
        <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged}/>  
      </div>
    );
}

export default Users;