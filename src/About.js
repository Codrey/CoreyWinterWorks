import React, { Component } from 'react';
import './About.css';



class About extends Component {
  render() {
    return (
        <div id="About" className="about">
          <div className="aboutBlurb">
            <div>
            <h2>Recently</h2>
              <p>Living and breathing code honing front-end (React) developer skilld helping early stage start-ups and some established digital industries from branding, content editing, UX design, software development.</p>
            </div>
            <div>
            <h2>Previously</h2>
              <p>Privilaged to of had the opportunity to work for Apple.inc and collaborate with some of the top tech teams across a variety of B2C & B2B industries within Europe and across the United Kingdom.</p>
            </div>
          </div>  
        </div>

        

    );
  }
}

export default About;