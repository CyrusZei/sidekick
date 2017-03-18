import React , { Component } from 'react';
import * as firebase from 'firebase';

class Contact extends Component {
  componentWillMount() {
    var currentUser = 'null'
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('user is logged in : ', user.uid);
        var currentUser = user.uid;
      } else
       console.log('user is not logged in :', user.uid);
    });
  }


  render() {
    return (
      <div>
        Contact
        user:{this.currentUser}
      </div>
    )
  }
}

export default Contact;
