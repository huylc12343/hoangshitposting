import React, { useEffect, useRef, useState } from "react";
import TicketService from "../services/TicketService";
import { formatToVND } from "../utils/NumberFormat";
import { useTheme } from "../contexts/Theme";

export default function Ticket_Selection({ onTicketSelect }) {
  const { theme } = useTheme();
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedTicketIndex, setSelectedTicketIndex] = useState(null);
  const [tickets, setTickets] = useState(null);

  useEffect(() => {
    if (tickets != null) return;
    const fetchTickets = async () => {
      TicketService.getAllTickets()
        .then((data) => {
          setTickets(data);
        })
        .catch((error) => {
          alert(error.message);
        });
    };

    fetchTickets();
  }, [tickets]);

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
    if (!tickets[index].isSoldOut) {
      setSelectedTicketIndex(index);
      onTicketSelect(tickets[index]); // 👈 Gọi callback gửi dữ liệu ra ngoài
    }
  };

  if (!tickets) return <p>Loading...</p>;

  return (
    <div className="px-4 md:px-8 lg:px-16 py-12 bg-white/10 backdrop-blur-sm rounded-xl">
      <p
        className="text-3xl md:text-4xl font-bold text-left mb-10"
        style={{
          fontFamily: "Imbue, serif",
          fontSize: "64px",
          fontWeight: 500,
        }}
      >
        TICKET
      </p>

<div
  ref={scrollContainerRef}
  className="flex flex-col md:flex-row gap-6 pb-4 md:overflow-x-auto scrollbar-hide md:cursor-grab md:active:cursor-grabbing"
  style={{
    MsOverflowStyle: "none",
    scrollbarWidth: "none",
  }}
  onMouseDown={handleMouseDown}
  onMouseLeave={handleMouseLeave}
  onMouseUp={handleMouseUp}
  onMouseMove={handleMouseMove}
  onTouchStart={handleMouseDown}
  onTouchEnd={handleMouseUp}
  onTouchMove={handleMouseMove}
>

        {tickets.map((ticket, index) => (
          <div
            key={index}
            className="flex-none w-auto md:w-[calc(50%-16px)] lg:w-[calc(50%-16px)]"
          >
            <div className="flex flex-col justify-between bg-white/5 backdrop-blur-md rounded-2xl shadow-md p-5 hover:shadow-lg transition duration-300">
              <div className="mb-4">
                <h3 className="text-lg mb-2 font-semibold">
                  [{ticket.name.toUpperCase()}]<br /> CÓ CẦN PHẢI CÓ LÝ KHÔNG? SG 2025
                </h3>
                <p className="text-base text-white">
                  {formatToVND(ticket.price)}
                </p>
              </div>

              {ticket.soldOut ? (
                <button
                  className="bg-gray-400 text-white text-sm px-4 py-4 rounded cursor-not-allowed"
                  disabled
                >
                  Hết Vé
                </button>
              ) : (
                <button
                  className={` text-white text-sm px-4 py-4 rounded cursor-pointer transition`}
                  style={{
                    backgroundColor: theme.color,
                  }}
                  onClick={() => handleSelect(index)}
                >
                  Mua Vé
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
