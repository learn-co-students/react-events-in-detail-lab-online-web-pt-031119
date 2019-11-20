import React, { Component } from 'react'

class DelayedButton extends Component {

    handleClick = (event) => {
      event.persist()

      setTimeout(() => {
        this.props.onDelayedClick(event)  
      }, this.props.delay)  
    }
    

    render() {
        return (
            <div>
                <button onClick={this.handleClick} />
            </div>
        )
    }

}

//setTimeout(function(){ alert("Hello"); }, 3000);

// either store the data you need in a variable (e.g. const target = event.target), 
// or we can make the event persistent by calling that method: event.persist().


export default DelayedButton