// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

  handleClick = (event) => {
    const target = event.target
    setTimeout(() => {
      this.props.onDelayedClick(target)
    },this.props.delay)
  }

  render(){
    return(
      <button onClick={this.handleClick.bind(this)}>

      </button>
    )
  }
}