import React from 'react';
import Hero from '../components/home/Hero';
import Projects from '../components/home/Projects';
import About from '../components/home/About';
import Contact from '../components/home/Contact';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
};

export default Home;