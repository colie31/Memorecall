import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoLogin from './auth/DemoLogin'

const NavBar = () => {
  return (
    <nav id="nav-bar__container">
      <ul id="nav-bar__ul">
        <li id="nav-bar__url-firstchild">
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <DemoLogin />
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;