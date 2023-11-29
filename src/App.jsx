//import { useState, useEffect } from 'react'
import './App.css'
//import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

//Pages
import {LandingPage} from "./components/LandingPage";
import {Movies} from "./components/Movies"
import {Profile} from "./components/Profile"

export const  App = () => {  

  return (
    <BrowserRouter >
      <Routes>
        <Route path = "/" element = {<LandingPage/>} />
        <Route path = "/movies" element = {<Movies/>} />
        <Route path = "/profile" element = {<Profile/>} />
      </Routes>
    </BrowserRouter>    
  )
}

export default App
