import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoLogin from './auth/DemoLogin'

import logo from  '../pics/journal-logo.png'

const NavBar = () => {
  return (
    <nav id="nav-bar__container">
      <ul id="nav-bar__ul">
        <li id="nav-bar__url-firstchild">
          <NavLink to="/" exact={true} activeClassName="active">
            <img className="logo" alt="" src={logo} id="logo"></img>
          </NavLink>
        </li>
        <li id="nav-bar__url-secondchild">
          <h1 id="title">Memorecall</h1>
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