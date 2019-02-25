import React, { Component } from 'react';
import api from '../lib/beers-services';


class RandomBeers extends Component {

  state = {
    beer: []
  }

  componentDidMount() {
    this.getRandomBeer();   
  }

  getRandomBeer = () => {
    api.getRandomBeer()
      .then((data) => {
        this.setState( {
          beer: data
        })
      } )
  }

  render() {
    const { beer } = this.state;
    if (beer.length > 0){
    return (
      <div>
        <img src={beer[0].image_url} alt={beer[0].name} />
        <h3>{beer[0].name}</h3>
      </div>
    ); } else { 
      return <div></div>
    }
  }
}
export default RandomBeers;