import React from "react";
import cahoihop from "../assets/cahoihop_ofc_min.jpg";
import landyard from "../assets/landyard_min.jpg";
import aoGapGap from "../assets/2ao_min.jpg";
import khanGapGap from "../assets/khangapgap_min.jpg";
import { useTheme } from "../contexts/Theme";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Merch_Popup from "./Merch_Popup";
import allCombos from "../data/Merch";
export default function Merch() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleSelectCombo = (id) => {
    setSelectedId(id);
    setShowPopup(true);
  };
  return (
    <section
      className="relative w-full py-20 text-[#EEE1D8] px-4 md:px-8 lg:px-12 bg-cover bg-center bg-no-repeat"
      // style={{ backgroundImage: theme.background }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl text-center mb-16 font-imbue tracking-wide">
          MERCH
        </h1>

        {/* Desktop layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto p-2">
          {/* Left large image */}
          <div className="flex justify-center items-center p-2 overflow-hidden bg-white/5">
            <img
              src={cahoihop}
              alt="Main Merch"
              className="w-full h-auto max-h-[600px] object-cover transform transition duration-300 hover:scale-105"
              onClick={() => handleSelectCombo(10)}
            />
          </div>

          {/* 2x2 grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 p-2">
            <div className="flex justify-center items-center overflow-hidden bg-white/5">
              <img
                src={landyard}
                alt="Merch Item 1"
                className="w-full h-auto object-cover transform transition duration-300 hover:scale-105"
                onClick={() => handleSelectCombo(1)}
              />
            </div>
            <div className="flex justify-center items-center overflow-hidden bg-white/5">
              <img
                src={aoGapGap}
                alt="Merch Item 2"
                className="w-full h-auto object-cover transform transition duration-300 hover:scale-105"
                onClick={() => handleSelectCombo(2)}
              />
            </div>
            <div className="flex justify-center items-center overflow-hidden bg-white/5">
              <img
                src={khanGapGap}
                className="w-full h-auto object-cover transform transition duration-300 hover:scale-105"
                onClick={() => handleSelectCombo(3)}
              />
            </div>
            <div
              className="group flex justify-center items-center overflow-hidden bg-[#EEE1D8]  transition duration-300 cursor-pointer"
              onClick={() => navigate("/merch")}
            >
              <div className="text-lg md:text-xl  font-semibold text-[#BC4535] group-hover:scale-105 font-Averta-CY">
                Tìm hiểu thêm
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col gap-4 max-w-xl mx-auto p-2">
          {/* Hàng 1: Merch Item 1 full width */}
          <div className="flex justify-center items-center overflow-hidden bg-white/5">
            <img
              src={landyard}
              alt="Merch Item 1"
              className="w-full h-auto object-cover transform transition duration-300 hover:scale-105"
              onClick={() => handleSelectCombo(1)}
            />
          </div>

          {/* Hàng 2: Merch Item 2 (trái) + Tìm hiểu thêm (phải) */}
          <div className="grid grid-cols-2 gap-2">
            <div className="flex justify-center items-center overflow-hidden bg-white/5">
              <img
                src={aoGapGap}
                alt="Merch Item 2"
                className="w-full h-auto object-cover transform transition duration-300 hover:scale-105"
                onClick={() => handleSelectCombo(2)}
              />
            </div>
            <button
              className="flex justify-center items-center overflow-hidden bg-[#EEE1D8] transition duration-300 cursor-pointer"
              onClick={() => {
                navigate("/merch");
              }}
            >
              <span className={"text-base font-Averta-CY text-[#BC4535]"}>
                Tìm hiểu thêm
              </span>
            </button>
          </div>
        </div>
      </div>
      {showPopup && (
        <Merch_Popup
          allCombos={allCombos}
          selectedId={selectedId}
          onClose={() => setShowPopup(false)}
          onChangeCombo={(newId) => setSelectedId(newId)}
        />
      )}
    </section>
  );
}
