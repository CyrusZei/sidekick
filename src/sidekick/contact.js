import React , { Component } from 'react';
import * as firebase from 'firebase';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        uid: null,
        email: null,
        emailVerified:null
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
       this.setState({
         user: {
           uid : null,
           email: null,
           emailVerified: null
         }
       });
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
