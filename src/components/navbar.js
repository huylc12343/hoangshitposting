import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CasIcon from '../assets/Cas.svg'; // Import the CAS icon
import '../assets/fonts/fonts.css';

const Navbar = () => {
  const [themeColor, setThemeColor] = useState('#1A56DB'); // màu mặc định

  const toggleTheme = () => {
    setThemeColor(prev => (prev === '#1A56DB' ? '#B9400C' : '#1A56DB'));
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 px-6 py-2 flex items-center justify-between font-Averta
                 bg-white/10 backdrop-blur-md shadow-md">
      {/* Logo + Menu */}
      <div className="flex items-center gap-10">
        <img src={CasIcon} alt="cas" className="w-20 h-20" />
        <ul className="flex gap-8 text-white font-medium items-center">
          <li className="hover:text-blue-300 cursor-pointer">Trang chủ</li>
          <li className="hover:text-blue-300 cursor-pointer">Về chúng tôi</li>
          <li className="hover:text-blue-300 cursor-pointer">Sự kiện sắp tới</li>
          <li className="hover:text-blue-300 cursor-pointer">Merch</li>
        </ul>
      </div>

      {/* Giỏ hàng + Theme */}
      <div className="flex items-center gap-4">

        {/* Theme Toggle */}
        <div className="flex items-center gap-2">
          <span className="text-white font-medium">Theme:</span>
          <button
            className="w-8 h-8 rounded-full border border-white"
            style={{ backgroundColor: themeColor }}
            onClick={toggleTheme}
          ></button>
        </div>

        {/* Giỏ hàng */}
        <button
          className="flex items-center gap-2 px-4 py-2 text-white rounded-md hover:opacity-90 transition-colors duration-300"
          style={{ backgroundColor: themeColor }}
        >
          <i className="fas fa-shopping-cart"></i>
          <span>Giỏ hàng</span>
          <span className="ml-2 bg-white text-red-500 text-xs font-bold px-2 py-0.5 rounded-full">3</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
