// your ImageSlider code here!
import React from 'react'

class imageSlider extends React.Component{
    constructor(){
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    render(){
        return(
            <div>I am on slide 0</div>
        )
    }
}

export default imageSlider
