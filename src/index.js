import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import About from './sidekick/about';
import Contact from './sidekick/contact';
import Main from './sidekick/main';

import './index.css';

import {Route, Router, IndexRoute, hashHistory} from 'react-router';
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Main}/>
      <Route path='contact' component={Contact}/>
      <Route path='about' component={About}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
