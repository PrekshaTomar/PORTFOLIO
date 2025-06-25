import React, { useEffect } from 'react';
import './App.css';

// AOS animation library
import AOS from 'aos';
import 'aos/dist/aos.css';

// Component imports
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // initialize animation on scroll
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer style={{ textAlign: "center", padding: "20px", background: "#222", color: "#fff" }}>
        © {new Date().getFullYear()} Preksha Tomar | All rights reserved.
      </footer>
    </>
  );
}

export default App;

