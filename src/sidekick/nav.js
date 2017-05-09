import React, { Component } from 'react';
import './../style/brand.scss';
import { Link, IndexLink, browserHistory } from 'react-router';
import * as firebase from 'firebase';

class Nav extends Component {

  handleLogout = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
    console.log('user logged out');
    browserHistory.push('/login');

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
                <IndexLink to='/cloud' className='meny_link' activeClassName='active color_red'>Cloud</IndexLink>
                <IndexLink to='/about' className='meny_link'  activeClassName='active color_green'>Om oss</IndexLink>
                <IndexLink to='/contact' className='meny_link' activeClassName='active color_purple'>Kontakta</IndexLink>
                <IndexLink to='/information' className='meny_link' activeClassName='active color_blue'>Information</IndexLink>
              </div>
              <div className='block _10 meny_height'>
                 <p><IndexLink to='/profile'>Profil</IndexLink>User logged in  <IndexLink to='/' onClick={this.handleLogout}>Logga ut</IndexLink></p>

              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default Nav;
