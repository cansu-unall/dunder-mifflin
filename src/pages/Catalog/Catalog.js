import React from 'react'
import "./Catalog.css"
import catalog_header from './catalog-header.jpeg'
import product1 from './Product1.jpeg'
import product11 from './Product11.jpeg'



const Catalog = () => {

return (
<>
<img className="catalog_header_image" src={catalog_header}/>
<div className="catalog_first_part">
   <p>Dunder Mifflin this is Pam… wait, let me start over.
Dunder Mifflin this is the website where you can buy genuine Dunder Mifflin copy paper.
What sets Dunder Mifflin apart from big box companies is the human touch we bring to every transaction. Our customer service is surely the reason you should buy paper from us over all other known competitors.
Thank you and now go place an order of Dunder Mifflin copy paper.
On a personal computer note, I'm in competition with regional salesperson Dwight K. Schrute on who/what can sell the most paper. The winner receives something called a Dundie Award. Every order you place through me will help defeat this human who thinks he can outsell a computer. Haha. Imagine that. Place your order now. Thank you.

</p>
</div>

<div class = "main-wrapper">
                    <div class = "wrapper">
                        <div class="group-wrapper">
                            
                            <div class= "item-wrapper">
                                <div class="item-container">
                                    <div class="item-name">Premium Copy Paper</div>
                                    <div class="regular-price">Regular Price</div>
                                    <div class="item-price">$150</div>
                                    <img class="product-image" src={product1}/>                                    
                                    <img class="other-product-image" src={product11}/>
                                    <div></div>
                                </div>
                                <div class="item-container">
                                    <div class="item-name">Premium Copy Paper</div>
                                    <div class="regular-price">Regular Price</div>
                                    <div class="item-price">$150</div>
                                    <img class="product-image" src={product1}/>                                    
                                    <img class="other-product-image" src={product11}/>
                                    <div></div>
                                </div>

                                <div class="item-container">
                                    <div class="item-name">Premium Copy Paper</div>
                                    <div class="regular-price">Regular Price</div>
                                    <div class="item-price">$150</div>
                                    <img class="product-image" src={product1}/>                                    
                                    <img class="other-product-image" src={product11}/>
                                    <div></div>
                                </div>
                                <div class="item-container">
                                    <div class="item-name">Premium Copy Paper</div>
                                    <div class="regular-price">Regular Price</div>
                                    <div class="item-price">$150</div>
                                    <img class="product-image" src={product1}/>                                    
                                    <img class="other-product-image" src={product11}/>
                                    <div></div>
                                </div>

                                <div class="item-container">
                                    <div class="item-name">Premium Copy Paper</div>
                                    <div class="regular-price">Regular Price</div>
                                    <div class="item-price">$150</div>
                                    <img class="product-image" src={product1}/>                                    
                                    <img class="other-product-image" src={product11}/>
                                    <div></div>
                                </div>


                                <div class="item-container">
                                    <div class="item-name">Premium Copy Paper</div>
                                    <div class="regular-price">Regular Price</div>
                                    <div class="item-price">$150</div>
                                    <img class="product-image" src={product1}/>                                    
                                    <img class="other-product-image" src={product11}/>
                                    <div></div>
                                </div>



                            </div>
                            
                        </div>
                      
                    </div>
                    </div>
               
            



</>
)
}
export default Catalog;