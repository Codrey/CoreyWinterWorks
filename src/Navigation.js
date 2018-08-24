import React, { Component } from 'react';
import './Navigation.css';
import logo from './svg/cwwLogo.svg';


class Navigation extends Component {
  render() {
    const sections = [ 'About', 'Works', 'Contact' ]
    const navLinks = sections.map( section => {
        return (
            <li><a href={'#' + section }>{section}</a></li>
        )

    });
    return (
        <nav id="Home" className="Navigation">
            <div className="logo">
              <a href="#Home">
                <img src={logo} alt="Corey Winter logo" width="30rem" height="30rem" />
              </a>
            <h3>Codrey</h3>
            </div>
            <ul>
                {navLinks}
            </ul>
        </nav>

        

    );
  }
}

export default Navigation;