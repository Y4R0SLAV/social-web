import React from 'react';
import s from "./Header.module.css";
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.header}>
      
      <img src="https://yt3.ggpht.com/a/AATXAJwlb4OFgfzmzyNmNIwWwcWvcb-K-Ifv7QQB2bVUrw=s900-c-k-c0xffffffff-no-rj-mo" alt=""/>
      <div className={s.loginBlock}> 
        {props.isAuth 
        ? <div> {props.login}  - <button onClick={props.logout}> Logout </button> </div>
        : <NavLink to={'login'}> Login </NavLink>}
      </div>
    </header>
  );
}

export default Header;