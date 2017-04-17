import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Link, IndexLink, browserHistory } from 'react-router';
class About extends Component {

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
    //Auth firebase
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


      } else {
       console.log('user is not logged in :', user.uid);
         browserHistory.push('/login');


       console.log("Testing ab");

      }

  }.bind(this));
}



  render() {

    return (
      <div>About</div>
    )
  }
}

export default About;
