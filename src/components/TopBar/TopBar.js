import React from 'react';
import { NavLink } from 'react-router-dom';

import './TopBar.css';

import usaFlagSVG from './Flag_of_the_United_States.svg';
import welshFlagSVG from './Flag_of_Wales.svg';

const TopBar = () => (
  <div className="top-bar">
    <div className="top-bar-items">
      <div className="g">
        <div className="u-3-24" />
        <div className="u-6-24">
          <img
            alt=""
            className="top-bar-profile-pic"
            src="/pic-1.jpg"
          />
          <div className="top-bar-title-name">
            Gareth Howell
          </div>
        </div>
        <div className="u-8-24 top-bar-nav-area">
          <NavLink
            activeClassName="top-bar-nav-link-active"
            className="top-bar-nav-link"
            exact
            to="/"
          >
            Wall
          </NavLink>
          <NavLink
            activeClassName="top-bar-nav-link-active"
            className="top-bar-nav-link"
            to="/links"
          >
            Links
          </NavLink>
          <NavLink
            activeClassName="top-bar-nav-link-active"
            className="top-bar-nav-link"
            to="/info"
          >
            Info
          </NavLink>
        </div>
      </div>
      <img src={welshFlagSVG} className="top-bar-welsh-flag" alt="" />
      <img src={usaFlagSVG} className="top-bar-usa-flag" alt="" />
    </div>
  </div>
);

export default TopBar;
