import React from 'react';
import { useTheme } from '../contexts/Theme';

import merchCombos from '../data/MerchCombos';


export default function Merch_Popup({ selectedIndex, onClose }) {
  const { theme } = useTheme();

  if (selectedIndex === null || selectedIndex < 0 || selectedIndex >= merchCombos.length) return null;

  const selectedCombo = merchCombos[selectedIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-70"
        onClick={onClose}
      ></div>

      {/* Nội dung popup */}
      <div
        className="relative bg-white w-[90%] max-w-5xl shadow-xl z-50 flex flex-col md:flex-row overflow-hidden"
        style={{
          backgroundColor: "#323232",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Ảnh sản phẩm + ảnh nhỏ */}
        <div className="w-full md:w-1/2 p-4 flex flex-col items-center">
          <img
            src={selectedCombo.image}
            alt={selectedCombo.name}
            className="w-full h-[400px] object-contain mb-4"
          />

          {/* Ảnh sản phẩm khác */}
          <div className="grid grid-cols-4 gap-2">
            {merchCombos.map((combo, idx) => (
              <img
                key={idx}
                src={combo.image}
                alt={`Combo ${idx + 1}`}
                className="w-16 h-16 object-cover cursor-pointer hover:opacity-80 transition"
                onClick={() => onClose(idx)} // thay đổi ảnh chính nếu muốn
              />
            ))}
          </div>
        </div>

        {/* Nội dung mô tả */}
        <div className="w-full md:w-1/2 p-6 text-white text-left flex flex-col justify-between">
          <div>
            <span className="bg-yellow-400 text-black px-3 py-1 text-sm font-bold uppercase rounded mb-2 inline-block">
              Preorder
            </span>

            <h2 className="text-3xl font-bold mb-2">{selectedCombo.name}</h2>
            <p className="text-xl font-semibold mb-4">{selectedCombo.price}</p>
            <p className="text-base mb-6">{selectedCombo.description}</p>

            <div className="flex gap-4 mb-4">
              {/* Số lượng */}
              <div>
                <label className="block text-sm mb-1">Số lượng</label>
                <select className="text-black px-2 py-1 rounded">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              {/* Kích cỡ */}
              <div>
                <label className="block text-sm mb-1">Kích cỡ</label>
                <select className="text-black px-2 py-1 rounded">
                  {['S', 'M', 'L', 'XL'].map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <button
              className="px-6 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition w-full md:w-auto"
            >
              Thêm vào giỏ hàng
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 bg-transparent border border-white text-white font-semibold hover:bg-white hover:text-black transition w-full md:w-auto"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
