import React, { Component } from 'react';

export default class CoordinatesButon extends Component {
    
    coordinates = (event) => {
        const coord = [event.clientX, event.clientY]
        return this.props.onReceiveCoordinates(coord)
    }

    // received = () =>{
    //   return console.log(coordinates())
    // }

    render() {
        return (
         <button onClick={this.coordinates}></button>
        )
      }
}
