import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/h-Subtract.png';

export default function TimelineImageLink({
  link,
  image,
  index,
  maxWidth = 520,
  name,
  location,
}) {
  return (
    <Link to={link}>
      <div
        className={`group w-full max-w-[${maxWidth}px] rounded-xl shadow-2xl  transition relative overflow-hidden`}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Layout chia 2 cột: trái là text, phải là ảnh */}
        <div className="flex flex-row items-center h-full w-full px-4 py-6 gap-4">
          {/* Bên trái: text - chiếm 40% */}    
          <div className="w-2/5 text-white text-left">
            <h3 className="text-xl sm:text-2xl font-semibold">{name}</h3>
            <p className="text-sm sm:text-base opacity-80 mt-1">{location}</p>
          </div>

          {/* Bên phải: ảnh - chiếm 60% */}
          <div className="relative w-3/5">
            <img
              src={image}
              alt={`stamp-${index}`}
              className="w-full h-auto object-contain"
            />

            {/* Nút Nhìn lại */}
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
