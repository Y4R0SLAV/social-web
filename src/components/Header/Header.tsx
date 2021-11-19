import React, { FC } from 'react'
import s from "./Header.module.css"
import { NavLink } from 'react-router-dom'

type Props = {
  isAuth: boolean
  login: string | null
  logout: () => void
}

const Header: FC<Props> = ({isAuth, login, logout}) => {
  return (
    <header className={s.header}>
      
      <img src="https://yt3.ggpht.com/a/AATXAJwlb4OFgfzmzyNmNIwWwcWvcb-K-Ifv7QQB2bVUrw=s900-c-k-c0xffffffff-no-rj-mo" alt=""/>
      <div className={s.loginBlock}> 
        {isAuth 
        ? <div> {login}  - <button onClick={logout}> Logout </button> </div>
        : <NavLink to={'login'}> Login </NavLink>}
      </div>
    </header>
  )
}

export default Header