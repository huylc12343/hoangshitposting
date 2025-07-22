import React from 'react';
import { useTheme } from '../contexts/Theme';
import upcoming_bg from '../assets/upcoming_bg.png';
import TimelineSection from './TimelineComponent';

export default function Upcoming_HeroSection_HeroSection() {
  const { theme } = useTheme();

  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-start p-8 overflow-x-hidden overflow-y-auto"
    >
      {/* Background image with blur */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${upcoming_bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          repeat: "no-repeat"
        }}
      ></div>

      {/* Lớp phủ gradient để làm mờ tối phần dưới */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,1))',
        }}
      ></div>

      {/* Nội dung phía trên */}
<div className="relative z-20 text-white text-left mb-12 mt-24 w-full max-w-7xl">
  <h1 className="text-5xl font-bold mb-4">Sự kiện sắp tới</h1>
  <TimelineSection />
</div>

    </div>
  );
}
