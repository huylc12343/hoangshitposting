import React, { useState } from 'react';
import { useTheme } from '../contexts/Theme';
import Merch_bg from '../assets/merch_bg_min.jpg';
import qr from '../assets/qr_test.png';
import up from '../assets/arrow-up-svgrepo-com.svg';
import down from '../assets/arrow-down-angle-svgrepo-com.svg';
import ConfirmPopup from '../components/Confirm_Popup'; // đường dẫn tùy theo vị trí file
import SuccessPopup from '../components/Success_Popup';
import trashIcon from '../assets/trash-delete-bin-svgrepo-com.svg';

export default function Cart_HeroSection() {
  const { theme } = useTheme();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const [showCustomerForm, setShowCustomerForm] = useState(true);
  const [showTicketForm, setShowTicketForm] = useState(true);
  const [showCheckoutForm, setShowCheckoutForm] = useState(true);
  const toggleCustomerForm = () => setShowCustomerForm(!showCustomerForm);
  const toggleTicketForm = () => setShowTicketForm(!showTicketForm);
  const toggleCheckoutForm = () => setShowCheckoutForm(!showCheckoutForm);

  const [showProductList, setShowProductList] = useState(true);
  const toggleProductList = () => setShowProductList(!showProductList);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const handleCompleteOrder = () => setShowConfirmPopup(true);

  const handleOrderSubmit = () => {
    setShowConfirmPopup(false); // Ẩn popup xác nhận
    setShowSuccessPopup(true);  // Hiện popup thành công
  };

  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-start p-8 overflow-x-hidden overflow-y-auto"
      style={{
        backgroundImage: `url(${Merch_bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,1))',
        }}
      ></div>

      {/* Main Content - Adjusted for centering and moderate width */}
      <div className="relative z-10 w-full max-w-screen-lg mx-auto text-white mt-24 space-y-6"> {/* Changed max-w-7xl to max-w-screen-lg and added mx-auto */}
        <div className="text-left">
          <h1 className="text-5xl font-bold mb-4">Mua vé</h1>
        </div>

        {/* Grid layout */}
        <div className="flex flex-col gap-6">


          <div className="md:col-span-2 space-y-6 order-last md:order-first">
            {/* Số lượng vé */}
            <div className="bg-[#323232] text-white p-6 shadow-lg text-left rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Số lượng vé</h2>
                <button
                  onClick={toggleTicketForm}
                  className="text-sm text-blue-600 hover:underline h-4 w-4"
                >
                  {showTicketForm ? <img src={up} alt="Thu gọn"/> : <img src={down} alt="Mở rộng"/>}
                </button>
              </div>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showTicketForm ? 'max-h-[1000px] opacity-100' : 'max-h-[0px] opacity-0'
                }`}
              >
                <form className="space-y-4">
                  <div>
                    <label className="block font-medium mb-2 text-white">[EARLY BIRD]Mỗi email có thể đặt 1 vé <br/> [STANDARD] Mỗi email có thể đặt tối đa 5 vé</label>
                    <div className="space-y-3">
                      <div className="border-white border rounded-lg p-4 shadow-md">
                        {/* Dòng trên cùng: Tên sự kiện và các nút */}
                        <div className="flex items-center justify-between">
                          <div className="text-left">
                            <p className="font-semibold text-white">CÓ CẦN PHẢI CÓ LÝ KHÔNG? 2025</p>
                            <p className="text-sm text-white">Loại vé: STANDARD</p>
                          </div>

                          <div className="flex items-center space-x-2">
                            <button className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300">-</button>
                            <span className="px-2">1</span>
                            <button className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300">+</button>
                            <button className="text-red-500 hover:text-red-700">
                              <img src={trashIcon} alt="Xóa" className="w-5 h-5" />
                            </button>
                          </div>
                        </div>

                        {/* Dòng giá bên dưới */}
                        <div className="mt-2 text-right text-sm text-white">
                          150.000đ
                        </div>
                      </div>
                      <div className="mt-2 flex justify-between text-lg text-white">
                        <span className="font-semibold">TỔNG</span>
                        <span>150.000đ</span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Thông tin khách hàng */}
            <div className="bg-[#323232] text-white p-6 shadow-lg text-left rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Chi tiết khách hàng</h2>
                <button
                  onClick={toggleCustomerForm}
                  className="text-sm text-blue-600 hover:underline w-4 h-4"
                >
                  {showCustomerForm ? <img src={up} alt="Thu gọn"/> : <img src={down} alt="Mở rộng"/>}
                </button>
              </div>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showCustomerForm ? 'max-h-[1000px] opacity-100' : 'max-h-[0px] opacity-0'
                }`}
              >
                <form className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block font-medium">Email</label>
                    <input type="email" className="w-full border p-2 rounded text-black" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium">Tên</label>
                      <input type="text" className="w-full border p-2 rounded text-black" />
                    </div>
                    <div>
                      <label className="block font-medium">Họ</label>
                      <input type="text" className="w-full border p-2 rounded text-black" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-medium">Số điện thoại liên lạc</label>
                    <input type="text" className="w-full border p-2 rounded text-black" />
                  </div>
                </form>
              </div>
            </div>

            {/* Thanh toán */}
            <div className="bg-[#323232] text-white p-6 shadow-lg text-left rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Thanh toán</h2>
                <button
                  onClick={toggleCheckoutForm}
                  className="text-sm text-blue-600 hover:underline w-4 h-4"
                >
                  {showCheckoutForm ? <img src={up} alt="Thu gọn"/> : <img src={down} alt="Mở rộng"/>}
                </button>
              </div>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showCheckoutForm ? 'max-h-[1000px] opacity-100' : 'max-h-[0px] opacity-0'
                }`}
              >
                <div className="space-y-6">
                  {/* Thông tin chuyển khoản */}
                  <div>
                    <h3 className="font-semibold mb-2">Thông tin chuyển khoản</h3>
                    <p>Dưới đây là thông tin thanh toán dịch vụ</p>
                    <div className="flex justify-center">
                      <div className="grid grid-cols-1 md:grid-cols-1 text-center">
                        <img src={qr} alt="QR Code" className="mx-auto w-48 h-48 object-contain" />
                        <p>Ngân hàng: Vietcombank</p>
                        <p>Số tài khoản: 09696969696</p>
                        <p>Chủ tài khoản: NGUYEN VAN A</p>
                        <p>Cú pháp chuyển khoản: </p>
                        <p>[Họ tên] [Số điện thoại] merch 102</p>
                        <a
                          href={qr}
                          download="ma_qr_chuyen_khoan.png"
                          className="inline-block mt-4 px-4 py-2 text-white rounded hover:opacity-90 transition"
                          style={{ backgroundColor: theme.color }}
                        >
                          Tải về mã QR
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Upload minh chứng */}
                  <div>
                    <h3 className="font-semibold mb-2 text-white">Minh chứng chuyển khoản</h3>
                    <p className="text-sm text-white italic mb-2">
                      Để tiện cho quá trình kiểm tra, vui lòng gửi ảnh chụp màn hình thanh toán thành công
                    </p>

                    <label
                      htmlFor="upload-proof"
                      className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-6 text-white text-sm cursor-pointer hover:border-blue-400 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-gray-300 mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4 4m0 0l4-4m-4 4V4" />
                      </svg>
                      <span className="font-medium">Nhấn để tải lên hoặc kéo thả tệp vào đây</span>
                      <span className="text-xs text-gray-400 mt-1">Dung lượng tối đa: 30MB</span>
                      <input
                        id="upload-proof"
                        type="file"
                        accept="image/*"
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <button
            onClick={handleCompleteOrder}
            className="w-full text-white py-4 rounded text-lg hover:opacity-90 transition"
            style={{ backgroundColor: theme.color }}
          >
            Hoàn thành đặt vé
          </button>
        </div>
        <ConfirmPopup
          isOpen={showConfirmPopup}
          onClose={() => setShowConfirmPopup(false)}
          onConfirm={handleOrderSubmit}
          message="Vui lòng kiểm tra kỹ thông tin và tải lên minh chứng chuyển khoản để đảm bảo giao dịch chính xác."
        />
        <SuccessPopup
          isOpen={showSuccessPopup}
          onClose={() => setShowSuccessPopup(false)}
          onConfirm={() => setShowSuccessPopup(false)}
        />
      </div>
    </div>
  );
}