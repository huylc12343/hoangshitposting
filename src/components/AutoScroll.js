import React from 'react';
import imgSrc from '../assets/auto_scroll-min.png';
import '../styles/scroll.css';

const AutoScrollBanner = () => {
  return (
    <div className="relative overflow-hidden w-full bg-black">
      <div className="scroll-container flex whitespace-nowrap">
        {[...Array(20)].map((_, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`scroll-img-${index}`}
            className="w-full h-auto object-contain flex-shrink-0"
            style={{ maxWidth: 'none' }} // để ngăn Tailwind giới hạn chiều rộng tối đa
          />
        ))}
      </div>
    </div>
  );
};

export default AutoScrollBanner;
