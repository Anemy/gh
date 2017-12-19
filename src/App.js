import React, { Component } from 'react';
import { createStore } from 'redux';

import reducer from './reducer';

import Root from './components/Root';
import Router from './Router';

let store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Root>
        <Router store={store} />
      </Root>
    );
  }
}

export default App;
