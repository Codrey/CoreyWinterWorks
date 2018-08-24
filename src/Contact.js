import React, { Component } from 'react';
import './Contact.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import linkedinLogo from './img/linkedinLogo.png';

   



class Contact extends Component {
      render (){
        return (





            
        <div id="Contact" className="Contact" >
            <h3>Corey says 'Hi'</h3>
            <h2>Reply ...</h2>
            <p >Message me if you think we should be working together on an interesting projects.</p>

            <div className="contactLinks">
                <div >
                  <a href="http://www.linkedin.com/in/coreycodrey" ref={(noreferrer) => { if (noreferrer) { this.anchorElement = noreferrer; } }}>
                    <img src={linkedinLogo} alt="iPhone case"/>
                  </a>
                </div>
            </div>
        </div>
        
        );


    }
};

export default Contact;