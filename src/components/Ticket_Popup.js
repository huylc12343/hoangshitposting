import React from 'react';
import demoImg from '../assets/TicketCard.png';
import { Link } from 'react-router-dom';

export default function Ticket_Popup({ onClose }) {
  const theme = {
    primary: '#FF4C4C',
  };

  // Hàm xử lý click ra ngoài
  const handleOverlayClick = (e) => {
    onClose(); // gọi onClose khi click vào nền
  };

  // Ngăn sự kiện click nổi bọt khi click vào nội dung
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-[#323232] bg-opacity-60 z-50 flex items-center justify-center transition-all px-4"
      onClick={handleOverlayClick} // click ra ngoài thì đóng
    >
      <div
        className="bg-white text-black p-6 rounded-lg w-full max-w-2xl relative shadow-2xl"
        onClick={stopPropagation} // ngăn click vào nội dung bị bubbled lên overlay
      >
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 hover:text-black text-2xl font-bold"
        >
          ×
        </button>

        <img
          src={demoImg}
          alt="Ticket"
          className="w-full h-auto max-h-[300px] object-cover rounded-md mb-4"
        />

        {/* Tiêu đề + Giá */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg md:text-xl font-semibold truncate pr-4">
            [STANDARD] CÓ CẦN PHẢI CÓ LÝ KHÔNG? 2025
          </h2>
          <span className="text-base md:text-lg font-bold text-red-600 flex-shrink-0">
            Từ 150.000đ
          </span>
        </div>

        {/* Mô tả sự kiện */}
        <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-2 mb-6">
          <p>
            Một đêm nhạc đắm chìm trong cảm xúc, hoài niệm và những câu hỏi không lời giải.
            <br />
            “Có Cần Phải Có Lý Không?” là cover show được dàn dựng công phu bởi Gấp Gáp Band –
            nơi những bản hit cũ được thổi làn gió mới đầy cảm xúc.
          </p>
          <p>
            Từ acoustic mộc mạc đến rock cháy bỏng, từng tiết mục là một lát cắt ký ức và tâm trạng
            của những kẻ từng "gấp gáp" trong yêu thương, lý trí và cả những hoang mang vô hình.
          </p>
          <p>
            🎸 <strong>Thời gian:</strong> 9H–21H, ngày 12/12<br />
            📍 <strong>Địa điểm:</strong> LP Club – 174 Kim Mã, Ba Đình, Hà Nội
          </p>
          <p>
            Vé STANDARD – chỗ ngồi tự do, không giới hạn cảm xúc.<br />
            Sẵn sàng chưa? Gấp gáp là để không bỏ lỡ.
          </p>
        </div>

        {/* Nút đặt vé */}
        
        <Link to="/buyticket" onClick={onClose}>
        <button
            className="w-full py-3 rounded-md text-white font-semibold hover:opacity-50 transition"
            style={{ backgroundColor: theme.primary }}
        >
            Mua vé ngay
        </button>
        </Link>

      </div>
    </div>
  );
}
