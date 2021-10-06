import React from 'react';
import s from "./Users.module.css";
import userPhoto from "./../../assets/images/user.img";

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
                  <div> <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={s.avatar}/> </div>
                  <div> 
                  { u.followed 
                    ? <button onClick = {() => {props.unfollow(u.id)}}> Unfollow </button> 
                    : <button onClick = {() => {props.follow(u.id)}}> Follow </button>
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