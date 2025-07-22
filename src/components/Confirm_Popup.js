import React from 'react';
import warningIcon from '../assets/confirm_popup_img.png'; // thay bằng ảnh phù hợp
import { useTheme } from '../contexts/Theme';

export default function Confirm_Popup({

  isOpen,
  onClose,
  onConfirm,
  message = "Bạn có chắc chắn muốn tiếp tục?",
}) {
const { theme } = useTheme();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#323232] text-black  rounded-xl shadow-2xl p-6 w-[90%] max-w-md space-y-4 relative">
        
        {/* Icon cảnh báo ở trên */}
        <div className="w-full flex justify-center">
          <img src={warningIcon} alt="Warning" className="w-[60%] h-[60%]" />
        </div>

        {/* Tiêu đề */}
        <h2 className="text-xl text-white font-bold text-center">LƯU Ý</h2>

        {/* Nội dung */}
        <p className="text-center text-gray-400">{message}</p>

        {/* 2 nút xếp thành 1 cột */}
        <div className="flex flex-col gap-4 pt-4">
          <button
          style={{
            backgroundColor: theme.color,
          }}
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="w-full py-2 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold"
          >
            Xác nhận đảm bảo
          </button>
          <button
            onClick={onClose}
            className="w-full text-gray-400 py-2 rounded border border-gray-300 hover:bg-gray-300 text-sm font-semibold"
          >
            Kiểm tra lại
          </button>
        </div>
      </div>
    </div>
  );
}
