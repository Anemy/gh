import React from 'react';

import './Bio.css';

import Nav from '../Nav/Nav';
import TopBar from '../TopBar/TopBar';
import Wall from '../Wall/Wall';

const Bio = () => (
  <div className="bio">
    <TopBar />
    <div className="bio g">
      <div className="u-6-24" />
      {/* <div className="u-4-24">
        <Nav />
      </div> */}
      <div className="u-12-24">
        <img className="a-g-image" src="/a-g.jpg"/>
      </div>
    </div>
  </div>
);

export default Bio;
