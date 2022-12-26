import React from 'react';
// import './App.css';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro'
import Services from './components/services/Services'
import Experience from './components/Experience/Experience'


function App() {
  return (
    <div className="App">
      
       <Navbar />
      <Intro /> 
      <Services />
      <Experience />


    </div>
  );
}

export default App;
