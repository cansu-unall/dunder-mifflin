import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css"
const Navigation = () => {

    const isActive = (data) => {
        return data.isActive ? '-active' : ''
    }
    return (
       <nav className= "header_navbar">
        <NavLink to="/home" className={(data) => data.isActive ? '-active' : ''}>Home </NavLink>
        <NavLink to="/about" className={(data) => data.isActive ? '-active' : ''}>About </NavLink>
        <NavLink to="/catalog" className={(data) => data.isActive ? '-active' : ''}>Catalog </NavLink>
        <NavLink to="/contact" className={(data) => data.isActive ? '-active' : ''}>Contact </NavLink>

         </nav> 
         )
      
}
export default Navigation;