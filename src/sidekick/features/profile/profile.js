import React, { Component } from 'react';
import * as firebase from 'firebase';

class Profile extends Component {
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
    return(
      <div>
        <h2>profile</h2>
        <p>User : {this.state.user.uid} </p>
        <p>email: {this.state.user.email}</p>
        <p>Email Verified: {this.state.user.emailVerified ? <span>True</span> : <span>False</span>}</p>

      </div>
    )
  }
}

export default Profile;
