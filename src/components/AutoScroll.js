import React from 'react';

import card1 from '../assets/1.1_min.png';
import card2 from '../assets/2.1_min.png';
import card3 from '../assets/3.1_min.png';
import card4 from '../assets/4.1_min.png';
import card6 from '../assets/6.1_min.png';
import card7 from '../assets/7.1_min.png';

import '../styles/scroll.css'; // CSS chứa animation

const AutoScrollBanner = () => {
  const imageList = [card1, card2, card3, card4, card6, card7];

  return (
    <div className="relative overflow-hidden w-full bg-black">
      <div className="scroll-wrapper flex w-max animate-scroll">
        {/* Nhân đôi image list để tạo hiệu ứng loop */}
        {[...imageList, ...imageList].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`scroll-img-${index}`}
            className="h-[425px] sm:h-[425px] w-auto object-contain flex-shrink-0"
            style={{ maxWidth: 'none' }}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoScrollBanner;
