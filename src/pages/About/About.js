import React from 'react'
import "./About.css"
import about_picture from './About-picture.jpeg'



const About = () => {

return (
<>
<div className="about_first_part">
   <p>Dunder Mifflin Inc. (stock symbol DMI) is a micro-cap regional paper and office supply distributor with an emphasis on servicing small-business clients. With a corporate office in New York City, Dunder Mifflin has branches in Buffalo, Albany, Utica, Scranton, Akron, Camden, Nashua and Yonkers.
</p>
</div>
    <img className="image-about-one" src={about_picture}/>


<div className="about_second_part">
     <p>Dunder Mifflin Inc. provides its customers quality office and information technology products, furniture, printing values and the expertise required for making informed buying choices. We provide our products and services with a dedication to the highest degree of integrity and quality of customer satisfaction, developing long-term professional relationships with employees that develop pride, creating a stable working environment and company spirit.</p>
</div>
    <div className="image-two">           
     
    </div>

<div className="about_third_part">
    <p></p>
</div>
    <div className="image-three">           
     
</div>

</>
)
}
export default About;