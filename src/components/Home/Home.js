import React from 'react';
import { NavLink } from 'react-router-dom';

import './Home.css';

// import Nav from '../Nav/Nav';
import Wall from '../Wall/Wall';
import InfoPanel from '../InfoPanel/InfoPanel';
import ImageGallery from '../ImageGallery/ImageGallery';
import TopBar from '../TopBar/TopBar';

const Home = () => (
  <div className="home">
    <TopBar />
    <div className="home-body">
      <InfoPanel />
      <ImageGallery />
      <NavLink className="link-to-share-post" to="/message">
        Add a post or send us a message <span role="img" aria-label="mail">✉️</span>
      </NavLink>
      <Wall />
      <NavLink className="link-to-share-post bottom-share-post-link" to="/message">
        Add a post or send us a message <span role="img" aria-label="mail">✉️</span>
      </NavLink>
      <br />
    </div>
  </div>
);

export default Home;
