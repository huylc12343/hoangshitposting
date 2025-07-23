import React, { useRef, useState } from 'react';
import Ticket_Popup from './Ticket_Popup'; // ✅ Import popup

const ticketData = [
  {
    title: '[STANDARD] CÓ CẦN PHẢI CÓ LÝ KHÔNG? 2025',
    price: 'Từ 150.000đ',
    description: 'Vé tiêu chuẩn cho sự kiện năm 2025.',
    isSoldOut: false,
  },
  {
    title: '[EARLY BIRD] CÓ CẦN PHẢI CÓ LÝ KHÔNG? 2026',
    price: 'Từ 175.000đ',
    description: 'Vé ưu đãi cho những người đăng ký sớm nhất năm 2026.',
    isSoldOut: true,
  },
  {
    title: 'CÓ CẦN PHẢI CÓ LÝ KHÔNG? 2027',
    price: '500.000 VND',
    description: 'Vé thông thường cho sự kiện năm 2027.',
    isSoldOut: false,
  },
  {
    title: 'CÓ CẦN PHẢI CÓ LÝ KHÔNG? 2028',
    price: '600.000 VND',
    description: 'Một loại vé khác cho năm 2028.',
    isSoldOut: false,
  },
  {
    title: 'CÓ CẦN PHẢI CÓ LÝ KHÔNG? 2029',
    price: '700.000 VND',
    description: 'Vé cao cấp cho năm 2029.',
    isSoldOut: true,
  },
  {
    title: 'CÓ CẦN PHẢI CÓ LÝ KHÔNG? 2030',
    price: '800.000 VND',
    description: 'Phiên bản đặc biệt năm 2030.',
    isSoldOut: false,
  },
];

export default function Ticket_Selection() {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedTicketIndex, setSelectedTicketIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // ✅ Thêm state hiển thị popup

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    e.preventDefault();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = x - startX;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleSelect = (index) => {
    if (!ticketData[index].isSoldOut) {
      setSelectedTicketIndex(index);
      setShowPopup(true); // ✅ Mở popup khi chọn vé
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false); // ✅ Đóng popup
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 py-12 bg-white/10 backdrop-blur-sm rounded-xl">
      <h2 className="text-3xl md:text-4xl font-bold text-left mb-10">
        TICKET
      </h2>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{
          MsOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleMouseMove}
      >
        {ticketData.map((ticket, index) => (
          <div
            key={index}
            className="flex-none w-[280px] md:w-[calc(33.33%-16px)] lg:w-[calc(33.33%-16px)]"
          >
            <div className="flex flex-col justify-between bg-white/40 backdrop-blur-md rounded-2xl shadow-md p-5 hover:shadow-lg transition duration-300 min-h-[220px] max-h-[260px]">
              <div className="flex-1">
                <h3 className="text-lg mb-2">{ticket.title}</h3>
                <p className="text-base text-red-600 mb-3">{ticket.price}</p>
              </div>

              {ticket.isSoldOut ? (
                <button
                  className="mt-5 bg-gray-400 text-white text-sm px-4 py-2 rounded cursor-not-allowed"
                  disabled
                >
                  Hết Vé
                </button>
              ) : selectedTicketIndex === index && showPopup ? (
                <button
                  className="mt-5 bg-green-600 text-white text-sm px-4 py-2 rounded cursor-not-allowed"
                  disabled
                >
                  Đã Chọn
                </button>
              ) : (
                <button
                  className="mt-5 bg-black text-white text-sm px-4 py-2 rounded hover:bg-gray-800 transition"
                  onClick={() => handleSelect(index)}
                >
                  Chọn Vé
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Hiển thị Popup nếu được chọn */}
      {showPopup && (
        <Ticket_Popup
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
}
