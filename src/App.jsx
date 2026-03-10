import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import Navigation from './layout/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Ventures from './sections/Ventures';
import Philosophy from './sections/Philosophy';
import Connect from './sections/Connect';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app">
      <Navigation />
      
      <motion.div 
        className="progress-bar" 
        style={{ scaleX }}
      />
      
      <main>
        <Hero />
        <About />
        <Ventures />
        <Philosophy />
        <Connect />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;