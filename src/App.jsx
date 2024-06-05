import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './Contexts/UserProvider.jsx';

import Header from './Components/Header/Header.jsx';
import About from './Components/About/About.jsx';
import Links from './Components/Links/Links.jsx';
import Projects from './Components/Projects/Projects.jsx';
import ViewProject from './Components/Projects/ViewProject.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';


function App() {
  return (
    <UserProvider>
      <Router>
        <div className="app">        
          <Header  />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/22"  element={<ViewProject id="22" projectName="Agenda"/>} /> 
            <Route path="/skills" element={<Skills />} />
            <Route path="/links" element={<Links />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />          
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;