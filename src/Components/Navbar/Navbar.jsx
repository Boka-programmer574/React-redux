import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className={s.nav}>
      <div className={s.item}>
          <div>
        <NavLink to='/Toyota' activeClassName={s.active}>TOYOTA</NavLink>
        </div>
        <div>
        <NavLink to='/bmw' activeClassName={s.active}>BMW</NavLink>
        </div>
        <div>
        <NavLink to='/tesla' activeClassName={s.active}>TESLA</NavLink>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
