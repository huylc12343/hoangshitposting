import React from 'react';
import backgroundTexture from '../assets/bg-TuDo.png'; // Giả sử bạn có ảnh nền này

export default function HeroSection2() {
  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center p-8 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundTexture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Lớp phủ tối */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Nội dung chính */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
        {/* Dòng tiêu đề 1: CÁ HỒI HOANG */}
        <div className="flex items-center justify-center mb-2">
          <span className="text-8xl md:text-9xl font-bold mr-4 text-white opacity-80" style={{ fontFamily: 'Averta CY Black Italic' }}>“</span> {/* Dấu ngoặc kép */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide" style={{ fontFamily: 'Averta CY Bold' }}>
            CÁ HỒI HOANG
          </h1>
          <span className="text-8xl md:text-9xl font-bold ml-4 text-white opacity-80" style={{ fontFamily: 'Averta CY Black Italic' }}>“</span> {/* Dấu ngoặc kép */}
        </div>

        {/* Dòng tiêu đề 2: LÀ MỘT CÁI GÌ ĐÓ MÃI MÃI */}
        <h2 className="text-4xl md:text-6xl font-extrabold mt-4 mb-8 tracking-wide" style={{ fontFamily: 'Averta CY Bold' }}>
          LÀ MỘT CÁI GÌ ĐÓ MÃI MÃI
        </h2>

        {/* Đường kẻ ngang */}
        <hr className="w-24 mx-auto border-t-2 border-white mb-8" />

        {/* Đoạn mô tả */}
        <p className="text-lg md:text-xl leading-relaxed opacity-90" style={{ fontFamily: 'Averta CY Regular' }}>
          Dù Cá Hồi Hoang đã thông báo dừng hoạt động vào năm 2023, nhưng với chúng mình, 
          âm nhạc ấy vẫn luôn tồn tại – là ký ức, là nguồn cảm hứng, là nơi chữa lành, và sẽ luôn là một điều gì đó mãi mãi.
        </p>
      </div>
    </div>
  );
}