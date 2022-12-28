import React from 'react';
import { useAppSelector } from './store/hooks';

import './index.css';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro'
import Services from './components/services/Services'
import Experience from './components/experience/Experience'
import Works from './components/works/Works'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonials/Testimonials'


function App() {
  const isDark = useAppSelector((state) => state.darkMode.isDarkMode)

  return (
    <div className="App"
      style={{
        background: isDark ? 'black' : '',
        color: isDark ? 'white': '' }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />


    </div>
  );
}

export default App;
