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
    var user = firebase.auth().currentUser
    console.log(user.uid);

    


    this.setState({
      speed: 25
    });
  }

  render() {
    return (
      <div>


      </div>
    )
  }
}


export default Information;
