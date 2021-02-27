// Code DigitalClicker Component Here

// import React, { Component } from 'react';

// export default class DigitalClicker extends Component{
//     state = {
//         timesClicked: 0
//     }

//     handleClick = () => {
//         this.state(prevState => ({
//             timesClicked: prevState.timesClicked + 1
//         }
//         ))
//     }

//     render() {
//         return(
//             <div>
//                 <button onClick={this.handleClick}> {this.state.timesClicked}</button>
//             </div>
//         )
//     }
// }


import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0,
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      timesClicked: prevState.timesClicked+1
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
}

export default DigitalClicker;