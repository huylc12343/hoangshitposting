import React from 'react';
import imgSrc from '../assets/auto_scroll-min.png';
import '../styles/scroll.css';

const AutoScrollBanner = () => {
  return (
    <div className="relative overflow-hidden w-full h-[400px] bg-black">
      <div className="scroll-container flex absolute top-0 left-0 whitespace-nowrap">
        {[...Array(20)].map((_, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`scroll-img-${index}`}
            className="h-[400px] w-auto flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default AutoScrollBanner;
