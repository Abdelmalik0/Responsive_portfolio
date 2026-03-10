import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxImage = ({ src, alt, speed = 0.5, className = '' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);

  return (
    <>
      <motion.div
        ref={ref}
        className={`parallax-image-container ${className}`}
        style={{ y }}
      >
        <img src={src} alt={alt} className="parallax-image" />
      </motion.div>

      <style>{`
        .parallax-image-container {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
        }

        .parallax-image {
          width: 100%;
          height: 120%;
          object-fit: cover;
          position: absolute;
          top: -10%;
          left: 0;
        }
      `}</style>
    </>
  );
};

export default ParallaxImage;
