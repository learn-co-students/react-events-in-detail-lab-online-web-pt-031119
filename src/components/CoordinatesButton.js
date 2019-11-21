import React, { Component } from 'react'

class CoordinatesButton extends Component {

    handleClickCoords = (event) =>  {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }


    render() {
        return (
            <button onClick={this.handleClickCoords}>
                Coordinates
            </button>
        )
    }
}

export default CoordinatesButton
