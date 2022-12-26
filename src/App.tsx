import React from 'react';
import './index.css';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro'
import Services from './components/services/Services'
import Experience from './components/Experience/Experience'
import Works from './components/works/Works'
import Portfolio from './components/Portfolio/Portfolio'


function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Intro /> 
      <Services />
      <Experience />
      <Works />
      <Portfolio />


    </div>
  );
}

export default App;
