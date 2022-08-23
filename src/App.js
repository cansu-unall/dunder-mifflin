import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/header";

import React, { Component }  from 'react';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Catalog from "./pages/Catalog/Catalog";
import Contact from "./pages/Contact/Contact";
import Navigation from "./components/Navigation/Navigation";



function App() {
  return (
    <div className="App">
    <BrowserRouter>
   
    <Header />    

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/contact" element={<Contact />} />


    </Routes>
   
    </BrowserRouter>
          

   

  </div>
    

      
  );  
}

export default App;