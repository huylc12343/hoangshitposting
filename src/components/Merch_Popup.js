import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { useTheme } from '../contexts/Theme';
import merchCombos from '../data/MerchCombos'; // Import merchCombos tại đây
import trash from '../assets/Trash.png'; // Assuming you still need this for other parts, though not used in the provided snippet

export default function Merch_Popup({ selectedIndex, onClose, onChangeCombo }) {
  const { theme } = useTheme();

  // --- Move state declarations and useEffect to the top ---
  // State for selected color, size, and quantity
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Effect to reset options when the selectedCombo changes
  useEffect(() => {
    // Only run if selectedIndex is valid, to prevent errors on initial null state
    if (selectedIndex !== null && selectedIndex >= 0 && selectedIndex < merchCombos.length) {
      const currentCombo = merchCombos[selectedIndex];

      // Set default color if hasShirt is true and colors are available
      if (currentCombo.hasShirt && currentCombo.colors && currentCombo.colors.length > 0) {
        // Assuming colors are simple strings for now, as per your provided data
        setSelectedColor(currentCombo.colors[0]); // Set the first color as default
      } else {
        setSelectedColor(null);
      }

      // Set default size if hasShirt is true and sizes are available
      if (currentCombo.hasShirt && currentCombo.sizes && currentCombo.sizes.length > 0) {
        setSelectedSize(currentCombo.sizes[0]); // Set the first size as default
      } else {
        setSelectedSize(null);
      }
      setQuantity(1); // Reset quantity to 1 for new combo
    }
  }, [selectedIndex, merchCombos]); // Re-run when selectedIndex or merchCombos changes

  // --- End of moved section ---


  // This check now comes AFTER the hooks are called
  if (selectedIndex === null || selectedIndex < 0 || selectedIndex >= merchCombos.length) {
    return null; // Đảm bảo popup không hiển thị nếu index không hợp lệ
  }

  const selectedCombo = merchCombos[selectedIndex];

  const handleQuantityChange = (type) => {
    setQuantity(prevQuantity => {
      if (type === 'increment') {
        return prevQuantity + 1;
      } else if (type === 'decrement' && prevQuantity > 1) {
        return prevQuantity - 1;
      }
      return prevQuantity;
    });
  };

  // Helper function to get hex code for colors (if not in data)
  // This function is fine to be defined here, or even outside the component if it's generic
  const getColorHex = (colorName) => {
    switch (colorName) {
      case 'Trắng':
        return '#FFFFFF';
      case 'Đen':
        return '#000000';
      case 'Đỏ': // Example for other colors
        return '#FF0000';
      // Add more cases for other colors if needed
      default:
        return '#CCCCCC'; // Default grey for unknown colors
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-2">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-70"
        onClick={onClose}
      ></div>

      {/* Popup content */}
      <div
        className="relative bg-[#323232] w-full max-w-5xl shadow-xl z-50 flex flex-col md:flex-row overflow-y-auto max-h-[95vh] rounded-lg"
      >
        {/* Close Button - Added for better UX */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-2xl z-50 hover:text-gray-300 transition"
          aria-label="Close popup"
        >
          &times;
        </button>

        {/* Left: Image */}
        <div className="w-full md:w-1/2 p-4 flex flex-col items-center">
          <img
            src={selectedCombo.image}
            alt={selectedCombo.name}
            className="w-full h-auto max-h-[300px] md:max-h-[400px] object-contain mb-4"
          />

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-2">
            {merchCombos.map((combo, idx) => (
              <img
                key={idx}
                src={combo.image}
                alt={`Combo ${idx + 1}`}
                className={`w-16 h-16 object-cover cursor-pointer hover:opacity-80 transition ${
                  idx === selectedIndex ? 'border-2 border-blue-500' : 'border-2 border-transparent'
                }`}
                onClick={() => onChangeCombo(idx)}
              />
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="w-full md:w-1/2 p-4 sm:p-6 text-white text-left flex flex-col justify-between">
          {/* Top: Info */}
          <div>
            <span className="bg-yellow-400 text-black px-3 py-1 text-xs sm:text-sm font-bold uppercase rounded mb-2 inline-block">
              Preorder
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold mb-2">{selectedCombo.name}</h2>
            <p className="text-lg sm:text-xl font-semibold mb-4">{selectedCombo.price}</p>
            {/* Description: hiển thị nếu có */}
            {selectedCombo.description && (
              <p className="text-sm sm:text-base mb-4 whitespace-pre-wrap">{selectedCombo.description}</p>
            )}
          </div>

          {/* Bottom: Options & Buttons */}
          <div className="mt-4">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              {selectedCombo.hasShirt && (
                <>
                  {/* Color Radio Buttons */}
                  <div className="flex-1">
                    <label className="block text-sm mb-1">Màu sắc</label>
                    <div className="flex space-x-2 items-center">
                      {selectedCombo.colors.map((colorName, idx) => (
                        <div
                          key={idx}
                          className={`w-8 h-8 rounded-full border-2 cursor-pointer flex items-center justify-center`}
                          style={{ backgroundColor: getColorHex(colorName), borderColor: selectedColor === colorName ? theme.color : '#4D4D4D' }}
                          onClick={() => setSelectedColor(colorName)}
                        >
                          {/* Checkmark for selected color, adjust color based on background */}
                          {selectedColor === colorName && (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                 style={{ color: colorName === 'Trắng' ? '#000000' : '#FFFFFF' }}> {/* Black check for white, white for others */}
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
              {/* Quantity */}
              <div className="flex-1 ">
                <label className="block text-sm mb-1">Số lượng</label>
                <div className="inline-flex bg-[#3A3A3A] items-center border border-[#4D4D4D] rounded-lg overflow-hidden text-sm">
                  {/* Minus */}
                  <button
                    className="px-3 py-2 hover:bg-gray-700 focus:outline-none" // Adjusted padding here
                    onClick={() => handleQuantityChange('decrement')}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>

                  {/* Quantity */}
                  <span className="px-3 py-2 border-l border-r border-[#4D4D4D]"> {/* Adjusted padding here */}
                    {quantity}
                  </span>

                  {/* Plus */}
                  <button
                    className="px-3 py-2 hover:bg-gray-700 focus:outline-none" // Adjusted padding here
                    onClick={() => handleQuantityChange('increment')}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Conditional Shirt Options */}
              {selectedCombo.hasShirt && (
                <>
                  {/* Size Radio Buttons */}
                  <div className="flex-1">
                    <label className="block text-sm mb-1">Kích cỡ</label>
                    <div className="flex space-x-2">
                      {selectedCombo.sizes.map((sizeOption, idx) => (
                        <button
                          key={idx}
                          className={`px-3 py-2 rounded text-sm ${
                            selectedSize === sizeOption
                              ? 'bg-gray-600 text-white' // Selected style
                              : 'bg-[#3A3A3A] text-gray-300 border border-[#4D4D4D] hover:bg-gray-700' // Unselected style
                          } transition`}
                          onClick={() => setSelectedSize(sizeOption)}
                        >
                          {sizeOption}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-3">
              <button
                className="px-4 py-3 text-white font-semibold transition w-full text-sm rounded"
                style={{ backgroundColor: theme.color }}
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}