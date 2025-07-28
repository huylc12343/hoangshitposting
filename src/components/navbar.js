import React, { useState } from 'react';
import CasIcon from '../assets/Cas.svg';
import '../assets/fonts/fonts.css';
import { useTheme } from '../contexts/Theme';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { theme, setThemeTuDo, setThemeNguoiTimVang } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    if (theme.color === "#1A56DB") {
      setThemeNguoiTimVang();
    } else {
      setThemeTuDo();
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-2 font-Averta
                    bg-white/10 backdrop-blur-md shadow-md flex items-center justify-between">
      
      {/* LEFT: Logo + Menu */}
      <div className="flex items-center gap-10">
        <img src={CasIcon} alt="cas" className="w-20 h-20 flex-shrink-0" />
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li className="hover:text-blue-300 cursor-pointer">
            <Link to="/">Trang chủ</Link>
          </li>
          <li className="hover:text-blue-300 cursor-pointer">
            <Link to="/about">Về chúng tôi</Link>
          </li>
          <li className="hover:text-blue-300 cursor-pointer">
            <Link to="/upcoming">Sự kiện</Link>
          </li>
          {/* <li className="hover:text-blue-300 cursor-pointer">
            <Link to="/merch">Merch</Link>
          </li> */}
        </ul>
      </div>

      {/* RIGHT: Toggle + Cart + Hamburger */}
      <div className="flex items-center gap-4">
        {/* Theme toggle */}
        <div
          onClick={handleToggle}
          className="w-14 h-8 rounded-full p-1 bg-white/30 cursor-pointer flex items-center transition-all duration-300 relative"
        >
          <div
            className={`w-6 h-6 rounded-full shadow-md transform transition-all duration-300 relative
              ${theme.color === "#1A56DB" ? 'translate-x-0' : 'translate-x-6'}`}
            style={{
              backgroundImage: theme.background,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <img
              src={theme.icon}
              alt="theme icon"
              className="absolute top-1/2 left-1/2 w-3.5 h-3.5 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        {/* Cart - desktop */}
        {/* <button
          className="hidden md:flex items-center gap-2 px-4 py-2 text-white rounded-md hover:opacity-90 transition duration-300"
          style={{ backgroundColor: theme.color }}
        >
          <i className="fas fa-shopping-cart"></i>
          <span><Link to="/cart">Giỏ hàng</Link></span>
          <span className="ml-2 bg-white text-red-500 text-xs font-bold px-2 py-0.5 rounded-full">3</span>
        </button> */}

        {/* Cart - mobile */}
        {/* <Link to="/cart" className="md:hidden relative text-white text-xl">
          <i className="fas fa-shopping-cart"></i>
          <span className="absolute -top-2 -right-2 bg-white text-red-500 text-xs font-bold px-1.5 py-0.5 rounded-full">3</span>
        </Link> */}

        {/* Hamburger - mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#000000cc] text-white py-4 px-6 flex flex-col gap-4 md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)}>Trang chủ</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>Về chúng tôi</Link>
          <Link to="/upcoming" onClick={() => setMenuOpen(false)}>Sự kiện sắp tới</Link>
          <Link to="/merch" onClick={() => setMenuOpen(false)}>Merch</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
