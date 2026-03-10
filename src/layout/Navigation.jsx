import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'About', 'Ventures', 'Philosophy', 'Connect'];

  return (
    <>
      <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <motion.div
            className="logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="logo-text">A.A.</span>
            <span className="logo-dot"></span>
          </motion.div>

          <div className="nav-links desktop">
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="nav-link"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button
            className="menu-toggle mobile"
            onClick={() => setIsOpen(!isOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="mobile-nav-link"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navigation {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: var(--z-sticky);
          padding: 2rem var(--container-padding);
          transition: all var(--transition-base);
        }

        .navigation.scrolled {
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--glass-border);
          padding: 1.5rem var(--container-padding);
        }

        .nav-container {
          max-width: var(--container-max-width);
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .logo-text {
          font-size: 2.4rem;
          font-weight: 700;
          letter-spacing: 2px;
          background: linear-gradient(135deg, var(--accent-gold), var(--accent-rose));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .logo-dot {
          width: 8px;
          height: 8px;
          background: var(--accent-gold);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .nav-links {
          display: flex;
          gap: 4rem;
        }

        .nav-link {
          color: var(--text-light);
          text-decoration: none;
          font-size: 1.6rem;
          font-weight: 500;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-gold), var(--accent-rose));
          transition: width var(--transition-base);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 1rem;
          z-index: calc(var(--z-sticky) + 1);
        }

        .hamburger {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--text-light);
          position: relative;
          transition: all var(--transition-base);
        }

        .hamburger::before,
        .hamburger::after {
          content: '';
          position: absolute;
          width: 24px;
          height: 2px;
          background: var(--text-light);
          transition: all var(--transition-base);
        }

        .hamburger::before { top: -6px; }
        .hamburger::after { bottom: -6px; }

        .hamburger.open { background: transparent; }
        .hamburger.open::before { transform: rotate(45deg); top: 0; }
        .hamburger.open::after { transform: rotate(-45deg); bottom: 0; }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 100vh;
          background: var(--primary-dark);
          z-index: var(--z-modal);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 3rem;
        }

        .mobile-nav-link {
          color: var(--text-light);
          text-decoration: none;
          font-size: 2.4rem;
          font-family: var(--font-secondary);
        }

        @media (max-width: 768px) {
          .nav-links.desktop { display: none; }
          .menu-toggle { display: block; }
        }
      `}</style>
    </>
  );
};

export default Navigation;
