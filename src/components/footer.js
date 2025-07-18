import React from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';

import CasIcon from '../assets/Cas.svg'; // Import the CAS icon

import { useTheme } from '../contexts/Theme'; // Import the useTheme hook

export default function Footer() {
  const { theme } = useTheme(); // Access the current theme from context

  return (
    <div className="text-white py-6" style={{ backgroundColor: theme.color }}>
      {/* Use theme.color for background */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-2">
          {/* Logo */}
          <div>
            <img src={CasIcon} alt="cas" className="w-20 h-20" />
          </div>

          {/* Điều hướng */}
          <div className="grid col-span-1 text-left">
            <h1
              className="text-2xl font-extrabold"
              style={{ fontFamily: 'Times New Roman' }}
            >
              Điều hướng
            </h1>
            <ul className="space-y-2">
              <li className="hover:text-gray-200 cursor-pointer">GẤP GÁP</li>
              <li className="hover:text-gray-200 cursor-pointer">Sự kiện sắp tới</li>
              <li className="hover:text-gray-200 cursor-pointer">Về chúng tôi</li>
              <li className="hover:text-gray-200 cursor-pointer">Merch</li>
            </ul>
          </div>

          {/* Địa chỉ hỗ trợ */}
          <div className="grid col-span-1 text-left">
            <h1
              className="text-2xl font-extrabold"
              style={{ fontFamily: 'Times New Roman' }}
            >
              Địa chỉ hỗ trợ
            </h1>
            <ul className="space-y-2">
              <li>hoangshitposting@gmail.com</li>
              <li>SĐT: 0968023065 (Hải Yến)</li>
            </ul>
          </div>

          {/* Theo dõi */}
          <div className="grid col-span-1 text-left">
            <h1
              className="text-2xl font-extrabold"
              style={{ fontFamily: 'Times New Roman' }}
            >
              Theo dõi chúng tôi
            </h1>
            <ul className="space-y-2">
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
