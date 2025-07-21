import React from 'react';
import { useTheme } from '../contexts/Theme';

// Import ảnh sản phẩm
import product1 from '../assets/combo1-min.jpg';
import product2 from '../assets/combo2-min.jpg';
import product3 from '../assets/combo3-min.jpg';
import product4 from '../assets/combo4-min.jpg';
import product5 from '../assets/combo1-min.jpg';
import product6 from '../assets/combo2-min.jpg';
import product7 from '../assets/combo3-min.jpg';
import product8 from '../assets/combo4-min.jpg';

export default function Merch_HeroSection2() {
  const { theme } = useTheme();

  const products = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
  ];

  return (
    <div
      className="relative bg-black w-full min-h-screen flex flex-col items-center justify-start p-4 sm:p-8"
    >
      {/* Lớp phủ tối */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      {/* Tiêu đề */}
      <div className="relative z-10 text-white text-center mb-10 mt-24">
        <h1 className="text-4xl sm:text-5xl font-bold">Tất cả sản phẩm</h1>
      </div>

      {/* Lưới sản phẩm */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {products.map((img, index) => (
          <div
            key={index}
            className="bg-white shadow-md transition duration-300 flex justify-center items-center"
          >
            <img
              src={img}
              alt={`product-${index}`}
              className="w-full h-auto object-contain"
              style={{
                borderRadius: '0px',
                maxHeight: '100%',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
