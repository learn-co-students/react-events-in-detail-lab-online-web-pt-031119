import React, { Component } from 'react';

export default class DelayedButton extends Component {

    delayed = (event) => {
        event.persist()
        window.setTimeout(this.props.onDelayedClick(event), this.props.delay)
    }

    render() {
        return (
         <button onClick={this.delayed}></button>
        )
      }
}
