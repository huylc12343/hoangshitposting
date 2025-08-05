import React, { useState } from "react";
import trash from "../assets/Trash.png";
import { formatToVND } from "../utils/NumberFormat";
import MerchService from "../services/MerchService";
import { useEffect } from "react";
export default function Product_item({
  description,
  size,
  item,
  onItemUpdated,
  onItemRemoved,
}) {
  const [amount, setAmount] = useState(item.amount);
  const [displayImage, setDisplayImage] = useState(item.image); // State để lưu hình ảnh hiển thị

  // useEffect để cập nhật ảnh khi item.type thay đổi
  useEffect(() => {
    if (item.imagesByType && item.type) {
      setDisplayImage(item.imagesByType[item.type]);
    } else {
      setDisplayImage(item.image);
    }
  }, [item.type, item.imagesByType, item.image]);

  const handleIncrease = () => {
    MerchService.increaseAmount(item.id);
    item.amount++;
    setAmount(amount + 1);
    onItemUpdated(item);
    window.dispatchEvent(new Event('storage'));
  };

  const handleDecrease = () => {
    if (amount === 1) return; // Use === for strict comparison
    MerchService.decreaseAmount(item.id);
    item.amount--;
    setAmount(amount - 1);
    onItemUpdated(item);
    window.dispatchEvent(new Event('storage'));
  };

  const confirmDelete = () => {
    const result = window.confirm(
      "Bạn xác nhận muốn xoá " + item.name + " ra khỏi giỏ hàng?" // Assuming item.name is the correct property for the product title
    );
    if (result) {
      MerchService.removeFromCart(item.id);
      onItemRemoved();
      window.dispatchEvent(new Event('storage'));
    }
  };

  return (
    <div className="flex items-center sm:p-4 text-left border border-[#EEE1D8] bg-[#272727] p-1 rounded-lg shadow-md text-white">
      {/* Image Container */}
      <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-[#2A2A2A] overflow-hidden mr-3 sm:mr-4 rounded-lg"> {/* Added rounded-lg */}
        <img
          src={displayImage}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details (Name, Size, Quantity Controls) */}
      <div className="flex-grow flex flex-col justify-center h-full"> {/* Changed self-start to justify-center and h-full */}
        {/* Title and Size */}
        <div>
          <p
            className="text-base sm:text-lg mb-1 max-w-[90px] sm:max-w-full line-clamp-2"
            title={item.name}
          >
            {item.name}
          </p>

          {size && (
            <p className="text-gray-200 text-xs sm:text-sm">Size: {size}</p>
          )}
          {item.color && (
            <p className="text-gray-200 text-xs sm:text-sm">
              Màu sắc: {item.color}
            </p>
          )}
          {item.type && (
            <p className="text-gray-200 text-xs sm:text-sm">
              Loại: {item.type}
            </p>
          )}
        </div>

        {/* Quantity Controls and Trash icon (visible on all screen sizes) */}
        <div className="flex items-center mt-2">
          {/* Minus button */}
          <div
            className="w-7 h-7 flex items-center justify-center cursor-pointer rounded-l-md border border-[#666] hover:bg-gray-700 hover:text-white text-sm"
            onClick={handleDecrease}
          >
            -
          </div>
          {/* Quantity display */}
          <div className="w-7 h-7 flex items-center justify-center border-t border-b border-[#666] text-sm">
            {amount}
          </div>
          {/* Plus button */}
          <div
            className="w-7 h-7 flex items-center justify-center cursor-pointer rounded-r-md border border-[#666] hover:bg-gray-700 hover:text-white text-sm"
            onClick={handleIncrease}
          >
            +
          </div>
          {/* Trash icon */}
          <div
            className="ml-4 cursor-pointer"
            onClick={confirmDelete}
          >
            <img src={trash} alt="Delete" className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* Right Section (Price) */}
      {/* Changed self-start to self-center */}
      <div className="flex-shrink-0 ml-4 text-right self-center"> 
        <p className="text-base font-Averta-CY"> {/* Added font-bold for price */}
          {formatToVND(item.price * amount)}
        </p>
      </div>
    </div>
  );
}