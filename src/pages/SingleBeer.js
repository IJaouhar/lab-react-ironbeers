import React, { Component } from 'react'
import api from '../lib/beers-services';

class SingleBeer extends Component {
  state = {
    id: this.props.match.params.id,
    beer: {}
  }

  componentDidMount() {
    this.getBeer();
  }

  getBeer = () => {
    api.getBeer(this.state.id)
      .then((data) => {
        this.setState( {
          beer: data
        })
      })
  }
  
  render() {
    const { beer } = this.state;
    return (
      <div>
        <img src={beer.image_url} alt={beer.name} />
        <h3>{beer.name}</h3>
      </div>
    )
  }
}

export default SingleBeer;