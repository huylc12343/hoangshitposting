import React from 'react';
import arrowDownIcon from '../assets/down-arrow-svgrepo-com.svg';
import gapgap from '../assets/gapgap-min.png';
import { useTheme } from '../contexts/Theme';

const HeroSection = () => {
  const { theme } = useTheme();

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="relative w-full h-screen font-imbue text-white overflow-hidden"
      style={{
        backgroundImage: theme.background,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Lớp mờ phủ đen */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Nội dung chính */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pt-20 md:pt-16">
        <div className="w-full max-w-6xl flex flex-col items-center">
          {/* Hình ảnh với responsive */}
          <div className="w-full max-w-[800px] aspect-video overflow-hidden rounded-xl shadow-xl">
            <img
              src={gapgap}
              alt="GẤP GÁP"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Mũi tên xuống */}
          <div
            className="mt-8 animate-bounce cursor-pointer"
            onClick={scrollToBottom}
          >
            <img
              src={arrowDownIcon}
              alt="Scroll Down"
              className="w-8 h-8 md:w-10 md:h-10 filter invert"
            />
          </div>
        </div>

        {/* Nếu muốn hiện chữ sau này, bỏ comment */}
        {/* 
        <p className="text-2xl md:text-4xl font-extralight mb-2 tracking-wide text-center">CHUỖI SỰ KIỆN</p>
        <h1 className="text-6xl md:text-[120px] font-extrabold leading-[0.9] tracking-wider text-center">GẤP GÁP</h1>
        <p className="text-lg md:text-3xl mt-2 font-extralight tracking-[.35em] text-center">CÓ CẦN PHẢI CÓ LÝ KHÔNG?</p> 
        */}
      </div>
    </div>
  );
};

export default HeroSection;
