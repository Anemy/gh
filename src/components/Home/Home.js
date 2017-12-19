import React from 'react';

import './Home.css';

import Nav from '../Nav/Nav';
import Wall from '../Wall/Wall';

import TopBar from '../TopBar/TopBar';

const Home = () => (
  <div className="home">
    <TopBar />
     <div className="g">
      <div className="u-6-24" />
      <div className="u-12-24">
        <Wall />
      </div>
    </div>
  </div>
);

export default Home;
