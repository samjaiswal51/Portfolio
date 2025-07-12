import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from "./components/About";
import Skills from './components/Skills';
import Projects from './components/ProjectsPage';
import Contact from './pages/ContactPage';




function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar />
      
      <Hero />
      
      <About />

      <Skills />

      <Projects />

      <Contact/>
    </div>
  );
}

export default App;

