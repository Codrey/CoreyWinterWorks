import React, { Component } from 'react';
import './Header.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 

class Header extends Component {
      render (){
        return (

        <header className="contHeader">
            <div className="innerHeader">
            
                <h1>{this.props.titleH1}</h1>
                <h2>{this.props.titleH2}</h2>
                <p>frontEnd Developer working with bright minds creating great digital products, brands & strategy.</p>
                <a href="http://www.linkedin.com/in/coreycodrey" ref={(noreferrer) => { if (noreferrer) { this.anchorElement = noreferrer; } }}>
                    {this.props.button} 
                </a>

            </div>

        </header>

        );


    }
};

export default Header;