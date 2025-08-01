import React from 'react';
import merchMainImage from '../assets/combo4-min.jpg';
import merchItem1 from '../assets/combo3-min.jpg';
import merchItem2 from '../assets/combo2-min.jpg';
import merchItem3 from '../assets/combo1-min.jpg';
import { useTheme } from '../contexts/Theme';

export default function Merch() {
  const { theme } = useTheme();

  return (
    <section
      className="relative w-full py-20 text-[#EEE1D8] px-4 md:px-8 lg:px-12 bg-cover bg-center bg-no-repeat"
      // style={{ backgroundImage: theme.background }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl text-center mb-16 font-imbue tracking-wide">
          MERCH
        </h1>

        {/* Desktop layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto p-2">
          {/* Left large image */}
          <div className="flex justify-center items-center p-2 overflow-hidden bg-white/5">
            <img
              src={merchMainImage}
              alt="Main Merch"
              className="w-full h-auto max-h-[600px] object-cover transform transition duration-300 hover:scale-105"
            />
          </div>

          {/* 2x2 grid */}
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
            <div className="group flex justify-center items-center overflow-hidden bg-[#EEE1D8]  transition duration-300 cursor-pointer">
              <div className="text-lg md:text-xl  font-semibold text-[#BC4535] group-hover:scale-105 font-Averta-CY">Tìm hiểu thêm</div>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col gap-4 max-w-xl mx-auto p-2">
          {/* Hàng 1: Merch Item 1 full width */}
          <div className="flex justify-center items-center overflow-hidden bg-white/5">
            <img
              src={merchItem1}
              alt="Merch Item 1"
              className="w-full h-auto object-cover transform transition duration-300 hover:scale-105"
            />
          </div>

          {/* Hàng 2: Merch Item 2 (trái) + Tìm hiểu thêm (phải) */}
          <div className="grid grid-cols-2 gap-2">
            <div className="flex justify-center items-center overflow-hidden bg-white/5">
              <img
                src={merchItem2}
                alt="Merch Item 2"
                className="w-full h-auto object-cover transform transition duration-300 hover:scale-105"
              />
            </div>
            <div className="flex justify-center items-center overflow-hidden bg-white/5 hover:bg-white/10 transition duration-300 cursor-pointer">
              <span className="text-base font-semibold text-[#EEE1D8]">Tìm hiểu thêm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
