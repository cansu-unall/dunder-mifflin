import React from 'react'
import Promotion from "../../components/Promotion/Promotion";

import Gif from "../../components/Gif";
import HeaderSub from "../../components/Header/headersub";

const Home = () => {

    return ( 
        <div className="home">
        <Gif />
        <HeaderSub />
        <Promotion />
        </div>)
}
export default Home;
