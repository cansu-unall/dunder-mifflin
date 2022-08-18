import React from 'react'
import Interaction from "../Interaction/ınteraction";
import HeaderSub from './headersub';




const Header = () => {
    return (
      <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">Home</div>
                    <div className="brand">About</div>
                    <div className="brand">Catalog</div>
                    <div className="brand">Contact</div>


                    <Interaction/>
                  
                

                
                </div>
            </div>
        </header>
    );
    };
    export default Header