import React, { useState, useRef, useEffect } from "react";
import GalleryService from "../services/GalleryService";
import RegisSuccess_Popup from "./RegisSuccess_Popup"; // đường dẫn đúng tới file popup thành công
import RegisFail_Popup from "./RegisFail_Popup"; // Đường dẫn chính xác

const TLGGHCM_Popup = ({ onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
const [showSuccessPopup, setShowSuccessPopup] = useState(false);
const [showFailPopup, setShowFailPopup] = useState(false);

  const popupRef = useRef();

  // Đóng khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        if (onClose) onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    GalleryService.sendGalleryInvitation(email, lastName + " " + firstName)
      .then((data) => {
        setShowSuccessPopup(true); // Hiện popup thành công

        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        if (onClose) onClose();
      })
.catch((e) => {
  setShowFailPopup(true); // Hiện popup thất bại
});
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-end sm:items-center justify-center text-left sm:px-0">
      <div
        ref={popupRef}
        className="bg-[#333] w-full sm:max-w-xl rounded-xl max-h-[80vh] pb-16 sm:pb-2 overflow-y-auto shadow-xl transform transition-all duration-300 animate-slide-up sm:animate-none"
      >
        <h2 className="text-white text-center mt-8 sm:mt-6 mb-4 text-3xl sm:text-4xl font-imbue font-semibold tracking-wide px-4">
          Đăng ký tham gia triển lãm
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 px-6 sm:px-10 pb-8 font-Averta-CY"
        >
          <div className="flex flex-wrap gap-5">
            <div className="flex flex-col flex-1 min-w-[calc(50%-10px)]">
              <label htmlFor="lastName" className="text-gray-300 mb-2 text-lg">
                Họ*
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Nhập họ"
                required
                className="bg-[#444] border border-[#555] rounded-md px-4 py-3 text-white outline-none placeholder-gray-500 focus:border-gray-200 focus:shadow-md"
              />
            </div>

            <div className="flex flex-col flex-1 min-w-[calc(50%-10px)]">
              <label htmlFor="firstName" className="text-gray-300 mb-2 text-lg">
                Tên*
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Nhập tên"
                required
                className="bg-[#444] border border-[#555] rounded-md px-4 py-3 text-white outline-none placeholder-gray-500 focus:border-gray-200 focus:shadow-md"
              />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-gray-300 mb-2 text-lg">
              Email*
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email"
              required
              className="bg-[#444] border border-[#555] rounded-md px-4 py-3 text-white outline-none placeholder-gray-500 focus:border-gray-200 focus:shadow-md"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="phoneNumber" className="text-gray-300 mb-2 text-lg">
              Số điện thoại liên lạc*
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Nhập số điện thoại"
              required
              className="bg-[#444] border border-[#555] rounded-md px-4 py-3 text-white outline-none placeholder-gray-500 focus:border-gray-200 focus:shadow-md"
            />
          </div>

          <button
            type="submit"
            className="hidden sm:block bg-[#cd4b3f] text-white py-4 px-8 rounded-md text-xl w-full transition-colors hover:bg-[#e05e50]"
          >
            Tham gia miễn phí
          </button>
        </form>
        {/* Sticky button for mobile */}
        <div className="sm:hidden fixed bottom-0 left-0 w-full px-6 pb-4 bg-[#333] z-50">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#cd4b3f] text-white py-4 px-8 rounded-md text-xl w-full transition-colors hover:bg-[#e05e50]"
          >
            Tham gia miễn phí
          </button>
        </div>
      </div>
      {showSuccessPopup && (
        <RegisSuccess_Popup
          isOpen={showSuccessPopup}
          onClose={() => {
            setShowSuccessPopup(false);
            if (onClose) onClose(); // đóng popup chính nếu muốn
          }}
        />
      )}

      {showFailPopup && (
        <RegisFail_Popup
          isOpen={showFailPopup}
          onClose={() => setShowFailPopup(false)}
        />
      )}


    </div>
    
  );
};

export default TLGGHCM_Popup;
