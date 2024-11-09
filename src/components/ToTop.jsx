import React from 'react'

import { useState, useEffect } from 'react';

const ToTop = (props) => {
  
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    setShowGoTop(window.scrollY >= 0);
  };

  const handleScrollUp = () => {
    window.scrollTo( { left: 0, top: 0, behavior: 'smooth'} )
  };

  useEffect( () => {
    window.addEventListener( 'scroll', handleVisibleButton )
  }, []);

  return (
      <div className={showGoTop ? '' : `hidden` } onClick={handleScrollUp}>
        <button>
          <p className='text-right text-white'>🔝Scroll To Top🔝</p>
        </button>
    </div>
  );
};

export default ToTop;