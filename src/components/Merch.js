import React from 'react';
import merchMainImage from '../assets/combo4.jpg';
import merchItem1 from '../assets/combo3.jpg';
import merchItem2 from '../assets/combo2.jpg';
import merchItem3 from '../assets/combo1.jpg';
import bgImage from '../assets/bg-TuDo.png';

export default function Merch() {
  return (
    <section
      className="relative w-full py-20 text-white px-4 md:px-8 lg:px-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Lớp phủ tối */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      {/* Nội dung chính */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-16 font-AvertaCY tracking-wide">
          Merch
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto p-6">
          {/* Hình lớn bên trái */}
          <div className="flex justify-center items-center p-2 overflow-hidden bg-white/5">
            <img
              src={merchMainImage}
              alt="Main Merch"
              className="w-full h-auto max-h-[600px] object-cover transform transition duration-300 hover:scale-105"
            />
          </div>

          {/* Grid 2x2 hình nhỏ */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 p-2">
            <div className="flex justify-center items-center overflow-hidden bg-white/5">
              <img
                src={merchItem1}
                alt="Merch Item 1"
                className="w-full h-auto object-cover transform transition duration-300 hover:scale-105"
              />
            </div>
            <div className="flex justify-center items-center overflow-hidden bg-white/5">
              <img
                src={merchItem2}
                alt="Merch Item 2"
                className="w-full h-auto object-cover transform transition duration-300 hover:scale-105"
              />
            </div>
            <div className="flex justify-center items-center overflow-hidden bg-white/5">
              <img
                src={merchItem3}
                alt="Merch Item 3"
                className="w-full h-auto object-cover transform transition duration-300 hover:scale-105"
              />
            </div>
            <div className="flex justify-center items-center overflow-hidden bg-white/5 hover:bg-white/10 transition duration-300 cursor-pointer">
              <span className="text-lg md:text-xl font-semibold text-white">Tìm hiểu thêm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
