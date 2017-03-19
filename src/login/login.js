import React, { Component } from 'react';
import * as firebase from 'firebase';
import {browserHistory} from 'react-router';

class Login extends Component {
  handleLogin = (e) => {
    e.preventDefault();
    var email = this.refs.email.value;
    var password = this.refs.password.value;

    this.refs.email.value = '';
    this.refs.password.value = '';

    firebase.auth().signInWithEmailAndPassword(email,password)
    .catch(function(error) {
      console.log('Error : ', error);
    }).then(function(currentUser){
      console.log('user uid : ',currentUser.uid);
    });
    browserHistory.push('/');


  }

  render() {
    return(
      <div className='login_body'>
        <div className='login_form'>
          <form onSubmit={this.handleLogin}>
            <input type='text' ref='email'/>
            <input type='password' ref='password'/>
            <button>Logga in</button>
          </form>
        </div>
      </div>
    )

  }
}

export default Login;
