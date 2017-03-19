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
          <h3><span className='logo_side'>Side</span><span className='logo_dot'>.</span><span className='logo_kick'>Kick</span></h3>
          <form onSubmit={this.handleLogin}>
            <input type='text' ref='email' placeholder='E-mail'/>
            <input type='password' ref='password' placeholder='Password'/>
            <button>Logga in</button>
          </form>
          <div className='register_forgot'><span className='register'>Registrera</span><span className='forgot'>Glömt lösenord ?</span></div>
        </div>
      </div>
    )

  }
}

export default Login;
