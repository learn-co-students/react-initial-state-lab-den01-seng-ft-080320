// your Bomb code here!
import React, { Component } from "react"

class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }



    render() {
        if (this.props.initialCount !== 0) {
            return <h4>{this.props.initialCount} seconds left before I go boom!</h4>
        } else {
            return <h4>Boom!</h4>;
        }
    }

}


export default Bomb 
