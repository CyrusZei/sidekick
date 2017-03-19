import React, { Component } from 'react';
import * as firebase from 'firebase';


class Main extends Component {
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
        console.log('user :' ,user);


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
      <div>
        main
      </div>
    )
  }
}

export default Main;
