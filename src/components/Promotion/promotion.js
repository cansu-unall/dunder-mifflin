        import React from 'react'
        import image_one from './image-one.jpg'
        import image_two from './image-two.jpg'
        import image_three from './image-three.jpg'



    const Promotion = () => {

    return (
        <>
        <div className="think__green">
           <p>Dunder Mifflin is committed to improving the environment. That's why we plant a tree for each and every metric ton of paper that we ship. We look at it as an investment in the future because without trees, we have no paper and without paper, we have no business.
            At all of our branches, we've encouraged our employees to think about the environment. In Albany, we have a full-scale printer-ink recycling program in effect. In Camden, employees have adopted their very own stretch of highway. Even our Scranton branch has gotten in on the action with a "one cup per day" policy at their water cooler. Around the company, Dunder Mifflin employees are making a difference and we're proud of that.
            Just because we're a paper company, it doesn't mean we're not as green as everyone else. Join us as we try to make the world a better place while not simultaneously running us out of our own business.
            Dunder Mifflin: As Green As We Have to Be.</p>
        </div>

            <div className="image-one">           
             <img class="image-one" src={image_one}/>
            </div>

        <div className="see__our__products">
             <p>Dunder Mifflin makes it a high priority to sell top of the line products at competitive and reasonable prices. We ensure that our products meet even the most stringent of quality standards. What sets Dunder Mifflin apart from big box companies is the human touch we bring to every transaction. Our customer service is surely the reason you should buy paper from us over all other known competitors. Take a look at the products that Dunder Mifflin has to offer and place an order today!</p>
        </div>
            <div className="image-two">           
             <img class="image-two" src={image_two}/>
            </div>
        
        <div className="join__our__team">
            <p>A career at Dunder Mifflin is exciting, rewarding, and fun. With branches in five states, Dunder Mifflin is a name people trust. When you work at Dunder Mifflin, you’re carrying on our fine tradition of customer service and quality products at an affordable price. We look for people that are motivated, dedicated, organized, punctual, and responsible. If you feel you have these characteristics, please contact our Human Resources Department.
            Dunder Mifflin also hires temporary employees from various staffing services. Please contact your local staffing agency to determine if they place employees in Dunder Mifflin branches.</p>
        </div>
            <div className="image-three">           
             <img class="image-three" src={image_three}/>
        </div>

        </>
    )
}
export default Promotion;