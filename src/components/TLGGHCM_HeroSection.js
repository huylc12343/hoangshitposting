import React from "react";
import event_bg from "../assets/event_bg_min.jpg";
import Event_HeroSection2 from "./TLGGHCM_HeroSection2";
import bg_button from "../assets/g7-min.png";
import Event_HeroSection4 from "./Event_HeroSection4";
import ticket_button from "../assets/ticket_svg.png";
import Event_HeroSection3 from "./TLGGHCM_HeroSection3";
import { useState } from "react";
import TLGGHCM_Popup from "./TLGGHCM_Popup";

export default function Event_HeroSection() {
  const [showPopup, setShowPopup] = useState(false); // ✅ popup state

  return (
    <section
      className="relative w-full pt-[100px] pb-20 text-white px-4 md:px-8 lg:px-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${event_bg})` }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,1))",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-12 mt-12">
        <div className="col-span-1"></div>

        <div className="col-span-10 text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 whitespace-normal md:whitespace-nowrap font-imbue">
            TRIỂN LÃM "GẤP GAP"
          </h1>
          <p className="text-base md:text-lg text-gray-200 mb-6 font-Averta-CY">
            12 - 14/09/2025 - TP.HCM
          </p>

          <div className="relative w-full h-[80px] rounded-[4px] overflow-hidden">
            {/* Nền ảnh */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${bg_button})` }}
            ></div>

            {/* Lớp phủ màu #BC4535 với độ trong suốt */}
            <div className="absolute inset-0 bg-[#BC4535] opacity-80"></div>

            {/* Nút nội dung */}
            <button
              onClick={() => setShowPopup(true)}
              className="relative z-10 w-full h-full flex items-center justify-center gap-3 text-white text-lg font-Averta-CY hover:opacity-90 transition"
            >
              <img
                src={ticket_button}
                alt="ticket icon"
                className="h-4 w-auto"
              />
              Tham gia triển lãm
            </button>
          </div>

          <div className="mt-10">
            <Event_HeroSection2 />
          </div>
          <div className="mt-10">
            <Event_HeroSection3 />
          </div>
        </div>

        <div className="col-span-1"></div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-4">
          <TLGGHCM_Popup onClose={() => setShowPopup(false)} />
        </div>
      )}
    </section>
  );
}
