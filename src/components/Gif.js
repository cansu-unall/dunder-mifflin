import React from "react";
import dundermifflin_gif from './dundermifflin-gif.jpg'


const Gif= () =>{
    return (
        <div className="gif-page">
            <div className="container">
                <div className="gif-content">
                <img class="dundermifflin-gif" src={dundermifflin_gif}/>                
                </div>
            </div>
        </div>
    );
};


export default Gif;

