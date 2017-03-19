import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './sidekick/nav';
import './App.scss';
import * as firebase from 'firebase';
import './style/login.scss';



class App extends Component {


  render() {
    return (
      <div className='body_container'>
        <Nav/>
        <div className='body_content'>
          {this.props.children}
        </div>

      </div>

    );
  }
}

export default App;
