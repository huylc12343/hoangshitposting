import React from 'react';
import imgSrc from '../assets/auto_scroll.png'; // Thay bằng ảnh của bạn
import '../styles/scroll.css'; // Import custom animation CSS

const AutoScrollBanner = () => {
  return (
    <div className="relative overflow-hidden w-full h-[370px] bg-black">
      <div className="scroll-container flex absolute top-0 left-0 whitespace-nowrap">
        {/* Nhân đôi ảnh để tạo hiệu ứng lặp vô hạn */}
        {[...Array(20)].map((_, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`scroll-img-${index}`}
            className="h-full w-auto object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default AutoScrollBanner;
