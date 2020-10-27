// Code YouTubeDebugger Component Here
import React, { Fragment } from 'react';

export default class YouTubeDebugger extends React.Component {

    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
    }

    bitrateClick = () => {
        this.setState(prevState => {
            return {
                settings: {
                    ...prevState.settings,
                    bitrate: 12
                }
            }
        })
    }

    resolutionClick = () => {
        this.setState(prevState => {
            return {
                settings: {
                    ...prevState.settings,
                    video: {resolution: '720p'}
                }
            }
        })
    }

    render() {
        return (
            <Fragment>
                <button className="bitrate" onClick={this.bitrateClick}>Change bitrate</button>
                <button className="resolution"onClick={this.resolutionClick}>Change resolution</button>
            </Fragment>
        )
    }
    
}