import React, { useState } from "react";
import trash from "../assets/Trash.png";
import { formatToVND } from "../utils/NumberFormat";
import MerchService from "../services/MerchService";

export default function Product_item({
  description,
  size,
  item,
  onItemUpdated,
  onItemRemoved,
}) {
  const [amount, setAmount] = useState(item.amount);

  const handleIncrease = () => {
    MerchService.increaseAmount(item.id);
    item.amount++;
    setAmount(amount + 1);
    onItemUpdated(item);
    window.dispatchEvent(new Event('storage'));
  };

  const handleDecrease = () => {
    if (amount == 1) return;
    MerchService.decreaseAmount(item.id);
    item.amount--;
    setAmount(amount - 1);
    onItemUpdated(item);
    window.dispatchEvent(new Event('storage'));

  };

  const confirmDelete = () => {
    const result = window.confirm(
      "Bạn xác nhận muốn xoá " + item.title + " ra khỏi giỏ hàng?"
    );
    if (result) {
      MerchService.removeFromCart(item.id);
      onItemRemoved();
      window.dispatchEvent(new Event('storage'));

    }
  };

  return (
    <div className="flex items-center text-left border border-[#EEE1D8] bg-[#272727] p-4 rounded-lg shadow-md text-white">
      {/* Image Container */}
      <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-[#2A2A2A]  overflow-hidden mr-3 sm:mr-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details (Name, Description, Size) */}
      <div className="flex-grow self-start">
        {/* Title: truncated on small screens, full on larger screens */}
        {/* On mobile, max-w-[120px] will force truncation earlier if title is too long,
            but still allow it to take available space.
            Adjust max-w-full for md screens and larger if you want it to wrap/not truncate */}
        <p
          className="text-base sm:text-lg mb-1 max-w-[90px] truncate  whitespace-nowrap overflow-hidden
    sm:max-w-full sm:whitespace-normal sm:overflow-visible"
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

        <div className="flex items-center mb-1 sm:mb-2 md:hidden">
          {/* Minus button */}
          <div
            className="w-6 h-6 flex items-center justify-center cursor-pointer rounded border border-[#666] hover:bg-gray-100 hover:text-black mr-1 text-sm"
            onClick={handleDecrease}
          >
            -
          </div>
          {/* Quantity display */}
          <div className="w-6 h-6 flex items-center justify-center mr-1 text-sm">
            1
          </div>
          {/* Plus button (hidden on mobile for now, as per image) */}
          {/* If you want to show it, remove 'hidden md:flex' and adjust spacing */}
          <button
            className="w-6 h-6 flex items-center justify-center cursor-pointer rounded border border-[#666] hover:bg-gray-100 hover:text-black mr-1 text-sm"
            onClick={handleIncrease}
          >
            +
          </button>
          {/* Trash icon */}
          {/* On mobile, align it to the right of the quantity area, or stack if preferred */}
          <div
            className="w-6 h-6 flex items-center justify-center cursor-pointer rounded hover:bg-gray-100 ml-1"
            onClick={confirmDelete}
          >
            <img src={trash} alt="Delete" className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Right Section (Controls and Price) */}
      {/* Ensure this section is flexible for mobile layout */}
      <div className="flex flex-col items-end justify-between ml-2 sm:ml-4 h-20 sm:h-24">
        {/* Controls: Flex container for quantity and trash icon */}
        <div className="md:flex items-center mb-1 sm:mb-2 hidden">
          {/* Minus button */}
          <div
            className="w-6 h-6 flex items-center justify-center cursor-pointer rounded border border-[#666] hover:bg-gray-100 hover:text-black mr-1 text-sm"
            onClick={handleDecrease}
          >
            -
          </div>
          {/* Quantity display */}
          <div className="w-6 h-6 flex items-center justify-center mr-1 text-sm">
            {amount}
          </div>
          {/* Plus button (hidden on mobile for now, as per image) */}
          {/* If you want to show it, remove 'hidden md:flex' and adjust spacing */}
          <div
            className="w-6 h-6 flex items-center justify-center cursor-pointer rounded border border-[#666] hover:bg-gray-100 hover:text-black mr-1 text-sm"
            onClick={handleIncrease}
          >
            +
          </div>
          {/* Trash icon */}
          {/* On mobile, align it to the right of the quantity area, or stack if preferred */}
          <div
            className="w-6 h-6 flex items-center justify-center cursor-pointer rounded hover:bg-gray-100 ml-1"
            onClick={confirmDelete}
          >
            <img src={trash} alt="Delete" className="h-4 w-4" />
          </div>
        </div>
        {/* Price */}
        <p className="text-[10px] sm:text-lg flex-shrink-0">
          {formatToVND(item.price * amount)}
        </p>
      </div>
    </div>
  );
}
