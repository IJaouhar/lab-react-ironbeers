import React, { Component } from 'react';
import api from '../lib/beers-services';
import Beer from './Beer';

import { Link } from 'react-router-dom';

class ListBeers extends Component {

  state = {
    beers: [],
  }

  componentDidMount() {
    this.getBeers();   
  }

  getBeers = () => {
    api.getBeers()
      .then((data) => {
        console.log(data);
        this.setState( {
          beers: data
        })
      } )
  }

  render() {
    return (
    <div>
        {this.state.beers.map((beer, id) => {
          if(id < 20){
          return <Link to={`/single/${beer._id}`}>
            <Beer 
            key={id}
            image={beer.image_url}
            name={beer.name}
            />
          </Link>
        }
      })}
      </div>
    );
  }
}
export default ListBeers;

