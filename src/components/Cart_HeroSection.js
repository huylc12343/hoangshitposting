import React, { useState } from 'react';
import { useTheme } from '../contexts/Theme';
import Merch_bg from '../assets/merch_bg_min.jpg';

export default function Cart_HeroSection() {
  const { theme } = useTheme();
  const [showCustomerForm, setShowCustomerForm] = useState(true);
  const [showPaymentForm, setShowPaymentForm] = useState(true);
  const [showCheckoutForm, setShowCheckoutForm] = useState(true);

  const toggleCustomerForm = () => setShowCustomerForm(!showCustomerForm);
  const togglePaymentForm = () => setShowPaymentForm(!showPaymentForm);
  const toggleCheckoutForm = () => setShowCheckoutForm(!showCheckoutForm);

  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-start p-8 overflow-x-hidden overflow-y-auto"
      style={{
        backgroundImage: `url(${Merch_bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Lớp phủ đen dần */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,1))',
        }}
      ></div>

      {/* Nội dung chính */}
      <div className="relative z-10 w-full max-w-7xl text-white mt-24 space-y-6">
        {/* Tiêu đề */}
        <div className="text-left">
          <h1 className="text-5xl font-bold mb-4">Giỏ hàng</h1>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cột trái: Các form */}
          <div className="md:col-span-2 space-y-6">
            {/* Thông tin khách hàng */}
            <div className="bg-white text-black p-6 shadow-lg text-left">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Thông tin khách hàng</h2>
                <button
                  onClick={toggleCustomerForm}
                  className="text-sm text-blue-600 hover:underline"
                >
                  {showCustomerForm ? 'Ẩn ▲' : 'Hiện ▼'}
                </button>
              </div>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showCustomerForm ? 'max-h-[1000px] opacity-100' : 'max-h-[0px] opacity-0'
                }`}
              >
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium">Họ tên</label>
                    <input type="text" className="w-full border p-2 rounded" />
                  </div>
                  <div>
                    <label className="block font-medium">Email</label>
                    <input type="email" className="w-full border p-2 rounded" />
                  </div>
                  <div>
                    <label className="block font-medium">Số điện thoại</label>
                    <input type="text" className="w-full border p-2 rounded" />
                  </div>
                  <div>
                    <label className="block font-medium">Địa chỉ</label>
                    <input type="text" className="w-full border p-2 rounded" />
                  </div>
                </form>
              </div>
            </div>

            {/* Phương thức thanh toán */}
            <div className="bg-white text-black p-6 shadow-lg text-left">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Phương thức thanh toán</h2>
                <button
                  onClick={togglePaymentForm}
                  className="text-sm text-blue-600 hover:underline"
                >
                  {showPaymentForm ? 'Ẩn ▲' : 'Hiện ▼'}
                </button>
              </div>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showPaymentForm ? 'max-h-[1000px] opacity-100' : 'max-h-[0px] opacity-0'
                }`}
              >
                <form className="space-y-4">
                  <div>
                    <label className="block font-medium mb-1">Chọn hình thức thanh toán</label>
                    <select className="w-full border p-2 rounded">
                      <option>Thanh toán khi nhận hàng (COD)</option>
                      <option>Chuyển khoản ngân hàng</option>
                      <option>Ví điện tử (Momo, ZaloPay...)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-medium mb-1">Ghi chú (nếu có)</label>
                    <textarea
                      rows={3}
                      className="w-full border p-2 rounded"
                      placeholder="Ghi chú thêm..."
                    />
                  </div>
                </form>
              </div>
            </div>

            {/* Xác nhận & Thanh toán */}
            <div className="bg-white text-black p-6 shadow-lg text-left">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Xác nhận & Thanh toán</h2>
                <button
                  onClick={toggleCheckoutForm}
                  className="text-sm text-blue-600 hover:underline"
                >
                  {showCheckoutForm ? 'Ẩn ▲' : 'Hiện ▼'}
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
                    <ul className="list-disc pl-5 text-sm">
                      <li>Ngân hàng: Vietcombank</li>
                      <li>Số tài khoản: 0123 456 789</li>
                      <li>Chủ tài khoản: NGUYEN VAN A</li>
                      <li>Nội dung chuyển khoản: [SĐT] + [Họ tên]</li>
                    </ul>
                  </div>

                  {/* Upload minh chứng */}
                  <div>
                    <h3 className="font-semibold mb-2">Tải ảnh minh chứng thanh toán</h3>
                    <input
                      type="file"
                      accept="image/*"
                      className="block w-full border p-2 rounded"
                    />
                  </div>

                  <p className="text-sm text-gray-600 italic">
                    * Vui lòng kiểm tra lại thông tin và tải ảnh minh chứng nếu bạn đã chuyển khoản.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Cột phải: Danh sách sản phẩm dạng thẻ */}
          <div className="text-white px-6 py-0 shadow-lg text-left h-auto max-h-[600px] overflow-y-auto sticky top-0 rounded-lg self-start mt-0">
            {/* Danh sách sản phẩm dạng thẻ */}
            <div className="space-y-4 text-sm bg-[#323232] mt-0">
              <div className="border p-4 rounded shadow-sm">
                <p className="font-semibold">Combo 1</p>
                <p className="text-gray-700 text-sm">Áo thun + mũ lưỡi trai</p>
                <div className="flex justify-between mt-2 text-sm">
                  <span>Số lượng: 1</span>
                  <span>399.000đ</span>
                </div>
              </div>

              {/* Thẻ sản phẩm 2 */}
              <div className="border p-4 rounded shadow-sm">
                <p className="font-semibold">Combo 2</p>
                <p className="text-gray-700 text-sm">Hoodie + túi tote</p>
                <div className="flex justify-between mt-2 text-sm">
                  <span>Số lượng: 2</span>
                  <span>1.098.000đ</span>
                </div>
              </div>
            </div>

            {/* Tổng kết thanh toán */}
            <div className="mt-6 bg-[#323232] rounded border-white text-sm space-y-2">
              <div className="flex justify-between">
                <span>Tạm tính:</span>
                <span className="font-semibold">1.497.000đ</span>
              </div>
              <div className="flex justify-between">
                <span>Phí vận chuyển:</span>
                <span className="font-semibold">30.000đ</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-black border-t pt-2">
                <span>Tổng cộng:</span>
                <span>1.527.000đ</span>
              </div>
              <p className="text-gray-500 text-xs mt-2 italic">
                * Đã bao gồm VAT và phí xử lý giao dịch
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <button className="w-full bg-black text-white py-4 rounded text-lg hover:bg-gray-800 transition">
            Thanh toán
          </button>
        </div>
      </div>
    </div>
  );
}