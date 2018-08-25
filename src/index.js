import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './Navigation';
import Header from './Header';
import Works from './Works';
import Services from './Services';
import About from './About';
import Contact from './Contact';

import registerServiceWorker from './registerServiceWorker';

import * as firebase from 'firebase';

        // Initialize Firebase 
        var config = {
          apiKey: "AIzaSyDYKcOU_pqN2HwsF8jnhKc-7-c-IOmRmOY",
          authDomain: "corey-winter-works.firebaseapp.com",
          databaseURL: "https://corey-winter-works.firebaseio.com",
          projectId: "corey-winter-works",
          storageBucket: "corey-winter-works.appspot.com",
          messagingSenderId: "198679785698"
        };
        firebase.initializeApp(config); 




class App extends Component {
    render() {
        return (
            <div>
                <Navigation logoTitle="logo" />
                <Header titleH1="Corey" titleH2="Winter" button="Get in Touch" />
                <Works title="Works" />
                <Services />
                <About title="About"/>
                <Contact title="Contact"/>
           </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();