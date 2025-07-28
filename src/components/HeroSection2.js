import React from 'react';
import { useTheme } from '../contexts/Theme';

export default function HeroSection2() {
  const { theme } = useTheme();

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-20 sm:py-28 md:py-32 lg:py-40 overflow-hidden"
      style={{
        backgroundImage: theme.background,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Lớp phủ tối */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Nội dung chính */}
      <div className="relative z-10 text-white text-center max-w-5xl flex flex-col items-center">

        {/* Cụm dấu ngoặc kép và tiêu đề */}
        <div className="flex items-start justify-center mb-2 w-full flex-wrap px-2">
          {/* Dấu ngoặc trái */}
          <span
            className="text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[8rem] xl:text-[10rem] text-white mr-2 md:mr-4"
            style={{ fontFamily: 'Imbue, serif', fontWeight: 600 }}
          >
            “
          </span>

          {/* Tiêu đề */}
          <div className="flex flex-col items-center leading-tight">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wide"
              style={{ fontFamily: 'Imbue, serif', fontWeight: 600 }}
            >
              CÁ HỒI HOANG
            </h1>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 tracking-wide"
              style={{ fontFamily: 'Imbue, serif', fontWeight: 600 }}
            >
              LÀ MỘT CÁI GÌ ĐÓ MÃI MÃI
            </h1>
          </div>

          {/* Dấu ngoặc phải */}
          <span
            className="text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[8rem] xl:text-[10rem] text-white ml-2 md:ml-4"
            style={{ fontFamily: 'Imbue, serif', fontWeight: 600 }}
          >
            ”
          </span>
        </div>

        {/* Đường kẻ dưới */}
        <hr className="w-[160px] sm:w-[200px] md:w-[240px] border-t-[1.5px] border-white mt-2 mb-4" />


        {/* Mô tả */}
        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed opacity-90 px-2 sm:px-4 max-w-xl"
          style={{ fontFamily: 'Courier New' }}
        >
          Dù Cá Hồi Hoang đã thông báo dừng hoạt động vào năm 2023, 
          nhưng với người hâm mộ, âm nhạc ấy vẫn luôn tồn tại – là ký ức, 
          là nguồn cảm hứng, là nơi chữa lành, và sẽ luôn là một điều gì đó mãi mãi ~
        </p>
      </div>
    </div>
  );
}
