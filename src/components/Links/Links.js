import React from 'react';

import './Links.css';

import TopBar from '../TopBar/TopBar';

const Links = () => (
  <div className="links">
    <TopBar />
    <div className="g">
      {/* <div className="u-3-24"/>
      <div className="u-4-24">
        <Nav />
      </div> */}
      <div className="u-6-24" />
      <div className="u-12-24">
        <div className="links-link-item">
          <a className="links-link-title" href="https://www.aber.ac.uk/en/graduation/video/2017/5/">
            Aberystwyth Law School (Gareth speaks at time 33:40)
          </a>
          <br />
          <a className="links-link" href="https://www.aber.ac.uk/en/graduation/video/2017/5/">
            https://www.aber.ac.uk/en/graduation/video/2017/5/
          </a>
          <div className="links-link-desc">
            Gareth speaking to the graduating class at the Aberystwyth Law School graduation ceremony on July 20th, 2017
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Links;
