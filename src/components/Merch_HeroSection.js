import React, { useState } from 'react';
import { useTheme } from '../contexts/Theme';
import Merch_bg from '../assets/merch_bg_min.jpg';
import Merch_Popup from './Merch_Popup';

// Import ảnh sản phẩm
import product1 from '../assets/combo1-min.jpg';
import product2 from '../assets/combo2-min.jpg';
import product3 from '../assets/combo3-min.jpg';
import product4 from '../assets/combo4-min.jpg';

export default function Merch_HeroSection() {
  const { theme } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const products = [product1, product2, product3, product4];

  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-start p-8 overflow-x-hidden overflow-y-auto"
      style={{
        backgroundImage: `url(${Merch_bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Lớp phủ màu đen dần từ trên (40%) xuống dưới (100%) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,1))',
        }}
      ></div>

      {/* Tiêu đề */}
      <div className="relative z-10 text-white text-center mb-12 mt-24 w-full max-w-7xl">
        <h1 className="text-5xl font-bold mb-4">Merch Combo</h1>
      </div>

      {/* Lưới sản phẩm */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {products.map((img, index) => (
          <div
            key={index}
            className="bg-white cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={img}
              alt={`product-${index}`}
              className="w-full h-auto block"
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>

      {/* Popup chi tiết sản phẩm */}
      <Merch_Popup
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
      />
    </div>
  );
}
