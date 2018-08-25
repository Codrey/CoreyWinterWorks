import React, { Component } from 'react';

import * as firebase from 'firebase';
        // Initialize Firebase 
        const config = {
          apiKey: "AIzaSyDYKcOU_pqN2HwsF8jnhKc-7-c-IOmRmOY",
          authDomain: "corey-winter-works.firebaseapp.com",
          databaseURL: "https://corey-winter-works.firebaseio.com",
          projectId: "corey-winter-works",
          storageBucket: "corey-winter-works.appspot.com",
          messagingSenderId: "198679785698"
        };
        firebase.initializeApp(config);

// Font Awesome for React ------------------

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

// Font Awesome for React -------------------



class App extends Component {
  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
