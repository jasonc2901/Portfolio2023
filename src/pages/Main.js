import React from 'react';
import Landing from './MainSections/Landing';
import About from './MainSections/About';
import Projects from './MainSections/Projects';
import Contact from './MainSections/Contact';
import '../styles/main.styles.css';

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Projects />
      <Contact />
    </>
  )
}
