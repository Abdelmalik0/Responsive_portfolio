import React from 'react';
import Tilt from 'react-parallax-tilt';

const TiltCard = ({ 
  children, 
  className = '', 
  glareEnable = true, 
  glareMaxOpacity = 0.3,
  glareColor = '#d4af37',
  scale = 1.02,
  tiltMaxAngleX = 10,
  tiltMaxAngleY = 10,
  perspective = 1000,
  transitionSpeed = 400
}) => {
  return (
    <Tilt
      className={`tilt-card ${className}`}
      perspective={perspective}
      glareEnable={glareEnable}
      glareMaxOpacity={glareMaxOpacity}
      glareColor={glareColor}
      glarePosition="all"
      scale={scale}
      tiltMaxAngleX={tiltMaxAngleX}
      tiltMaxAngleY={tiltMaxAngleY}
      transitionSpeed={transitionSpeed}
      tiltReverse={true}
    >
      {children}
    </Tilt>
  );
};

export default TiltCard;