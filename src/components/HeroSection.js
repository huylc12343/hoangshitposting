import React from 'react';
import arrowDownIcon from '../assets/down-arrow-svgrepo-com.svg';
import gapgap from '../assets/gapgap-min.png';
import { useTheme } from '../contexts/Theme'; // Import hook useTheme từ file theme.js của bạn

const HeroSection = () => {
  const { theme } = useTheme(); // Lấy theme hiện tại từ context

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="relative w-full h-screen items-center overflow-hidden font-imbue text-white"
      style={{
        backgroundImage: theme.background, // Sử dụng background từ theme
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Lớp mờ - giữ nguyên */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-s"></div>

      {/* Nội dung chính */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pt-16">
        <div className="w-full max-w-6xl flex flex-col items-center">
          <div className="w-[800px] h-[400px] overflow-hidden rounded-xl">
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
              className="w-10 h-10 filter invert"
            />
          </div>
        </div>

        {/* Phần chữ đã ẩn đi bằng comment */}
        {/*
        <p className="text-3xl md:text-4xl font-extralight mb-2 tracking-wide">
          CHUỖI SỰ KIỆN
        </p>
        <h1 className="text-[200px] md:text-[220px] font-extrabold leading-[0.9] tracking-wider">
          GẤP GÁP
        </h1>
        <p className="text-xl md:text-4xl mt-2 font-extralight tracking-[.35em]">
          CÓ CẦN PHẢI CÓ LÝ KHÔNG?
        </p>
        */}
      </div>
    </div>
  );
};

export default HeroSection;