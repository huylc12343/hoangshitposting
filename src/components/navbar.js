import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CasIcon from '../assets/Cas.svg'; // Import the CAS icon
import '../assets/fonts/fonts.css';
import { useTheme } from '../contexts/Theme'; // Đảm bảo đường dẫn đúng đến file theme.js của bạn
import { Link } from 'react-router-dom';
const Navbar = () => {
  // Lấy theme hiện tại và các hàm thay đổi theme từ hook useTheme
  const { theme, setThemeTuDo, setThemeNguoiTimVang } = useTheme();

  // Xác định màu sắc của nút theme dựa trên theme hiện tại
  const currentThemeButtonColor = theme.color;

  // Hàm để chuyển đổi giữa hai theme
  const handleToggleTheme = () => {
    if (theme.color === "#1A56DB") {
      setThemeNguoiTimVang(); // Nếu đang là TuDoTheme, chuyển sang NguoiTimVangTheme
    } else {
      setThemeTuDo(); // Ngược lại, chuyển sang TuDoTheme
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 px-6 py-2 flex items-center justify-between font-Averta
                 bg-white/10 backdrop-blur-md shadow-md">
      {/* Logo + Menu */}
      <div className="flex items-center gap-10">
        <img src={CasIcon} alt="cas" className="w-20 h-20" />
        <ul className="flex gap-8 text-white font-medium items-center">
          <li className="hover:text-blue-300 cursor-pointer"><Link to="/">Trang chủ</Link>{' '}</li>
          <li className="hover:text-blue-300 cursor-pointer"><Link to="/about">Về chúng tôi</Link> {' '}</li>
          <li className="hover:text-blue-300 cursor-pointer"><Link to="/upcoming">Sự kiện sắp tới</Link></li>
          <li className="hover:text-blue-300 cursor-pointer"><Link to="merch">Merch</Link></li>
        </ul>
      </div>

      {/* Giỏ hàng + Theme */}
      <div className="flex items-center gap-4">

        {/* Theme Toggle */}
        <div className="flex items-center gap-2">
          <span className="text-white font-medium">Theme:</span>
          <button
            className="w-8 h-8 rounded-full border border-white"
            style={{ backgroundColor: currentThemeButtonColor }} // Sử dụng màu từ theme context
            onClick={handleToggleTheme} // Gọi hàm để chuyển đổi theme
          ></button>
        </div>

        {/* Giỏ hàng */}
        <button
          className="flex items-center gap-2 px-4 py-2 text-white rounded-md hover:opacity-90 transition-colors duration-300"
          style={{ backgroundColor: currentThemeButtonColor }} // Sử dụng màu từ theme context
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