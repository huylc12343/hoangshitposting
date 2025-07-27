import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/h-Subtract.png';
import blue_bg from '../assets/Blue_h_Subtract.png';
import { useTheme } from '../contexts/Theme';

export default function TimelineImageLink({
  link,
  image,
  index,
  maxWidth = 520,
  name,
  location,
}) {
  const { theme } = useTheme();

  return (
    <Link to={link}>
      <div
        className={`group w-full max-w-[${maxWidth}px] rounded-xl shadow-2xl transition relative overflow-hidden`}
        style={{
          backgroundImage: `url(${theme.color === '#1A56DB' ? blue_bg : bg})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
          <div className="flex flex-row items-center h-full w-full px-4 py-6 gap-4">
            <div className="w-2/5 text-white text-left px-4 sm:px-6 lg:px-6">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-imbue underline decoration-[1px] decoration-white">{name}</h3>
              <p className="text-sm sm:text-base opacity-80 mt-1 font-Averta-CY">{location}</p>
            </div>

          <div className="relative w-3/5">
            <img
              src={image}
              alt={`stamp-${index}`}
              className="w-full h-auto object-contain"
            />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] opacity-0 group-hover:opacity-100 transition-opacity">
              <div
                className="text-center py-2 rounded-lg text-sm sm:text-base font-medium cursor-pointer"
                style={{
                  backgroundColor: '#EEE1D8',
                  color: '#BC4535',
                }}
              >
                Nhìn lại
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
