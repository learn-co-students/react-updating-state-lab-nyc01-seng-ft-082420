// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {

    state = {
        timesClicked : 0
    }

    clickHandler = () => {
        this.setState(previousState => {
            return {
                timesClicked : previousState.timesClicked + 1
            }
        })
    }
    
    render() {
        return (
        <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
        )
    }
    
}