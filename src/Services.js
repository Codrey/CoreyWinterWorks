import React, { Component } from 'react';
import './Services.css';

// import keyBoardDev from './svg/keyBoardDev.svg';




class Services extends Component {
    render() {

        return (
            <div className="Services" >
                <h3>Deeds, Offerings &</h3>
                <h2>Services</h2>
                

                <div className="row">

                    <div>
                        <span><h4>Graphic Design</h4></span>
                        <p>Visuals that tell the story</p>
                        <p>"A picture is worth a thousand words" for graphics it is innumerable</p> 
                    </div>



                    <div>
                        <span><h4>Web Dev</h4></span> 
                        <p>Adaptable web apps</p>
                        <p>pages that inspire action, suitly guiding the experience, liken to glossy magazines or comics are being read</p>
                    </div>

                    <div>
                        <span><h4>Content Editing</h4></span>
                        <p>Nurturing the niche narrative</p>
                        <p>Creating context that connects to audiences, says little yet speaks volumes</p>
                    </div>

                    {/* <div>
                        <span><h4>Favoured</h4></span>
                        
                        <p>Million of developers favour reactive Javascript</p>
                    </div>

                    <div>
                        <span><h4>Questions</h4></span>
                        <p>Ask away... </p>
                    </div> */}

                </div>
            </div>
        );
    }

}

export default Services;