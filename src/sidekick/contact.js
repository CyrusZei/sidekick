import React , { Component } from 'react';
import * as firebase from 'firebase';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        uid: '',
        email: ''
      }
    }
  }


  componentWillMount() {

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('user is logged in contact : ', user.uid, user.email);


        this.setState({
          user: {
            uid : user.uid,
            email: user.email
          }
        });


      } else
       console.log('user is not logged in :', user.uid);
    }.bind(this));
  }


  render() {
    return (
      <div>
        Contact
        user:{this.state.user.email}
      </div>
    )
  }
}

export default Contact;
