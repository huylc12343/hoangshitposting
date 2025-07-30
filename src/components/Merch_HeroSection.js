import React, { useState } from 'react';
import { useTheme } from '../contexts/Theme';
import Merch_bg from '../assets/merch_bg_min.jpg';
import Merch_Popup from './Merch_Popup'; // Đảm bảo đúng đường dẫn

// 👉 Import danh sách merch combos
import merchCombos from '../data/MerchCombos'; // Đảm bảo đúng đường dẫn

export default function Merch_HeroSection() {
  const { theme } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Hàm để đóng popup, đặt selectedIndex về null
  const handleClosePopup = () => {
    setSelectedIndex(null);
  };

  // Hàm để thay đổi combo trong popup khi click thumbnail
  const handleChangePopupCombo = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-start p-8 overflow-x-hidden overflow-y-auto"
      style={{
        backgroundImage: `url(${Merch_bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,1))',
        }}
      ></div>

      <div className="relative z-10 text-white text-center mb-12 mt-24 w-full max-w-7xl">
        <h1 className="text-5xl font-bold mb-4">Merch Combo</h1>
      </div>

      {/* Danh sách combo từ dữ liệu merchCombos */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {merchCombos.map((combo, index) => (
          <div
            key={index}
            className="bg-white cursor-pointer hover:scale-105 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300" // Added styling for cards
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={combo.image}
              alt={combo.name}
              className="w-full h-auto block object-cover" // object-cover for better image fitting
            />
          </div>
        ))}
      </div>

      {/* Truyền selectedIndex và hàm xử lý thumbnail click sang popup */}
      {selectedIndex !== null && (
        <Merch_Popup
          selectedIndex={selectedIndex} // Truyền index thay vì object combo
          onClose={handleClosePopup}
          onChangeCombo={handleChangePopupCombo} // Truyền hàm để thay đổi combo từ bên trong popup
        />
      )}
    </div>
  );
}