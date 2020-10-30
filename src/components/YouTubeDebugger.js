// Code YouTubeDebugger Component Here

import React from 'react'

class DigitalClicker extends React.Component {

  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  clickHandler = (e) => {
    if (e.target.className === "bitrate"){
      this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      })
    } else if (e.target.className === "resolution"){
      this.setState({
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.settings.video,
            resolution: '720p'
          }
        }
      })
    }

  }

  render () {
    console.log(this.state.settings)
    return(
        <div>
          <button className="bitrate" onClick={this.clickHandler}> Bitrate</button>
          <button className = "resolution" onClick={this.clickHandler}> Resolution </button>
      </div>
    )
  }
}

export default DigitalClicker
