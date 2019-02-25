import React, { Component } from 'react';

class Beer extends Component {
  render() {
    const { image, name } = this.props;
    return (
      <div>
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </div>
    )
  }
}

export default Beer;