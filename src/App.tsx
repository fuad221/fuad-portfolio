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
import Footer from './components/footer/Footer'
import classes from './App.module.css'
import clsx from 'clsx';

function App() {
  const isDark = useAppSelector((state) => state.darkMode.isDarkMode)

  return (
    <div className={clsx(classes.App, {[classes.dark]: isDark})}
    // className="App"
    // className="App dark"
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Footer />


    </div>
  );
}

export default App;
