import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {
    return (
      <div>
        { props.users.map(u => (<User key={u.id} user={u} followingInProgress={props.followingInProgress} 
                                                follow = {props.follow} unfollow = {props.unfollow}/>))}
        
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged}/>
      </div>
    );
}

export default Users;