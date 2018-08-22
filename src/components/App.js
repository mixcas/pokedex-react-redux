import React, { Component } from 'react';
import { Route } from 'react-router';

// Components
import Header from './Header';
import PokeListContainer from '../containers/PokeListContainer';
import PokeInfoContainer from '../containers/PokeInfoContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={PokeListContainer} />
        <Route exact path="/:name" component={PokeInfoContainer} />
      </div>
    );
  }
}

export default App;
