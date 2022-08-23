import React from 'react'
import Interaction from "../Interaction/interaction";
import Navigation from '../Navigation/Navigation';



const Header = (props) => {
    return (
      <header>
            <div className="container">
                <div className="inner-content">
                   <h1></h1>
                    <Interaction/>
               
                   <Navigation />

                  
                

                
                </div>
            </div>
        </header>
    );
    };
    export default Header