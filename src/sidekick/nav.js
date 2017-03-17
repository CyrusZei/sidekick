import React, { Component } from 'react';
import './../style/brand.scss';
import { Link, IndexLink } from 'react-router';


class Nav extends Component {
  render() {
    return (
      <div className='meny meny_height'>
        <div className='container meny_height'>
          <div className='row meny_height'>
            <div className='block _10 meny_height'>
              Side.Kick
            </div>
            <div className='block _80 meny_height'>
              <IndexLink to='/' className='meny_link' activeClassName='active color_red'>Start</IndexLink>
              <IndexLink to='/about' className='meny_link'  activeClassName='active color_green'>Om oss</IndexLink>
              <IndexLink to='/contact' className='meny_link' activeClassName='active color_purple'>Kontakta</IndexLink>
              <IndexLink to='/information' className='meny_link' activeClassName='active color_blue'>Information</IndexLink>

            </div>
            <div className='block _10 meny_height'>
              user nav
            </div>


          </div>
        </div>

      </div>
    );
  }
}

export default Nav;
