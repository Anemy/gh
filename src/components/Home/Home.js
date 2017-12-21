import React from 'react';

import './Home.css';

import Nav from '../Nav/Nav';
import Wall from '../Wall/Wall';
import InfoPanel from '../InfoPanel/InfoPanel';
import ImageGallery from '../ImageGallery/ImageGallery';
import TopBar from '../TopBar/TopBar';

const Home = () => (
  <div className="home">
    <TopBar />
    <div className="g">
      <div className="u-6-24" />
      <div className="u-12-24">
        <InfoPanel />
        <a className="link-to-share-post" href="/message">
          Add a post or send us a message ✉️
        </a>
        <Wall />
        <a className="link-to-share-post bottom-share-post-link" href="/message">
          Add a post or send us a message ✉️
        </a>
        <div>
          <ImageGallery />
        </div>
        {/* <br />
        <br />
        <br />
        <br />
        <img className="a-g-image" src="/a-g.jpg"/>
        <img className="a-g-image" src="/1.jpg"/>
        <img className="a-g-image" src="/2.jpg"/>
        <img className="a-g-image" src="/3.jpg"/>
        <img className="a-g-image" src="/4.jpg"/> */}
      </div>
    </div>
  </div>
);

export default Home;
