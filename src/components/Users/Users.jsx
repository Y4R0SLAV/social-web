import React from 'react';
import s from "./Users.module.css";
import userPhoto from "./../../assets/images/user.img";
import { NavLink } from 'react-router-dom';
import axios from 'axios';

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
                    ? <button onClick = {() => {
                      axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "23cebb0e-751f-4abb-9499-dd7054d8a790"
                        }})
                      .then(response => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                      });
                    }}> Unfollow </button> 
                    : <button onClick = {() => {
                      axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "23cebb0e-751f-4abb-9499-dd7054d8a790"
                        }})
                      .then(response => {
                        if (response.data.resultCode === 0) {
                          props.follow(u.id);
                        }
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
                    <div>  {"u.location.country"}</div>
                    <div> {"u.location.city"} </div>
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