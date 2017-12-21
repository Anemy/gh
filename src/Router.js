import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Bio from './components/Bio/Bio';
import Home from './components/Home/Home';
import Message from './components/SharePost/SharePost';
import Links from './components/Links/Links';

const router = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/info" component={Bio} />
        <Route path="/message" component={Message} />
        <Route path="/links" component={Links} />
      </Switch>
    </Router>
  </Provider>
);

router.propTypes = {
  store: PropTypes.object.isRequired
}

export default router;
