import React from 'react';
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
        <div className={s.nav__item}>
          <a href="/profile">Profile</a>
        </div>
        <div className={s.nav__item}>
          <a href="/dialoges">Messages</a>
        </div>
        <div className={s.nav__item}>
          <a >News</a>
        </div>
        <div className={s.nav__item}>
          <a >Music</a>
        </div>
        <div className={s.nav__item}>
          <a >Settings</a>
        </div>
      </nav>
  );
}

export default Navbar;