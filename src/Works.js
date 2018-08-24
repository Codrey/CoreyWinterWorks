import React, { Component } from 'react';
import './Works.css';
import specImg from './img/yellowSpecImg.png';
// import reactLogo from './svg/cwwLogo.svg'





class Works extends Component {
      render (){
        const sections = [ 'UX/UI', 'Design', 'Branding', 'Web Design', 'Marketing', 'Content' ]
        const csBadge  = sections.map( section => {
            return (
                // <li><a href={'#' + section }>{section}</a></li>
                <li>{section}</li>
            )
    
        });


        return (

        <div id="Works" className="works">
            <h1 className="worksTitle">{this.props.title}</h1>
  
                <div className="xocasestudy">
                    <h2>eXoWare</h2>

                    <div className="xocaseGrid" >
                        <p className="workblurb"> A iOS and iPhone accessary start-up mobile cases company. I managed the design of brand and visual language creating content design and front-end development. </p>
                        
                        <ul>
                            {csBadge}
                        </ul> 
                        
                        <img src={specImg} alt="iPhone case" />

                    </div>

                </div>

        </div>



        );


    }
};

export default Works;