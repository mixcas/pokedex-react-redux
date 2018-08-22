import React, { Component } from 'react';
import { Route } from 'react-router';

// Components
import Header from './Header';
import PokeListContainer from '../containers/PokeListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={PokeListContainer} />
      </div>
    );
  }
}

export default App;
