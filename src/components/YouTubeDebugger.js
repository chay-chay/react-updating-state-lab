// // Code YouTubeDebugger Component Here
import React, { Component } from "react";
export default class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p",
      },
    },
  };

  handleClickBitrate = () =>{
    this.setState({
        settings: {
            ...this.state.settings, bitrate: 12}
    })  //, () => console.log(this.state.settings));
  };

  handleClickResolution = () => {
    this.setState({
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.settings.video,
            resolution: '720p'
          }
        }
      });
  
      /*
      Or this can be defined using the Object.assign method:
      
      this.setState({
        settings: Object.assign({}, this.state.settings, {
          video: Object.assign({}, this.state.settings.video, {
            resolution: '720p'
          })
        })
      });
      
      */
  }

  render() {
    return( 
    <div>
        <button className="bitrate" onClick={this.handleClickBitrate}> bitrate </button>
        <button className="resolution" onClick={this.handleClickResolution}> resolution </button>
    </div>)
  }
}
