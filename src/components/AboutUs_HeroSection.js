import React from 'react';
// import backgroundTexture from '../assets/bg-TuDo-min.png'; // Không còn cần import này nữa
import { useTheme } from '../contexts/Theme'; // Đảm bảo đường dẫn đúng đến file theme.js của bạn

export default function AboutUs_HeroSection() {
  const { theme } = useTheme(); // Lấy theme hiện tại từ context

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center p-8 overflow-hidden"
      style={{
        backgroundImage: theme.background, // Sử dụng background từ theme context
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Lớp phủ tối */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Nội dung chính */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto flex flex-col items-center">

        {/* Cụm trung tâm gồm dấu ngoặc kép và tiêu đề chia 2 dòng */}
        <div className="flex items-start justify-center mb-2 w-full px-4">
          {/* Dấu " trái */}
          <span
            className="text-[10rem] text-white opacity-80 mr-4"
            style={{ fontFamily: 'Imbue, serif', fontWeight: 600 }}
          >
            “
          </span>

          {/* Tiêu đề */}
          <div className="flex flex-col items-center leading-tight">
            <h1
              className="text-center text-7xl md:text-8xl tracking-wider"
              style={{ fontFamily: 'Imbue, serif', fontWeight: 600 }}
            >
              Đây là về chúng tôi
            </h1>
            <h1
              className="text-center text-7xl md:text-8xl mt-2 tracking-wider whitespace-nowrap"
              style={{ fontFamily: 'Imbue, serif', fontWeight: 600 }}
            >
              
            </h1>
          </div>

          {/* Dấu " phải */}
          <span
            className="text-[10rem] text-white opacity-80 ml-4"
            style={{ fontFamily: 'Imbue, serif', fontWeight: 600 }}
          >
            “
          </span>
        </div>

        {/* Đường kẻ ngang nằm ngay dưới tiêu đề */}
        <hr className="w-[220px] border-t-[1.5px] border-white mb-6" />

        {/* Đoạn mô tả */}
        <p
          className="text-center text-lg md:text-xl leading-relaxed opacity-90 w-[400px] mt-4"
          style={{ fontFamily: 'Courier New' }}
        >

        </p>
      </div>
    </div>
  );
}