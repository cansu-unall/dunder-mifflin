import React from 'react'
import "./Catalog.css"
import catalog_header from './catalog-header.jpeg'
import product1 from './Product1.jpeg'
import product11 from './Product11.jpeg'
import product2 from './Product2.jpeg'
import product22 from './Product22.jpeg'
import product3 from './Product3.jpeg'
import product33 from './Product33.jpeg'
import product4 from './Product4.jpeg'
import product44 from './Product44.jpeg'
import product5 from './Product5.jpeg'
import product55 from './Product55.jpeg'
import product6 from './Product6.jpeg'
import product66 from './Product66.jpeg'
import product7 from './Product7.jpeg'
import product8 from './Product8.jpeg'







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
                                   <div class="item-price">$15.00 USD</div>
                                   <img class="product-image" src={product1}/>                                   
                                   <img class="other-product-image" src={product11}/>
                                   <div></div>
                               </div>
                               <div></div>
                               <div class="item-container">
                                   <div class="item-name">Hole Punch Copy Paper</div>
                                   <div class="regular-price">Regular Price</div>
                                   <div class="item-price">$15.00 USD</div>
                                   <img class="product-image" src={product2}/>                                   
                                   <img class="other-product-image" src={product22}/>
                                   <div></div>
                               </div>
 
                               <div class="item-container">
                                   <div class="item-name">Recycled Copy Paper</div>
                                   <div class="regular-price">Regular Price</div>
                                   <div class="item-price">$20.00 USD</div>
                                   <img class="product-image" src={product3}/>                                   
                                   <img class="other-product-image" src={product33}/>
                                   <div></div>
                               </div>
                               <div class="item-container">
                                   <div class="item-name">Michael Scott Paper Co. Copy Paper</div>
                                   <div class="regular-price">Regular Price</div>
                                   <div class="item-price">$15.00 USD</div>
                                   <img class="product-image" src={product4}/>                                   
                                   <img class="other-product-image" src={product44}/>
                                   <div></div>
                               </div>
 
                               <div class="item-container">
                                   <div class="item-name">Premium Copy Paper</div>
                                   <div class="regular-price">Regular Price</div>
                                   <div class="item-price">$20.00 USD</div>
                                   <img class="product-image" src={product5}/>                                   
                                   <img class="other-product-image" src={product55}/>
                                   <div></div>
                               </div>
 
 
                               <div class="item-container">
                                   <div class="item-name">Return of the Office</div>
                                   <div class="regular-price">Regular Price</div>
                                   <div class="item-price">$20.00 USD</div>
                                   <img class="product-image" src={product6}/>                                   
                                   <img class="other-product-image" src={product66}/>
                                   <div></div>
                               </div>

                               <div class="item-container">
                                   <div class="item-name">Office Trivi Crossword Book</div>
                                   <div class="regular-price">Regular Price</div>
                                   <div class="item-price">$20.00 USD</div>
                                   <img class="product-image" src={product7}/>                                   
                                   <div></div>
                               </div>

                               <div class="item-container">
                                   <div class="item-name">İnside Dunder Mifflin</div>
                                   <div class="regular-price">Regular Price</div>
                                   <div class="item-price">$20.00 USD</div>
                                   <img class="product-image" src={product8}/>                                   
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

