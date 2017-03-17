import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import About from './sidekick/about';
import Contact from './sidekick/contact';
import Main from './sidekick/main';
import Information from './sidekick/features/information/information';

import './index.css';

import {Route, Router, IndexRoute, browserHistory} from 'react-router';
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Main}/>
      <Route path='contact' component={Contact}/>
      <Route path='about' component={About}/>
      <Route path='information' component={Information} />
    </Route>
  </Router>,
  document.getElementById('root')
);
