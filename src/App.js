import React, { Component } from 'react';
import logo from './logo.svg';
import { Link, IndexLink, browserHistory } from 'react-router';
import Nav from './sidekick/nav';
import './App.scss';
import * as firebase from 'firebase';
import './style/login.scss';
import Login from './login/login';



class App extends Component {
  constructor() {
    super();
    this.state = {
      userIsLoggedIn: false
    };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(function(user) {
      this.setState({
        userIsLoggedIn: user ? true : false
      });
    }.bind(this));

  }

  render() {
    if (this.state.userIsLoggedIn) {

    return (
      <div className='body_container'>
        <Nav/>
        <div className='body_content'>
          {this.props.children}
        </div>

      </div>

    );
    } else {
      return (
        <Login />
      )
    }
  }
}

export default App;
