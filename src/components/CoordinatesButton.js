import React, { Component } from 'react'

class CoordinatesButton extends Component {

    handleClick = (event) => {
        let coordinates = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinates)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} />
            </div>
        )
    }

}

export default CoordinatesButton
