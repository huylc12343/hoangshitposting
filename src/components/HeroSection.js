import React from 'react';
import bgImage from '../assets/bg-TuDo.png';
import arrowDownIcon from '../assets/down-arrow-svgrepo-com.svg';
import '../assets/fonts/fonts.css'; // Đảm bảo font Averta được import ở đây

const HeroSection = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden font-Averta text-white">
      {/* Background hình ảnh và lớp làm mờ */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-s"></div>
      </div>

      {/* Nội dung chính */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-20">
        <p className="text-3xl md:text-4xl font-bold mb-4 text-left">CHUỖI SỰ KIỆN</p>
        <h1 className="text-6xl md:text-9xl font-extrabold leading-tight tracking-wider">
          GẤP GÁP
        </h1>
        <p className="text-xl md:text-4xl mt-8">CÓ CẦN PHẢI CÓ LÝ KHÔNG?</p>

        {/* Icon mũi tên */}
        <div
          className="mt-16 animate-bounce cursor-pointer"
          onClick={scrollToBottom}
        >
          <img
            src={arrowDownIcon}
            alt="Scroll Down"
            className="w-10 h-10 filter invert"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
