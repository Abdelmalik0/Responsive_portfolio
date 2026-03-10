import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Timeline = ({ items }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className="timeline" ref={ref}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="timeline-item"
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: index * 0.2, duration: 0.6 }}
        >
          <div className="timeline-dot" />
          <div className="timeline-content glass-card">
            <span className="timeline-year">{item.year}</span>
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-description">{item.description}</p>
          </div>
        </motion.div>
      ))}

      <style>{`
        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 4rem 0;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 100%;
          background: linear-gradient(
            to bottom,
            transparent,
            var(--accent-gold),
            var(--accent-rose),
            transparent
          );
        }

        .timeline-item {
          position: relative;
          margin: 4rem 0;
          width: 50%;
        }

        .timeline-item:nth-child(odd) {
          left: 0;
          padding-right: 3rem;
        }

        .timeline-item:nth-child(even) {
          left: 50%;
          padding-left: 3rem;
        }

        .timeline-dot {
          position: absolute;
          top: 20px;
          width: 12px;
          height: 12px;
          background: var(--accent-gold);
          border-radius: 50%;
          box-shadow: 0 0 20px var(--accent-gold);
        }

        .timeline-item:nth-child(odd) .timeline-dot { right: -6px; }
        .timeline-item:nth-child(even) .timeline-dot { left: -6px; }

        .timeline-content { padding: 2rem; }

        .timeline-year {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: var(--accent-gold);
          color: var(--primary-dark);
          border-radius: 20px;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .timeline-title {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .timeline-description {
          color: var(--text-dim);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .timeline::before { left: 0; }

          .timeline-item {
            width: 100%;
            left: 0 !important;
            padding-left: 3rem !important;
            padding-right: 0 !important;
          }

          .timeline-dot { left: -6px !important; }
        }
      `}</style>
    </div>
  );
};

export default Timeline;
