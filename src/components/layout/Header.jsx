import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';

function Header() {
  return (
    <header className={css.header}>
        <div className={["container", css.flex].join(' ')}>
         <Link to={'/'} className={css.navLink}>Logo</Link>
         <nav  className={css.nav}>
            <NavLink to="/" className={css.navLink}>Home</NavLink>
            <NavLink to="/users" className={css.navLink}>Users</NavLink>
            <NavLink to="/contact" className={css.navLink}>Contact</NavLink>
         </nav>
        </div>
    </header>
  )
}

export default Header