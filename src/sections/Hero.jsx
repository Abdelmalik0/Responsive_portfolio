import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../UI/MagneticButton';
import GradientText from '../UI/GradientText';
import TiltCard from '../UI/TiltCard';

const Hero = () => {
  const containerRef = useRef(null);
  const [floatingShapes] = useState(() =>
    Array(6).fill(null).map(() => ({
      size: Math.random() * 100 + 50,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    }))
  );

  return (
    <section className="section hero" ref={containerRef} id="home">
      {/* Floating Background Shapes */}
      <div className="floating-shapes">
        {floatingShapes.map((shape, i) => (
          <motion.div
            key={i}
            className="shape"
            style={{
              width: shape.size,
              height: shape.size,
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              background: `radial-gradient(circle at 30% 30%, var(--accent-gold), transparent)`,
              filter: 'blur(50px)',
              opacity: 0.1,
              position: 'absolute',
              borderRadius: '50%',
              pointerEvents: 'none',
            }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -80, 60, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: shape.delay,
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
            className="hero-text"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <GradientText className="hero-greeting">
                Entrepreneur &amp; Visionary
              </GradientText>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Crafting
              <br />
              <span className="highlight">Digital</span>
              <br />
              Realities
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-description"
            >
              Building the future through innovation, technology,
              and visionary leadership.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hero-cta"
            >
              <MagneticButton>
                <button className="btn btn-primary">
                  Explore the Vision
                  <span className="arrow">→</span>
                </button>
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hero-visual"
          >
            <TiltCard glareEnable={true} glareMaxOpacity={0.3}>
              <div className="hero-card glass-card">
                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-value">7+</span>
                    <span className="stat-label">Years</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">50+</span>
                    <span className="stat-label">Ventures</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">100M+</span>
                    <span className="stat-label">Revenue</span>
                  </div>
                </div>
                <div className="hero-quote">
                  "Innovation distinguishes between a leader and a follower"
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          overflow: hidden;
        }

        .floating-shapes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--grid-gap);
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-greeting {
          font-size: 1.8rem;
          margin-bottom: 2rem;
          display: inline-block;
        }

        .hero-text h1 {
          margin-bottom: 3rem;
        }

        .highlight {
          color: var(--accent-gold);
        }

        .hero-description {
          font-size: 2rem;
          color: var(--text-dim);
          max-width: 500px;
          margin-bottom: 4rem;
          line-height: 1.6;
        }

        .hero-cta {
          display: flex;
          gap: 2rem;
        }

        .arrow {
          margin-left: 1rem;
          transition: transform var(--transition-base);
          display: inline-block;
        }

        .btn-primary:hover .arrow {
          transform: translateX(5px);
        }

        .hero-card {
          padding: 4rem;
          text-align: center;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .stat-value {
          font-size: 3.6rem;
          font-weight: 700;
          color: var(--accent-gold);
          font-family: var(--font-secondary);
        }

        .stat-label {
          font-size: 1.2rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hero-quote {
          font-size: 1.6rem;
          font-style: italic;
          color: var(--accent-rose);
          padding-top: 2rem;
          border-top: 1px solid var(--glass-border);
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-cta {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
