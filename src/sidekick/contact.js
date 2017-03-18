import React , { Component } from 'react';
import * as firebase from 'firebase';

class Contact extends Component {
  


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
