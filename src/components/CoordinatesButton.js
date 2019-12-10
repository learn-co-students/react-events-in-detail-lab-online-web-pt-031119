// Code CoordinatesButton Component Here
import React, { Component } from 'react';
import DelayedButton from './DelayedButton.js';

export default class CoordinatesButton extends Component {


  constructor(props) {
    super(props)
    this.state = {
      receiveCoordinates: this.props.onReceiveCoordinates
    }
  }

  createCoordinates = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button onClick={this.createCoordinates} >
        Coords
      </button>
    )
  }

}
