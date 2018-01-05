import React from 'react';
import { NavLink } from 'react-router-dom';

import './InfoPanel.css';

const InfoPanel = () => (
  <div className="info-panel">
    <div className="info-panel-text">
      Dear Friend,
    </div>
    <div className="info-panel-text">
      This website is a source of information and collected thoughts regarding our loved one, Gareth.
    </div>
    <div className="info-panel-text">
      Share your pictures, thoughts, and stories <NavLink to="/message">here</NavLink>.
    </div>
    <div className="info-panel-text">
      We will be updating this website regularly.
    </div>
    <div className="info-panel-author">- Amy, Gareth, Lou, &amp; Rhys</div>
    {/* <br /> */}
    {/* <img className="a-g-image" src="/a-g.jpg" alt=""/> */}
  </div>
);

export default InfoPanel;
