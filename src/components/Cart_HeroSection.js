import React, { useState } from 'react';
import { useTheme } from '../contexts/Theme';
import Merch_bg from '../assets/merch_bg_min.jpg';
import qr from '../assets/qr_test.png';
import up from '../assets/arrow-up-svgrepo-com.svg';
import down from '../assets/arrow-down-angle-svgrepo-com.svg';

export default function Cart_HeroSection() {
  const { theme } = useTheme();

  const [showCustomerForm, setShowCustomerForm] = useState(true);
  const [showShippingForm, setShowShippingForm] = useState(true);
  const [showCheckoutForm, setShowCheckoutForm] = useState(true);
  const toggleCustomerForm = () => setShowCustomerForm(!showCustomerForm);
  const toggleShippingForm = () => setShowShippingForm(!showShippingForm);
  const toggleCheckoutForm = () => setShowCheckoutForm(!showCheckoutForm);

  const [showProductList, setShowProductList] = useState(true);
  const toggleProductList = () => setShowProductList(!showProductList);

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

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl text-white mt-24 space-y-6">
        <div className="text-left">
          <h1 className="text-5xl font-bold mb-4">Giỏ hàng</h1>
        </div>

        {/* Grid layout */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
          {/* Danh sách sản phẩm */}
          <div className="md:col-span-1 order-first md:order-last w-full">
            {/* Toggle button on small screens */}
            <div className="md:hidden mb-4">
              <button
                onClick={toggleProductList}
                className="text-white text-sm flex items-center gap-2"
              >
                {showProductList ? (
                  <img src={up} className="w-4 h-4" alt="Thu gọn" />
                ) : (
                  <img src={down} className="w-4 h-4" alt="Mở rộng" />
                )}
                Chi tiết sản phẩm(4)
              </button>
            </div>

            {/* Danh sách sản phẩm - responsive */}
            <div
              className={`space-y-4 text-sm w-full transition-all duration-300 ease-in-out ${
                showProductList ? 'block' : 'hidden'
              } md:block`}
            >
              {/* Sản phẩm 1 */}
              <div className="w-full bg-[#323232] border border-white p-4 rounded-lg shadow-md">
                <p className="font-semibold">Combo 1</p>
                <p>Áo thun + mũ lưỡi trai</p>
                <div className="flex justify-between mt-2">
                  <span>Số lượng: 1</span>
                  <span>399.000đ</span>
                </div>
              </div>

              {/* Sản phẩm 2 */}
              <div className="w-full bg-[#323232] border border-white p-4 rounded-lg shadow-md">
                <p className="font-semibold">Combo 2</p>
                <p>Hoodie + túi tote</p>
                <div className="flex justify-between mt-2">
                  <span>Số lượng: 2</span>
                  <span>1.098.000đ</span>
                </div>
              </div>
            </div>

            {/* Tổng kết thanh toán */}
            <div className="mt-6 w-full bg-[#323232] text-sm space-y-2 p-4 text-white rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Thanh Toán</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Tổng thành phần</span>
                  <span>1.098.000đ</span>
                </div>
                <div className="flex justify-between">
                  <span>Tiền vận chuyển</span>
                  <span>30.000đ</span>
                </div>
                <div className="border-t border-gray-500 pt-2 flex justify-between font-semibold text-base">
                  <span>Tổng</span>
                  <span>1.128.000đ</span>
                </div>
              </div>
            </div>
          </div>
          {/* Cột trái: Các form - Đặt order-last mặc định, md:order-first cho màn hình lớn */}
          <div className="md:col-span-2 space-y-6 order-last md:order-first">
            {/* Thông tin khách hàng */}
            <div className="bg-[#323232] text-white p-6 shadow-lg text-left rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Thông tin khách hàng</h2>
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
                    <label className="block font-medium">Số điện thoại</label>
                    <input type="text" className="w-full border p-2 rounded text-black" />
                  </div>
                  <div>
                    <div>
                      <label className="block font-medium mb-1">Địa chỉ</label>
                      <textarea
                        rows={3}
                        className="w-full border p-2 rounded text-black"
                        placeholder="Nhập địa chỉ của bạn"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium">Quận / Huyện</label>
                      <input type="text" className="w-full border p-2 rounded text-black" />
                    </div>
                    <div>
                      <label className="block font-medium">Thành phố</label>
                      <input type="text" className="w-full border p-2 rounded text-black" />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Phương thức giao hàng */}
            <div className="bg-[#323232] text-white p-6 shadow-lg text-left rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Phương thức giao hàng</h2>
                <button
                  onClick={toggleShippingForm}
                  className="text-sm text-blue-600 hover:underline h-4 w-4"
                >
                  {showShippingForm ? <img src={up} alt="Thu gọn"/> : <img src={down} alt="Mở rộng"/>}
                </button>
              </div>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showShippingForm ? 'max-h-[1000px] opacity-100' : 'max-h-[0px] opacity-0'
                }`}
              >
                <form className="space-y-4">
                  <div>
                    <label className="block font-medium mb-2 text-white">Đây là sản phẩm pre-order nên là</label>
                    <div className="space-y-3">
                      {/* Option 1 */}
                      <label className="flex justify-between items-center border border-white rounded-lg p-4 cursor-pointer hover:border-blue-500 transition">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="shippingMethod"
                            value="shopee_express"
                            className="accent-blue-600"
                          />
                          <div className="ml-4 text-white">
                            <p className="font-semibold">Shopee Express</p>
                            <p className="text-sm text-gray-300">Giao hàng trong 1-2 ngày</p>
                          </div>
                        </div>
                        <div className="text-sm font-semibold text-white">25.000đ</div>
                      </label>

                      {/* Option 2 */}
                      <label className="flex justify-between items-center border border-white rounded-lg p-4 cursor-pointer hover:border-blue-500 transition">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="shippingMethod"
                            value="ghn"
                            className="accent-blue-600"
                          />
                          <div className="ml-4 text-white">
                            <p className="font-semibold">GHN</p>
                            <p className="text-sm text-gray-300">Giao hàng trong 2-3 ngày</p>
                          </div>
                        </div>
                        <div className="text-sm font-semibold text-white">20.000đ</div>
                      </label>

                      {/* Option 3 */}
                      <label className="flex justify-between items-center border border-white rounded-lg p-4 cursor-pointer hover:border-blue-500 transition">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="shippingMethod"
                            value="viettel_post"
                            className="accent-blue-600"
                          />
                          <div className="ml-4 text-white">
                            <p className="font-semibold">Viettel Post</p>
                            <p className="text-sm text-gray-300">Giao hàng trong 3-5 ngày</p>
                          </div>
                        </div>
                        <div className="text-sm font-semibold text-white">15.000đ</div>
                      </label>
                    </div>
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
            className="w-full text-white py-4 rounded text-lg hover:opacity-90 transition"
            style={{ backgroundColor: theme.color }}
          >
            Hoàn thành mua hàng
          </button>
        </div>
      </div>
    </div>
  );
}