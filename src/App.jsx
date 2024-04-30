import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header.jsx';
import About from './Components/About/About.jsx';
import Home from './Components/Home/Home.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';


function App() {
  const [currentPage, setCurrentPage] = useState('aboutme'); 
  //console.log(currentPage);
  const handlePageChange  = (page) => {
    setCurrentPage(page);    
  }
  
  return (
    <Router>
      <div className="app">
        <Header currentPage={currentPage} onPageChange={handlePageChange} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />          
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;