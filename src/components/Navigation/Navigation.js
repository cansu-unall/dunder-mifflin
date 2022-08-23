import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css"
const Navigation = () => {

    const isActive = (data) => {
        return data.isActive ? '-active' : ''
    }
    return (
       <nav>
        <NavLink to="/home" className={(data) => data.isActive ? '-active' : ''}>Home Page </NavLink>
        <NavLink to="/about" className={(data) => data.isActive ? '-active' : ''}>About Page </NavLink>
        <NavLink to="/catalog" className={(data) => data.isActive ? '-active' : ''}>Catalog Page </NavLink>
        <NavLink to="/contact" className={(data) => data.isActive ? '-active' : ''}>Contact Page </NavLink>

         </nav> 
         )
      
}
export default Navigation;