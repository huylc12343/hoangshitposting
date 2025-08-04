import React, { useState } from 'react'; // Import useState
import { useTheme } from '../contexts/Theme';
import MerchData from '../data/Merch'; // Đảm bảo đúng đường dẫn
import Merch_Popup from './Merch_Popup'; // Import Merch_Popup here too

export default function Merch_HeroSection2() {
  const { theme } = useTheme();
  // State to store the ID of the currently selected non-combo product
  const [selectedNonComboId, setSelectedNonComboId] = useState(null); 

  // Filter products that are NOT combos
  const productsToDisplay = MerchData.filter(product => product.isCombo === false);

  // Function to handle card click and open popup
  const handleCardClick = (id) => {
    setSelectedNonComboId(id);
  };

  // Function to close popup
  const handleClosePopup = () => {
    setSelectedNonComboId(null);
  };

  // Function to change product within popup (if it has prev/next)
  const handleChangePopupProduct = (id) => {
    setSelectedNonComboId(id);
  };

  return (
    <div className="relative bg-black w-full min-h-screen flex flex-col items-center justify-start p-4 sm:p-8">
      {/* Lớp phủ tối */}
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: 'black', opacity: 0.7 }}
      ></div>

      {/* Tiêu đề */}
      <div className="relative z-10 text-white text-center mb-10 mt-24">
        <h1 className="text-5xl sm:text-[80px] font-imbue">Tất cả sản phẩm</h1>
        <p className='text-base'>Hình ảnh sản phẩm sẽ được cập nhật trong thời gian sớm nhất</p>
      </div>

      {/* Lưới sản phẩm */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {productsToDisplay.map((product) => (
          <div
            key={product.id}
            className="bg-white cursor-pointer hover:scale-105 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            onClick={() => handleCardClick(product.id)} // Use handleCardClick
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto block object-cover"
            />
          </div>
        ))}
      </div>

      {/* Merch Popup for non-combo products */}
      {selectedNonComboId !== null && (
        <Merch_Popup
          allCombos={productsToDisplay} // <--- Pass the filtered non-combo products here
          selectedId={selectedNonComboId}
          onClose={handleClosePopup}
          onChangeCombo={handleChangePopupProduct} // Use appropriate handler name
        />
      )}
    </div>
  );
}