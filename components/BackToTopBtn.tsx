import React, { useState, useEffect } from 'react';

// import react scroll library
import { animateScroll as scroll } from 'react-scroll';
// import icon
import { ChevronUpIcon } from '@heroicons/react/outline';

const BackToTopBtn = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });
  
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
      <button
        onClick={() => scrollToTop()}
        className="fixed right-24 bottom-24 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-violet-600 text-white transition-all hover:bg-violet-800"
      >
        <ChevronUpIcon className="h-6 w-6" />
      </button>
    )
  );
};

export default BackToTopBtn;
