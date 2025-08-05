import React from "react";
import warningIcon from "../assets/fail_pupup.png";
import { useTheme } from "../contexts/Theme";

export default function RegisFail_Popup({ isOpen, onClose }) {
  const { theme } = useTheme();
  if (!isOpen) return null;

  // Ngăn sự kiện lan ra ngoài popup
  const handlePopupClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} // Click ra ngoài để đóng
    >
      <div
        className="bg-[#323232] text-black rounded-xl shadow-2xl p-6 w-[90%] max-w-md space-y-4 relative"
        onClick={handlePopupClick} // Ngăn click bên trong popup
      >
        <div className="w-full flex justify-center">
          <img src={warningIcon} alt="Success" className="w-[60%] h-[60%]" />
        </div>
        <h2 className="text-3xl text-[#EEE1D8] font-bold text-center font-imbue">
          Đăng ký thất bại
        </h2>
        {/* Nội dung */}
        <div className="text-center text-gray-400 space-y-2">
          <p>
            Có lỗi xảy ra. Bạn thử lại sau nhé
          </p>
          <p>
            Hoặc liên hệ fanpage Hoang shitposting để được hỗ trợ nhanh nhất nha.
          </p>
        </div>

        <div className="flex justify-center pt-2">
          <button
            onClick={onClose}
            className="text-[#EEE1D8] px-4 py-2 w-full h-auto rounded text-base font-Averta-CY font-semibold hover:bg-gray-200"
            style={{ backgroundColor: theme.color }}
          >
            Đợi tụi mình xử lý nhé!
          </button>
        </div>
      </div>
    </div>
  );
}
