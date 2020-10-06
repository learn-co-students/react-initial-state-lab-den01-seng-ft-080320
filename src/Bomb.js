import React, { Component } from 'react'

export default class Bomb extends Component {

    state = {
        secondsLeft: this.props.initialCount
    }

    countDown = () => {
        if(this.state.secondsLeft > 0){
            return `${this.state.secondsLeft} seconds left before I go boom!`
        } else {
            return 'Boom!'
        }
    } 

    render() {
        return (
            <div>
                {this.countDown()}
            </div>
        )
    }
}
