import React from "react";
import demoImg from "../assets/ticket_popup_banner.png";
import { Link, useNavigate } from "react-router-dom";
import TicketService from "../services/TicketService";
import { formatToVND } from "../utils/NumberFormat";
import { useTheme } from "../contexts/Theme";

export default function Ticket_Popup({ ticket, onClose }) {
  const navigate = useNavigate();

  const { theme } = useTheme();

  const handleOverlayClick = (e) => {
    onClose(); // gọi onClose khi click vào nền
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-[#323232] bg-opacity-60 z-50 flex items-center justify-center transition-all px-4"
      onClick={handleOverlayClick} // click ra ngoài thì đóng
    >
      <div
        className="bg-[#323232] text-white p-6 rounded-lg w-full max-w-2xl relative shadow-2xl"
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
          <h2
            className="text-lg md:text-3xl font-semibold truncate pr-4"
            style={{
              fontFamily: "Imbue, serif",
            }}
          >
            [{ticket.name.toUpperCase()}] CÓ CẦN PHẢI CÓ LÝ KHÔNG? 2025
          </h2>
          <span
            className="text-lg md:text-3xl font-bold flex-shrink-0"
            style={{
              fontFamily: "Imbue, serif",
            }}
          >
            {formatToVND(ticket.price)}
          </span>
        </div>

        {/* Mô tả sự kiện */}
        <div className="flex flex-col gap-4 mt-6 mb-12 text-sm md:text-base text-white leading-relaxed space-y-2">
          <p>
            Với sứ mệnh giữ gìn, lan toả tình yêu dành cho âm nhạc Cá Hồi Hoang,
            Cover Show tại Sài Gòn sẽ không chỉ là một buổi diễn đơn thuần mà là
            nơi ký ức ùa về, cảm xúc vỡ oà và kết nối được thắp sáng - để hành
            trình sống cùng âm nhạc Cá “sẽ luôn là cái gì đó mãi mãi”.
          </p>
          <p>
            🐟 Cover Show "CÓ CẦN PHẢI CÓ LÝ KHÔNG?" Sài Gòn <br />
            ► Thời gian: 19h - 22h 13/09/2025 <br />
            ► Địa điểm: Golden Bird's Event Space - 142 Đường Trần Não, Phường
            Bình An, Quận 2, Thành phố Thủ Đức, Hồ Chí Minh <br />
          </p>
        </div>

        {/* Nút đặt vé */}

        <div
          className="w-full py-3 rounded-md text-white font-semibold hover:opacity-50 transition flex justify-center"
          style={{ backgroundColor: theme.color }}
          onClick={() => {
            TicketService.holdTicket(ticket.id, 1)
              .then((data) => {
                localStorage.setItem("holdId", data);
                onClose();

                navigate("/buyticket/" + ticket.id);
              })
              .catch((error) => {
                alert(error.message);
              });
          }}
        >
          <p>Mua vé ngay</p>
        </div>
      </div>
    </div>
  );
}
