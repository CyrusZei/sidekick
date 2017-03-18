import React, { Component } from 'react';
import './../style/brand.scss';
import { Link, IndexLink } from 'react-router';
import * as firebase from 'firebase';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      userIsLoggedIn: false
    };
  }

  handleLogout = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
    console.log('user logged out');


  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(function(user) {
      this.setState({
        userIsLoggedIn: user ? true : false,
      });
    }.bind(this));

  }



  render() {
    return (
      <div className='meny meny_height'>
        <div className='container meny_height'>
          <div className='row meny_height'>
            <div className='block _10 meny_height'>
              <p>Side.Kick</p>
            </div>
            <div className='block _80 meny_height'>
              <IndexLink to='/' className='meny_link' activeClassName='active color_red'>Start</IndexLink>
              <IndexLink to='/about' className='meny_link'  activeClassName='active color_green'>Om oss</IndexLink>
              <IndexLink to='/contact' className='meny_link' activeClassName='active color_purple'>Kontakta</IndexLink>
              <IndexLink to='/information' className='meny_link' activeClassName='active color_blue'>Information</IndexLink>
            </div>
            <div className='block _10 meny_height'>
              {this.state.userIsLoggedIn ?  <p>User logged in</p> : <p>You need to login in</p>}
              <button onClick={this.handleLogout}>Logga ut</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
