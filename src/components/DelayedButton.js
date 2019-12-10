// Code DelayedButton Component Here
import React, { Component } from 'react';
import CoordinatesButton from './CoordinatesButton.js';

export default class DelayedButton extends Component {


  constructor(props) {
    super(props)
    this.state = {
      onDelayedClick: this.props.onDelayedClick,
      delay: this.props.delay
    }
  }

  delayedClick = (event) => {
    event.persist()
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
  }

  render() {
    return (
      <button onClick={(event) => this.delayedClick(event)}>
      </button>
    )
  }
}
