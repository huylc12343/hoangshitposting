import React, { useRef, useEffect } from "react";
import demoImg from "../assets/GAPGAP_Sai_gon_web-14.png";
import { Link, useNavigate } from "react-router-dom";
import TicketService from "../services/TicketService";
import { formatToVND } from "../utils/NumberFormat";
import { useTheme } from "../contexts/Theme";
import clockIcon from "../assets/Clock.png";
import mapPin from "../assets/MapPin.png";

export default function Ticket_Popup({ ticket, onClose }) {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const popupRef = useRef();

  // Effect to handle clicks outside the popup to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  // Prevents click events inside the popup from propagating to the overlay
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  // If no ticket data is provided, don't render the popup
  if (!ticket) return null;

  return (
    <div className="fixed inset-0 bg-[#323232] bg-opacity-60 z-50 flex justify-center transition-all items-end text-left sm:items-start sm:pt-16 mt-5">
      <div
        ref={popupRef}
        className="bg-[#323232] text-white p-6 w-full relative shadow-2xl
                   flex flex-col h-[70vh] md:max-h-[80vh] sm:h-auto sm:max-h-[90vh] sm:max-w-2xl sm:rounded-lg
                   transform transition-all duration-300 animate-slide-up sm:animate-none
                   sm:mt-8"
        onClick={stopPropagation}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-1 right-2 text-gray-300 hover:text-white text-3xl transition-colors"
          aria-label="Close popup"
        >
          &times;
        </button>

        {/* Ticket Image */}
        <img
          src={demoImg}
          alt="Ticket"
          className="w-full h-auto max-h-[200px] object-cover rounded-md mb-4 sm:max-h-[200px]"
        />

        {/* Title + Price section */}
        <div
          className="flex flex-col items-start sm:flex-row sm:justify-between sm:items-center mb-2"
        >
          <h2
            className="text-xl md:text-3xl font-semibold pr-4 mb-1 sm:mb-0"
            style={{
              fontFamily: "Imbue, serif",
            }}
          >
            [{ticket.name.toUpperCase()}] CÓ CẦN PHẢI CÓ LÝ KHÔNG? SÀI GÒN
          </h2>
          <span
            className="text-xl md:text-3xl font-bold flex-shrink-0"
            style={{
              fontFamily: "Imbue, serif",
            }}
          >
            {formatToVND(ticket.price)}
          </span>
        </div>

        {/* Event Description and Details - Scrollable on mobile */}
        <div
          className="flex flex-col mt-1 mb-6 text-sm md:text-base text-white leading-relaxed space-y-2 flex-grow overflow-y-auto custom-scrollbar-hide pr-2"
          style={{
            scrollbarWidth: "thin", // Firefox
            scrollbarColor: "#888 #2e2e2e", // Firefox: thumb & track
          }}
        >
          <p>
            Với sứ mệnh giữ gìn, lan toả tình yêu dành cho âm nhạc Cá Hồi Hoang,
            Cover Show tại Sài Gòn sẽ không chỉ là một buổi diễn đơn thuần mà là
            nơi ký ức ùa về, cảm xúc vỡ oà và kết nối được thắp sáng - để hành
            trình sống cùng âm nhạc Cá “sẽ luôn là cái gì đó mãi mãi”.
          </p>
          <div className="bg-[#434343] rounded-lg p-2 text-white font-sans">
            <h2 className="text-xl font-bold mb-3">Thông tin chi tiết</h2>

            <div className="flex items-start mb-3 gap-3">
              <img
                src={clockIcon}
                alt="clock"
                className="w-6 h-6 flex-shrink-0"
              />
              <p className="text-base leading-relaxed">
                19h - 22h 13/09/2025
              </p>
            </div>

            <div className="flex items-start gap-3">
              <img
                src={mapPin}
                alt="map"
                className="w-6 h-6 mt-1 flex-shrink-0"
              />
              <p className="text-base leading-relaxed">
                Golden Bird's Event Space - 142 Đường Trần Não, Phường Bình An, Quận 2, Thành phố Thủ Đức, Hồ Chí Minh
              </p>
            </div>
          </div>
        </div>

        {/* "Buy Ticket" button - Always at the bottom of the popup */}
        <button
          className="w-full py-3 mt-auto rounded-md text-white font-semibold hover:opacity-80 transition flex justify-center items-center"
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
        </button>
      </div>
    </div>
  );
}