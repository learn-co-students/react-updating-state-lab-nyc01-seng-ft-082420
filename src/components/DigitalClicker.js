import { render } from 'enzyme'
import React from 'react'

class DigitalClicker extends React.Component {

    state  = {
        timesClicked: 0,    
    }

    clickHandler  = () => {
        this.setState(prevState => ({
            timesClicked: prevState.timesClicked + 1
        }))
    }

    render(){
        return (
            <div>
                <h1>DigClicker</h1>
                <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker