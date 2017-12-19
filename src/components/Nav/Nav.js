import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

const Nav = () => (
  <div className="left-nav">
    <img
      alt=""
      className="profile-pic"
      src="/pic-1.jpg"
    />
    <div className="title-name">
      Gareth Howell
    </div>
    <NavLink
      activeClassName="nav-link-active"
      className="nav-link"
      exact
      to="/"
    >
      > Wall
    </NavLink>
    <NavLink
      activeClassName="nav-link-active"
      className="nav-link"
      to="/links"
    >
      > Links
    </NavLink>
    <NavLink
      activeClassName="nav-link-active"
      className="nav-link"
      to="/bio"
    >
      > Bio
    </NavLink>
  </div>
);

export default Nav;
