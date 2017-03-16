import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='block _10'>
            <div className='row'>
              <div className='block _100'>
                <p>meny</p>
              </div>
              <div className='block _100'>
                <p>spark</p>
              </div>
            </div>
          </div>
          <div className='block _90'>
            <h3>it works</h3>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
