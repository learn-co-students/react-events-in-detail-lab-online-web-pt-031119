// Code CoordinatesButton Component Here

import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
        onReceiveCoordinates: this.props.onReceiveCoordinates
        }
    }

    onClick = (event) => {
        this.setState({
            onReceiveCoordinates: this.props.onReceiveCoordinates
        })
        let array = []
        let x = event.clientX
        let y = event.clientY
        array.push(x,y)
        this.props.onReceiveCoordinates(array)
    }

    

    render() {
        return (
            <button 
            onClick={this.onClick}>
            {console.log(this.props)}
            </button>
        )
    }






}