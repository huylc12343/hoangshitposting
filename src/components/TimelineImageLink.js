import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/h-Subtract.png';
import blue_bg from '../assets/Blue_h_Subtract.png';
import noise from '../assets/noise_overlay_min.jpg';
import { useTheme } from '../contexts/Theme';

export default function TimelineImageLink({
  link,
  image,
  index,
  maxWidth = 520,
  name,
  location,
  buttonText,
}) {
  const { theme } = useTheme();

  return (
    <Link to={link}>
      <div
        className="group w-full rounded-xl shadow-2xl transition relative overflow-hidden"
        style={{
          maxWidth: `${maxWidth}px`,
          backgroundImage: `url(${theme.color === '#1A56DB' ? blue_bg : bg})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Noise overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            backgroundImage: `url(${noise})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '3px 3px',
            opacity: 0.15,
          }}
        />

        <div className="flex flex-row items-center h-full w-full px-2 py-3 sm:px-4 sm:py-5 md:px-6 md:py-6 gap-4">
          <div className="w-2/5 text-white text-left px-2 sm:px-3 md:px-4 lg:px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold font-imbue underline decoration-[1px] decoration-white">
              {name}
            </h3>
            <p className="text-sm sm:text-base opacity-80 mt-1 font-Averta-CY">
              {location}
            </p>
          </div>

          <div className="relative w-3/5">
            <img
              src={image}
              alt={`stamp-${index}`}
              className="w-full h-auto object-contain"
            />

            {/* Overlay gradient */}
            <div
              className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
              }}
            />

            {/* Button */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div
                className="text-center py-2 rounded-lg text-sm sm:text-base font-medium cursor-pointer"
                style={{
                  backgroundColor: '#EEE1D8',
                  color: '#BC4535',
                }}
              >
                {buttonText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
