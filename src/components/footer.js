import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CasIcon from "../assets/Cas.svg";
import { useTheme } from "../contexts/Theme";
import { Link } from "react-router-dom"; // bạn đã dùng nhưng chưa đúng cú pháp

export default function Footer() {
  const { theme } = useTheme();
  const noiseEffect =
    "data:image/webp;base64,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";
  return (
    <div
      className=" relative text-[#EEE1D8] py-6"
      style={{ backgroundColor: theme.color }}
    >
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url('${noiseEffect}')`,
          opacity: 0.7,
          mixBlendMode: "overlay",
        }}
      />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start">
            <img src={CasIcon} alt="cas" className="w-32 h-w-32" />
          </div>

          {/* Điều hướng */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold font-imbue">Điều hướng</h1>
            <ul className="space-y-2 mt-2 font-Averta-CY">
              <li className="hover:text-gray-200 cursor-pointer">
                <Link to="/about" className="hover:text-gray-200">
                  Về chúng mình
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-gray-200">
                  GẤP GAP
                </Link>
              </li>
              <li>
                <Link to="/upcoming" className="hover:text-gray-200">
                  Sự kiện
                </Link>
              </li>
              {/* <li>
                  <Link to="/merch" className="hover:text-gray-200">Merch</Link>
                </li> */}
            </ul>
          </div>

          {/* Địa chỉ hỗ trợ */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold font-imbue">Địa chỉ hỗ trợ</h1>
            <ul className="space-y-2 mt-2 font-Averta-CY">
              <li>hoangshitposting@gmail.com</li>
              <li>SĐT: 0968023065 (Hải Yến)</li>
            </ul>
          </div>

          {/* Theo dõi */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold font-imbue">
              Theo dõi chúng mình
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
                <i className="fab fa-threads mr-2"></i>
                <a
                  href="https://www.threads.com/@hoangshitposting"
                  className="hover:text-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Threads
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
