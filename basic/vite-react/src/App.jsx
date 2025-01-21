import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero'
import About from './sections/About';

const App = () => {
  return (
    <main className="text-3xl font-bold underline">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
};

export default App; 