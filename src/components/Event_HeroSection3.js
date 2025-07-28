import React, { useRef, useState } from 'react';
import artist_img from '../assets/PWM01219-min.jpg';
import bg_img from '../assets/Subtract.png';

const artistData = [
  {
    name: 'Lý Bực',
    image: artist_img,
    description: 'Singer',
  },
  {
    name: 'Bùi Xuân Lộc',
    image: artist_img,
    description: 'Những đứa trẻ',
  },
  {
    name: 'Góp Thong Thả',
    image: artist_img,
    description: 'Singer',
  },
  {
    name: 'Fishymeow',
    image: artist_img,
    description: 'Singer',
  },
    {
    name: 'Fuzes',
    image: artist_img,
    description: 'Singer',
  },
    {
    name: 'Trần Hoàn',
    image: artist_img,
    description: 'Singer',
  },
];

export default function Event_HeroSection2() {
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
      <h2 className="text-3xl md:text-4xl font-bold text-left mb-10 font-imbue text-white">
        FULL LINEUP
      </h2>
      <h3>Coming soon...</h3>
      {/* <div
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
          <div key={index} className="flex-none w-[250px] h-[330px]">
            <div
              className="relative w-full h-full overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-cover bg-center"
              style={{
                backgroundImage: `url(${bg_img})`,
              }}
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[85%] h-40 object-cover z-10"
              />
              <div className="absolute top-[180px] left-4 right-4 z-20">
                <h3 className="text-xl font-bold text-black mb-1">{artist.name}</h3>
                <p className="text-sm text-gray-700">{artist.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
}
