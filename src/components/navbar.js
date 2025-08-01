import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CasIcon from '../assets/Cas.svg';
import '../assets/fonts/fonts.css';
import { useTheme } from '../contexts/Theme';

const Navbar = () => {
  const { theme, setThemeTuDo, setThemeNguoiTimVang } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const handleToggle = () => {
    if (theme.name === "TuDo") {
      setThemeNguoiTimVang();
    } else {
      setThemeTuDo();
    }
  };

  // Đóng menu khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-2 font-Averta bg-white/10 backdrop-blur-md shadow-md flex items-center justify-between">
      
      {/* LEFT: Logo + Menu */}
      <div className="flex items-center gap-10">
        <Link to="/"><img src={CasIcon} alt="cas" className="w-20 h-20 flex-shrink-0" /></Link>
        <ul className="hidden md:flex items-center gap-8 text-[#EEE1D8] font-medium">
          <li className="hover:text-blue-300 cursor-pointer"><Link to="/">Trang chủ</Link></li>
          <li className="hover:text-blue-300 cursor-pointer"><Link to="/about">Về chúng mình</Link></li>
          <li className="hover:text-blue-300 cursor-pointer"><Link to="/upcoming">Sự kiện</Link></li>
          <li className="hover:text-blue-300 cursor-pointer"><Link to="/merch">Merch</Link></li>
        </ul>
      </div>

      {/* RIGHT: Theme + Cart + Hamburger */}
      <div className="flex items-center gap-4">
        {/* Theme toggle */}
        <div
          onClick={handleToggle}
          className="w-14 h-8 rounded-full p-1 bg-white/30 cursor-pointer flex items-center transition-all duration-300 relative"
        >
          <div
            className={`w-6 h-6 rounded-full shadow-md transform transition-all duration-300 relative
              ${theme.color === "#125172" ? 'translate-x-0' : 'translate-x-6'}`}
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
        <Link to="/cart">
          <button
            className="hidden md:flex items-center gap-2 px-4 py-2 text-[#EEE1D8] rounded-md hover:opacity-90 transition duration-300"
            style={{ backgroundColor: theme.color }}
          >
            <i className="fas fa-shopping-cart"></i>
            <span>Giỏ hàng</span>
            <span className="ml-2 bg-white text-red-500 text-xs font-bold px-2 py-0.5 rounded-full">3</span>
          </button>
        </Link>

        {/* Cart - mobile */}
        <Link to="/cart" className="md:hidden relative text-[#EEE1D8] text-xl">
          <i className="fas fa-shopping-cart"></i>
          <span className="absolute -top-2 -right-2 bg-white text-red-500 text-xs font-bold px-1.5 py-0.5 rounded-full">3</span>
        </Link>

        {/* Hamburger - mobile */}
        <button
          ref={hamburgerRef}
          onClick={() => setMenuOpen(prev => !prev)}
          className="md:hidden text-[#EEE1D8] text-2xl"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile menu dropdown - Đặt đúng vị trí ngoài cùng */}
{menuOpen && (
  <div
    ref={menuRef}
        className="absolute top-full left-0 w-full bg-black/30 backdrop-blur-xl text-[#EEE1D8] py-4 px-6 flex flex-col gap-4 md:hidden z-50 border-t border-white/20 shadow-xl transition-all duration-300 ease-out"
  >
    <Link to="/" onClick={() => setMenuOpen(false)}>Trang chủ</Link>
    <Link to="/about" onClick={() => setMenuOpen(false)}>Về chúng mình</Link>
    <Link to="/upcoming" onClick={() => setMenuOpen(false)}>Sự kiện</Link>
    <Link to="/merch" onClick={() => setMenuOpen(false)}>Merch</Link>
  </div>
)}

    </nav>
  );
};

export default Navbar;
