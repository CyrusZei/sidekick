import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Link, IndexLink, browserHistory } from 'react-router';

class About extends Component {

  constructor() {
    super();
    this.state = {
      user: null
    };
  }


  componentWillMount() {
    //Auth firebase

    firebase.auth().onAuthStateChanged(function(user) {
      this.setState({
        userIsLoggedIn: user ? true : false
      });
    }.bind(this));




  }



  render() {
    if (this.state.userIsLoggedIn) {
      return (
        <div>About logged in</div>
      )
    } else {
      return (
        <div>About logged out</div>
      )
    }

  }
}

export default About;
