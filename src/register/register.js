import React , { Component } from 'react';
import * as firebase from 'firebase';

class Register extends Component {
  handleRegisterUser = (e) => {
    e.preventDefault();
    var email = this.refs.email.value;
    var password = this.refs.password.value;
    console.log('user : ', email);
    console.log('password : ', password);

    firebase.auth().createUserWithEmailAndPassword(email,password)
    .catch(function(error) {
      console.log('error : ', error);
    });


  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleRegisterUser}>
          <input type='text' ref='email'/><br/>
          <input type='password' ref='password'/>
          <button>Registrera</button>
        </form>
      </div>
    )
  }
}

export default Register;
