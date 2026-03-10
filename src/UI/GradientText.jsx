import React from 'react';
import { motion } from 'framer-motion';

const GradientText = ({ children, className = '', as = 'span', animate = true }) => {
  const Component = animate ? motion[as] : as;

  return (
    <>
      <Component
        className={`gradient-text ${className}`}
        {...(animate && {
          initial: { backgroundPosition: '0% 50%' },
          animate: { backgroundPosition: '100% 50%' },
          transition: {
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }
        })}
      >
        {children}
      </Component>

      <style>{`
        .gradient-text {
          background: linear-gradient(
            135deg,
            var(--accent-gold) 0%,
            var(--accent-rose) 25%,
            var(--accent-copper) 50%,
            var(--accent-rose) 75%,
            var(--accent-gold) 100%
          );
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }
      `}</style>
    </>
  );
};

export default GradientText;
