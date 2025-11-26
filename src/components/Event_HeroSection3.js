import React, { useRef, useState } from 'react';
import gg from '../assets/gg.jpg';
import btt from '../assets/btt.jpg';
import lyluong from '../assets/lyluong.jpg';
import ncc from '../assets/ncc.jpg';
import anhbien from '../assets/anhbien.jpg';
import bicardo from '../assets/bicardo.jpg';
import nss from '../assets/nss.jpg';
const artistData = [
  { name: 'Giấy Gấp', image: gg },
  { name: 'Hải Sâm', image: anhbien },
  { name: 'No Sleep Session', image: nss },
  { name: 'Bicardo & band', image: bicardo },
  { name: 'NC Huynh & band', image: ncc },
  { name: 'Tay Trái Band', image: btt },
  { name: 'Lý Lương', image: lyluong },
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
      <h2 className="text-3xl md:text-4xl mt-2 font-semibold text-left mb-10 font-imbue text-white">
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
