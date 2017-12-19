import React from 'react';

import './Root.css';

const Root = (props) => (
  <div className="root">
    <div className="top-color-bar" />
    {props.children}
  </div>
);

export default Root;
