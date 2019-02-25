import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ListBeers from './pages/ListBeers';
import RandomBeers from './pages/RandomBeers';
import SingleBeer from './pages/SingleBeer';
import New from './pages/New';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/all' component={ListBeers} />
          <Route exact path='/single/:id' component={SingleBeer} />
          <Route exact path='/random' component={RandomBeers} />
          <Route exact path='/new' component={New} />
        </Switch>
      </Router>
    );
  }
}


export default App;
