import React from 'react'

class Bomb extends React.Component {
    constructor(props) {
        super()

        this.state = {
            secondsLeft: props.initialCount
        }
    }

    decrement = () => {
        const newSecondsLeft = this.state.secondsLeft - 1
        this.setState({
            secondsLeft: newSecondsLeft
        })
    }

    render() {
        if (this.state.secondsLeft > 0) {
            return <h1>{this.state.secondsLeft} seconds left before I go boom!</h1>
        } else {
            return <h1>Boom!</h1>
        }
    }

}

export default Bomb;
