import React, { useState } from 'react';
import { useTheme } from '../contexts/Theme';
import Merch_bg from '../assets/merch_bg_min.jpg';
import Merch_Popup from './Merch_Popup'; // Đảm bảo đúng đường dẫn

// 👉 Import danh sách merch combos
import merchCombos from '../data/Merch'; // Đảm bảo đúng đường dẫn

export default function Merch_HeroSection() {
  const { theme } = useTheme();
  // Change state to store the selected ID, not the index
  const [selectedId, setSelectedId] = useState(null); 

  // Filter the combos to only include those where isCombo is true
  const combosToDisplay = merchCombos.filter(combo => combo.isCombo === true);

  // Hàm để đóng popup, đặt selectedId về null
  const handleClosePopup = () => {
    setSelectedId(null);
  };

  // Hàm để thay đổi combo trong popup khi click thumbnail
  // This function will now receive an 'id' directly from Merch_Popup
  const handleChangePopupCombo = (id) => {
    setSelectedId(id);
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
        <h1 className="text-5xl font-imbue mb-4">Merch Combo</h1>
      </div>

      {/* Danh sách combo từ dữ liệu merchCombos đã được lọc */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {combosToDisplay.map((combo) => ( // Removed 'index' from map
          <div
            key={combo.id} // <--- Use combo.id for key
            className="bg-white cursor-pointer hover:scale-105 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            onClick={() => setSelectedId(combo.id)} // <--- Pass combo.id on click
          >
            <img
              src={combo.image}
              alt={combo.name}
              className="w-full h-auto block object-cover"
            />
          </div>
        ))}
      </div>

      {/* Truyền selectedId và hàm xử lý thumbnail click sang popup */}
      {selectedId !== null && (
        <Merch_Popup
          allCombos={combosToDisplay} // Pass the filtered array
          selectedId={selectedId} // <--- Pass the ID here
          onClose={handleClosePopup}
          onChangeCombo={handleChangePopupCombo} // This now expects an ID
        />
      )}
    </div>
  );
}