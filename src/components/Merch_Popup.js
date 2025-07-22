import React from 'react';
import { useTheme } from '../contexts/Theme';
import merchCombos from '../data/MerchCombos';

export default function Merch_Popup({ selectedIndex, onClose }) {
  const { theme } = useTheme();

  if (selectedIndex === null || selectedIndex < 0 || selectedIndex >= merchCombos.length) return null;

  const selectedCombo = merchCombos[selectedIndex];

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
                className="w-16 h-16 object-cover cursor-pointer hover:opacity-80 transition"
                onClick={() => onClose(idx)}
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
            <p className="text-sm sm:text-base mb-4">{selectedCombo.description}</p>
          </div>

          {/* Bottom: Options & Buttons */}
          <div className="mt-4">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              {/* Quantity */}
              <div className="flex-1">
                <label className="block text-sm mb-1">Số lượng</label>
                <select className="text-black px-2 py-2 rounded w-full text-sm">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              {/* Size */}
              <div className="flex-1">
                <label className="block text-sm mb-1">Kích cỡ</label>
                <select className="text-black px-2 py-2 rounded w-full text-sm">
                  {['S', 'M', 'L', 'XL'].map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-3">
              <button
                className="px-4 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition w-full text-sm rounded"
              >
                Thêm vào giỏ hàng
              </button>
              <button
                onClick={onClose}
                className="px-4 py-3 bg-transparent border border-white text-white font-semibold hover:bg-white hover:text-black transition w-full text-sm rounded"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
