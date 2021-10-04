import React from 'react';
import s from "./Users.module.css";

const Users = (props) => {

  if (props.users.length === 0 ) {
    props.setUsers([
    {
      id: 1, photoUrl: "https://a2ch.ru/i/ef71b8f128934a7fdd13173962539b48", fullName: "Dmitry",
      followed: false, status: "i'm a boss", location: { city: "Minsk", country: "Belarus" }
    },
    {
      id: 2, photoUrl: "https://a2ch.ru/i/ef71b8f128934a7fdd13173962539b48", fullName: "Anton",
      followed: false, status: "help me disappear", location: { city: "Tver", country: "Russia" }
    },
    {
      id: 3, photoUrl: "https://a2ch.ru/i/ef71b8f128934a7fdd13173962539b48", fullName: "Micola",
      followed: true, status: "AAAAAAAAAAAA", location: { city: "Kiev", country: "Ukraine" }
    },
    {
      id: 4, photoUrl: "https://a2ch.ru/i/ef71b8f128934a7fdd13173962539b48", fullName: "Vasiliy",
      followed: false, status: "tomorrow i'll get my salary", location: { city: "Moscow", country: "Russia" }
    }])
  }
  
  return (
    <div>
      {
        props.users.map(u => <div key={u.id}>
              <span> 
                <div> <img src={u.photoUrl} alt="" className={s.avatar}/> </div>
                <div> 
                { u.followed 
                  ? <button onClick = {() => {props.unfollow(u.id)}}> Unfollow </button> 
                  : <button onClick = {() => {props.follow(u.id)}}> Follow </button>
                  }
                </div>
              </span>
              <span>
                <span> 
                  <div>  {u.fullName} </div>
                  <div> {u.status} </div>
                </span>
                <span> 
                  <div>  {u.location.country}</div>
                  <div> {u.location.city} </div>
                </span>
              </span>
            </div>
          )
      }
    </div>
  );
}

export default Users;