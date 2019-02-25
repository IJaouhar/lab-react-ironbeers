import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <ul>
          <Link to={`/all`}>List of Beers</Link>
          <Link to={`/random`}>Random beer</Link>
          <Link to={`/new`}>New</Link>
        </ul>
      </div>
    )
  }
}

export default Home;
