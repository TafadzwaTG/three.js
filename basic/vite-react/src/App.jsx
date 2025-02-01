import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero'
import About from './sections/About';
import Projects from './sections/Projects';
import Clients from './sections/Clients';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
const App = () => {
  return (
    <main className="text-3xl font-bold underline">
      <Navbar />
      <Hero />
      <Projects />
      <About />
     
      <Clients />
      <Experience />

      <Contact />
    </main>
  );
};

export default App; 