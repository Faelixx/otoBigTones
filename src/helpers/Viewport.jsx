import React from 'react'
import { useState, useEffect } from 'react';

const getViewPort = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
};

const Viewport = () => {
  const [windowDimensions, setWindowDimensions] = useState(getViewPort);
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getViewPort());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};
export default Viewport;