import React from 'react'
import Interaction from "../Interaction/ınteraction";
import home_about from './home-about.jpg'


function HeaderSub(props) {

    
    return (
    <div>
    <sub className="header__subttitle">Dunder Mifflin strives for excellence when it comes to paper distribution. We make it our goal to meet all of our customer's needs and guarantee full customer satisfaction. Dunder Mifflin offers the right products at the right price. As a business owner, you will not be disappointed when you choose Dunder Mifflin! We promise!</sub>
        <div>    <img class="home-about" src={home_about}/></div>
     </div>
    )

}

export default HeaderSub;