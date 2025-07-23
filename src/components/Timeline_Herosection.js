import React, { forwardRef } from 'react';
import Timeline_Components from './Timeline_Components';

const TimelineHeroSection = forwardRef((props, ref) => {
  return (
    <section
      id="timeline"
      ref={ref}
      className="relative w-full min-h-screen text-white py-10 px-4 overflow-hidden"
      aria-label="Timeline sự kiện"
    >
      {/* Overlay mờ */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      {/* Nội dung chính */}
      <div className="relative z-10">
        <h1 className="text-4xl mt-20 sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-16">
          Timeline sự kiện
        </h1>
        <Timeline_Components />
      </div>
    </section>
  );
});

export default TimelineHeroSection;
