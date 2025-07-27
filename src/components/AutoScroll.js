import React from 'react';
import imgSrc from '../assets/auto_scroll-min.png';
import '../styles/scroll.css';

const AutoScrollBanner = () => {
  const images = [...Array(20)].map((_, index) => (
    <img
      key={index}
      src={imgSrc}
      alt={`scroll-img-${index}`}
      className="w-auto h-[425px] object-contain flex-shrink-0"
      style={{ maxWidth: 'none' }}
    />
  ));

  return (
    <div className="relative overflow-hidden w-full bg-black">
      <div className="scroll-container flex whitespace-nowrap">
        {images}
        {images /* nhân đôi để tạo scroll vô tận */}
      </div>
    </div>
  );
};

export default AutoScrollBanner;
