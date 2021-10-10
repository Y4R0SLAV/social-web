import React from 'react';
import s from "./Users.module.css";
import userPhoto from "./../../assets/images/user.img";
import { NavLink } from 'react-router-dom';
import { followApi } from '../../api/api';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);  
    let pages = [];
    for (let i = 1; i <= pagesCount ; i++) {
      pages.push(i);
    }



    return (
      <div>
        { props.users.map(u => {
          return <div key={u.id}>
                <span> 
                  <div> 
                    <NavLink to={'/profile/'+ u.id}>
                      <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={s.avatar}/> 
                    </NavLink>
                  </div>
                  <div> 
                  { u.followed 
                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick = {() => {
                      props.toggleIsFollowingProgress(true, u.id);
                      followApi.unfollow(u.id).then(data => {
                        if (data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                      props.toggleIsFollowingProgress(false, u.id);
                      }); 
                    }}> Unfollow </button> 

                    : <button disabled={props.followingInProgress.some(id => id === u.id)}onClick = {() => {
                      props.toggleIsFollowingProgress(true, u.id);
                      followApi.follow(u.id).then(data => {
                        if (data.resultCode === 0) {
                          props.follow(u.id);
                        }
                      props.toggleIsFollowingProgress(false, u.id);  
                      });
                    }}> Follow </button>
                    }
                  </div>
                </span>
                <span>
                  <span> 
                    <div>  {u.name} </div>
                    <div> {u.status} </div>
                  </span>
                  <span> 
                    {/* <div>  {"u.location.country"}</div>
                    <div> {"u.location.city"} </div> ` */}
                  </span>
                </span>
              </div>
            }
          )
        }
        
        <div>
          {pages.map( pageNumber => {
            return <span className={pageNumber === props.currentPage && s.selectedPage}
                        onClick={e => props.onPageChanged(pageNumber)}> {pageNumber} </span>
          })}
        </div>
      </div>
    );
}

export default Users;