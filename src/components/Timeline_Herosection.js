import React, { forwardRef } from 'react';
import Timeline_Components from './Timeline_Components';
import bg from '../assets/bg_timeline_home_min.jpg';
import { useTheme } from '../contexts/Theme';
import { Link } from 'react-router-dom';
const TimelineHeroSection = forwardRef((props, ref) => {
  const { theme } = useTheme();
  return (
    <section
      id="timeline"
      ref={ref}
      className="relative w-full min-h-screen text-white py-10 px-4 overflow-hidden"
      aria-label="Timeline sự kiện"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay mờ */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0"></div>


      {/* Nội dung chính */}
      <div className="relative z-10">
        <h1 className="text-4xl mt-20 sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-16 font-imbue">
          Timeline sự kiện
        </h1>
        <Timeline_Components />
        <div className="w-full flex justify-center md:justify-center py-10">
              <Link to="/event"><button
                className="mt-4 px-6 py-3 rounded-md text-white font-semibold shadow-md transition duration-300 hover:opacity-90"
                style={{
                  backgroundColor: theme.color === "#B9400C" ? "#B9400C" : "#125172",
                  fontFamily: 'Averta CY',
                }}
              >
                Đồng hành cùng chúng mình
              </button></Link>
            </div>
      </div>
    </section>
  );
});

export default TimelineHeroSection;
