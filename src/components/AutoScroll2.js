import React from 'react';
import img1 from '../assets/g9-min.png';
import img2 from '../assets/g8-min.png';
import img3 from '../assets/g10-min.png';
// Add thêm ảnh nếu có
import '../styles/scroll.css';

const imageList = [img1, img2, img3]; // danh sách ảnh

const AutoScroll2 = () => {
  const images = imageList.map((src, index) => (
    <img
      key={index}
      src={src}
      alt={`scroll-img-${index}`}
      className="w-auto h-[425px] object-contain flex-shrink-0"
      style={{ maxWidth: 'none' }}
    />
  ));

  return (
    <div className="relative overflow-hidden w-full py-14">
    <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className="scroll-container gap-4 flex whitespace-nowrap">
        {images}
        {images}
        {images}
      </div>
    </div>
  );
};

export default AutoScroll2;
