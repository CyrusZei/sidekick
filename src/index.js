import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDYOvmVK0dsLyExx3QRIzNg026hpsvZtfI",
    authDomain: "sidekick-ca8b2.firebaseapp.com",
    databaseURL: "https://sidekick-ca8b2.firebaseio.com",
    storageBucket: "sidekick-ca8b2.appspot.com",
    messagingSenderId: "807670348038"
  };
  firebase.initializeApp(config);

  var firebaseRef = firebase.database().ref();

  firebaseRef.set({
    app : {
      name: "Side.kick",
      version: 1
    },
    isRunning : true,
    user: {
      name: "Cyrus",
      age: 32
    }
  });




import App from './App';
import About from './sidekick/about';
import Contact from './sidekick/contact';
import Main from './sidekick/main';
import Information from './sidekick/features/information/information';
import Login from './login/login';
import Register from './register/register';
import Forgot from './forgot/forgot';
import Profile from './sidekick/features/profile/profile';
import './index.css';

import {Route, Router, IndexRoute, browserHistory} from 'react-router';
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Main}/>
      <Route path='contact' component={Contact}/>
      <Route path='about' component={About}/>
      <Route path='information' component={Information} />
      <Route path='register' component={Register}/>
      <Route path='login' component={Login}/>
      <Route path='forgot' component={Forgot}/>
      <Route path='profile' component={Profile}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
