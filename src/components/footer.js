import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CasIcon from '../assets/Cas.svg';
import { useTheme } from '../contexts/Theme';
import { Link } from 'react-router-dom'; // bạn đã dùng nhưng chưa đúng cú pháp

export default function Footer() {
  const { theme } = useTheme();

  return (
    <div className="text-white py-6" style={{ backgroundColor: theme.color }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start">
            <img src={CasIcon} alt="cas" className="w-20 h-20" />
          </div>

          {/* Điều hướng */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold font-imbue">
              Điều hướng
            </h1>
            <ul className="space-y-2 mt-2 font-Averta-CY">
              <ul className="space-y-2 mt-2">
                <li className="hover:text-gray-200 cursor-pointer">GẤP GAP</li>
                <li>
                  <Link to="/about" className="hover:text-gray-200">Về chúng mình</Link>
                </li>
                <li>
                  <Link to="/upcoming" className="hover:text-gray-200">Sự kiện</Link>
                </li>
                {/* <li>
                  <Link to="/merch" className="hover:text-gray-200">Merch</Link>
                </li> */}
              </ul>
            </ul>
          </div>

          {/* Địa chỉ hỗ trợ */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold font-imbue">
              Địa chỉ hỗ trợ
            </h1>
            <ul className="space-y-2 mt-2 font-Averta-CY">
              <li>hoangshitposting@gmail.com</li>
              <li>SĐT: 0968023065 (Hải Yến)</li>
            </ul>
          </div>

          {/* Theo dõi */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold font-imbue">
              Theo dõi chúng tôi
            </h1>
            <ul className="space-y-2 mt-2 font-Averta-CY">
              <li>
                <i className="fab fa-facebook mr-2"></i>
                <a
                  href="https://www.facebook.com/hoangshitposting"
                  className="hover:text-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <i className="fab fa-instagram mr-2"></i>
                <a
                  href="https://www.instagram.com/hoangshitposting"
                  className="hover:text-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <i className="fab fa-youtube mr-2"></i>
                <a
                  href="https://www.youtube.com/hoangshitposting"
                  className="hover:text-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
