import React, { Component } from 'react';
import  * as firebase from 'firebase';


class Information extends Component {
  constructor() {
    super();

    this.state = {
      speed : 10
    };
  }

  componentDidMount() {
    this.setState({
      speed: 25
    });
  }

  render() {
    return (
      <div>
        {this.state.speed}

      </div>
    )
  }
}


export default Information;
