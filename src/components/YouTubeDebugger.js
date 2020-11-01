import React from 'react'

class YouTubeDebugger extends React.Component {

    state  = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }

      bitClick = () => {
          this.setState({
              settings: { 
                  ...this.state.settings,
                    bitrate: 12}})
          console.log(this.state)

      }

      resolutionClick = () => {
        this.setState({settings: {
            ...this.state.settings,    
            video: { 
                    resolution: '720p'}}})
          console.log(this.state)
    }



    render(){
        return (
            <div>
                <h1>YouTubeDebugger</h1>
                <button className="bitrate" onClick={this.bitClick}>Bitrate Button</button>
                <button className="resolution" onClick={this.resolutionClick}>Resolution Button</button>
            </div>
        )
    }
}

export default YouTubeDebugger