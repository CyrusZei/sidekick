import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './sidekick/nav';
import './App.scss';
import * as firebase from 'firebase';




class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        uid: '',
        email: '',
        emailVerified:''
      }
    };
  }


  componentWillMount() {

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('user is logged in contact : ', user.uid, user.email);
        console.log('user',user);


        this.setState({
          user: {
            uid : user.uid,
            email: user.email,
            emailVerified: user.emailVerified
          }
        });


      } else
       console.log('user is not logged in :', user.uid);

    }.bind(this));
  }



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
