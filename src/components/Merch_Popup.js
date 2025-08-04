import React, { useState, useEffect } from "react";
import { useTheme } from "../contexts/Theme";
import trash from "../assets/Trash.png";
import MerchService from "../services/MerchService";
import AddSuccessfull from "./AddSuccessfull"; // đường dẫn đúng của bạn

export default function Merch_Popup({
  allCombos,
  selectedId,
  onClose,
  onChangeCombo,
}) {
  const { theme } = useTheme();
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const selectedCombo = allCombos.find((combo) => combo.id === selectedId);
  const currentComboIndex = selectedCombo
    ? allCombos.indexOf(selectedCombo)
    : -1;

  useEffect(() => {
    if (selectedCombo) {
      setSelectedColor(selectedCombo.colors?.[0] || null);
      setSelectedSize(selectedCombo.sizes?.[0] || null);
      setQuantity(1);
    }
  }, [selectedId]);

  if (!selectedCombo) return null;

  const handleQuantityChange = (type) => {
    setQuantity((prev) => {
      if (type === "increment") return prev + 1;
      if (type === "decrement" && prev > 1) return prev - 1;
      return prev;
    });
  };

  const getColorHex = (colorName) => {
    switch (colorName) {
      case "Trắng":
        return "#FFFFFF";
      case "Đen":
        return "#000000";
      case "Đỏ":
        return "#FF0000";
      default:
        return "#CCCCCC";
    }
  };

  const visibleCombos = allCombos.slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-70"
        onClick={onClose}
      ></div>

      {/* Popup */}
      <div className="relative bg-[#323232] px-2 sm:pb-4 w-full mb-10 md:max-w-5xl shadow-xl z-50 flex flex-col md:flex-row overflow-y-auto max-h-[90vh] md:rounded-xl rounded-t-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-0 right-3 text-[#EEE1D8] text-2xl z-50 hover:text-gray-300 transition"
          aria-label="Close popup"
        >
          &times;
        </button>

        {/* Left: Image & Thumbnails */}
        <div className="w-full md:w-1/2 p-4 flex flex-col items-center ">
          <img
            src={selectedCombo.image}
            alt={selectedCombo.name}
            className="w-full h-auto max-h-[380px] max-w-[380px] md:max-h-[430px] md:max-w-[430px] object-contain mb-4 mt-4 sm:mt-6"
          />

          <div className="grid grid-cols-4 mt-6 gap-4">
            {visibleCombos.map((combo) => (
              <img
                key={combo.id}
                src={combo.image}
                alt={combo.name}
                className={`w-20 h-20 sm:w-24 sm:h-24 object-cover cursor-pointer hover:opacity-80 transition ${
                  combo.id === selectedId
                    ? "border-2 border-blue-500"
                    : "border-2 border-transparent"
                }`}
                onClick={() => onChangeCombo(combo.id)}
              />
            ))}
          </div>
        </div>

        {/* Right: Info & Options */}
        <div className="w-full md:w-1/2 p-4 sm:mt-4 sm:p-6 text-white text-left flex flex-col justify-between">
          {/* Info */}
          <div>
            <span
              className="text-[#EEE1D8] px-3 py-1 text-xs sm:text-sm font-medium rounded mb-2 inline-block"
              style={{ backgroundColor: theme.color }}
            >
              Pre-order
            </span>

            <h2 className="text-2xl sm:text-[36px] font-imbue font-semibold mb-2"
            style={{weight:600}}>
              {selectedCombo.name}
            </h2>
            <p className="text-lg sm:text-3xl font-bold mb-2">
              {selectedCombo.price}
            </p>

            <h1 className="text-xl mb-2 font-medium">Mô tả sản phẩm</h1>
            {selectedCombo.description && (
              <p className="text-base sm:text-base mb-4 whitespace-pre-wrap">
                {selectedCombo.description}
              </p>
            )}
          </div>

          {/* Options */}
          <div className="mt-4 flex flex-col">
            <div className="flex flex-col sm:flex-row gap-6 mb-6">
              {/* Colors */}
              {selectedCombo.colors?.length > 0 && (
                <div className="flex-none">
                  <label className="block text-sm mb-1">Màu sắc</label>
                  <div className="flex space-x-1 items-center">
                    {selectedCombo.colors.slice(0, 4).map((color, idx) => (
                      <div
                        key={idx}
                        className="w-7 h-7 rounded-full border-2 cursor-pointer flex items-center justify-center"
                        style={{
                          backgroundColor: getColorHex(color),
                          borderColor:
                            selectedColor === color ? theme.color : "#4D4D4D",
                        }}
                        onClick={() => setSelectedColor(color)}
                      >
                        {selectedColor === color && (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                              color: color === "Trắng" ? "#000000" : "#FFFFFF",
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="flex-none">
                <label className="block text-sm mb-1">Số lượng</label>
                <div className="inline-flex bg-[#3A3A3A] items-center border border-[#4D4D4D] rounded-lg overflow-hidden text-sm">
                  <button
                    className="px-2 py-1 hover:bg-gray-700"
                    onClick={() => handleQuantityChange("decrement")}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-2 py-1 border-l border-r border-[#4D4D4D]">
                    {quantity}
                  </span>
                  <button
                    className="px-2 py-1 hover:bg-gray-700"
                    onClick={() => handleQuantityChange("increment")}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Sizes */}
              {selectedCombo.sizes?.length > 0 && (
                <div className="flex-none">
                  <label className="block text-sm mb-1">Kích cỡ</label>
                  <div className="flex space-x-2">
                    {selectedCombo.sizes.map((size, idx) => (
                      <button
                        key={idx}
                        className={`px-2 py-1 rounded text-sm ${
                          selectedSize === size
                            ? "bg-gray-600 text-white"
                            : "bg-[#3A3A3A] text-gray-300 border border-[#4D4D4D] hover:bg-gray-700"
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Add to cart button - Fixed bottom on mobile */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#323232] z-50 md:relative md:bg-transparent md:p-0 md:mt-4">
              <button
                className="py-3 text-white font-semibold transition w-full text-sm rounded"
                style={{ backgroundColor: theme.color }}
                onClick={() => {
                  MerchService.addToCart({
                    ...selectedCombo,
                    color: selectedColor,
                    size: selectedSize,
                    amount: quantity,
                  });
                  // alert("Thêm vào giỏ hàng thành công");
                  setIsSuccessOpen(true); // Hiển thị popup

                  window.dispatchEvent(new Event('storage'));

                }}
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
      <AddSuccessfull
  isOpen={isSuccessOpen}
  onClose={() => setIsSuccessOpen(false)}
/>
    </div>
  );
}
