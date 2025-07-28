import React, { useRef, useState } from 'react';
import lb from '../assets/LyBuc_min.png';
import bxl from '../assets/BXL_min.png';
import fz from '../assets/fuzes_min.png';
import gtt from '../assets/GOPTHONGTHA_min.png';
import fsm from '../assets/fsm_min.png';
import th from '../assets/tranhoan_min.png';
const artistData = [
  { name: 'Lý Bực', image: lb },
  { name: 'Bùi Xuân Lộc', image: bxl },
  { name: 'Góp Thong Thả', image: gtt },
  { name: 'Fishymeow', image: fsm },
  { name: 'Fuzes', image: fz },
  { name: 'Trần Hoàn', image: th },
];

export default function CCPCLKHNShow_HeroSection3() {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    e.preventDefault();
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = x - startX;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-left mb-10 text-white">
        FULL LINEUP
      </h2>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{
          MsOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleMouseMove}
      >
        {artistData.map((artist, index) => (
          <div key={index} className="flex-none">
            <img
              src={artist.image}
              alt={artist.name}
              className="h-[270px] w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
