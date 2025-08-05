import React, { useEffect, useState } from "react";
import { useTheme } from "../contexts/Theme";
import Merch_bg from "../assets/merch_bg_min.jpg";
import qr from "../assets/qr_test.png";
import up from "../assets/arrow-up-svgrepo-com.svg";
import down from "../assets/arrow-down-angle-svgrepo-com.svg";
import ConfirmPopup from "../components/Confirm_Popup"; // đường dẫn tùy theo vị trí file
import SuccessPopup from "../components/Success_Popup";
import ProductItem from "../components/Product_item";
import Product1 from "../assets/combo1-min.jpg";
import MerchService from "../services/MerchService";
import { formatToVND } from "../utils/NumberFormat";
import ShippingService from "../services/ShippingService";
import { useNavigate } from "react-router-dom";
import { imageToBase64 } from "../utils/ImageConverter";
import empty_img from "../assets/emty_merch.png";
import Fail_Popup from "./Fail_Popup";
export default function Cart_HeroSection() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showFailPopup, setShowFailPopup] = useState(false);

  const [showCustomerForm, setShowCustomerForm] = useState(true);
  const [showShippingForm, setShowShippingForm] = useState(true);
  const [showCheckoutForm, setShowCheckoutForm] = useState(true);
  const toggleCustomerForm = () => setShowCustomerForm(!showCustomerForm);
  const toggleShippingForm = () => setShowShippingForm(!showShippingForm);
  const toggleCheckoutForm = () => setShowCheckoutForm(!showCheckoutForm);

  const [showProductList, setShowProductList] = useState(false); // Mặc định thu gọn trên mobile
  const toggleProductList = () => setShowProductList(!showProductList);

  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const handleCompleteOrder = () => setShowConfirmPopup(true);

  /** Cart info starts */
  const [items, setItems] = useState(null);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [shippingData, setShippingData] = useState(null);
  const [shippingError, setShippingError] = useState(false);
  const [shippingFee, setShippingFee] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  const [proof, setProof] = useState(null);

  const [loading, setLoading] = useState(false);
  /** Cart info end */
  const totalItemCount = items
    ? items.reduce((sum, item) => sum + item.amount, 0)
    : 0;

  useEffect(() => {
    if (items) return;
    setItems(MerchService.getAllCart());
  }, []);

  const calculateItemValue = () => {
    return items?.reduce((acc, item) => acc + item.price * item.amount, 0) ?? 0;
  };

  const calculateTotalPrice = () => {
    const itemValue = calculateItemValue();
    if (itemValue >= 500000) return itemValue;
    return itemValue + shippingFee;
  };

  useEffect(() => {
    setShippingFee(shippingData?.GIA_CUOC ?? 0);
    setShippingError(false);
    setTotalPrice(calculateTotalPrice());
  }, [shippingData, shippingFee]);

  const handleOrderSubmit = async () => {
    setLoading(true);
    const convertedProof = await imageToBase64(proof);
    MerchService.buyMerch({
      email: email,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      address: address,
      shippingFee: calculateItemValue() >= 500000 ? 0 : shippingFee,
      proof: convertedProof,
      merches: MerchService.getAllCart(),
    })
      .then((data) => {
        setLoading(false);
        setShowConfirmPopup(false); // Ẩn popup xác nhận
        setShowSuccessPopup(true); // Hiện popup thành công
        MerchService.clearCart();  // <- thêm dòng này
        setItems([]);
        window.dispatchEvent(new Event('storage'));   
      })
      .catch((error) => {
        setShowFailPopup(true);
        setLoading(false);
      });
  };

  function isValidEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  if (items == null || items.length == 0) {
    return (
      <>
        <div
          className="relative w-full min-h-screen flex flex-col items-center justify-start p-8 overflow-x-hidden overflow-y-auto"
          style={{
            backgroundImage: `url(${Merch_bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,1))",
            }}
          ></div>

          <div className="relative z-10 w-full h-full flex flex-col justify-center items-center max-w-7xl text-white mt-24">
            <img
              src={empty_img}
              className=" font-bold mt-14 w-[250px] h-[250px]"
            />
            <h1
              className="text-2xl lg:text-5xl font-imbue"
              style={{ weight: 600 }}
            >
              Giỏ hàng của bạn hiện đang trống...
            </h1>
            <p className="font-Averta-CY text-base mt-8 mb-0">
              Hãy cùng chúng mình bắt đầu chuyến phiêu lưu vào thế giới cá hồi
              hoang ngay nhé!"
            </p>
            <button
              className={`px-4 py-2 rounded-md mt-6 lg:mt-16 lg:text-xl`}
              style={{
                backgroundColor: theme.color,
              }}
              onClick={() => {
                navigate("/merch");
              }}
            >
              Đến trang mua Merch
            </button>
          </div>
        </div>
      </>
    );
  }

  var url = "https://img.vietqr.io/image/MB-0968023065-qr_only.png?";

  const content =
    lastName + " " + firstName + " " + phone + " Thanh toan Merch";
  const amount = calculateTotalPrice();

  url += "addInfo=" + content.replaceAll(" ", "%20");
  url += "&amount" + amount;

  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-start p-8 overflow-x-hidden overflow-y-auto"
      style={{
        backgroundImage: `url(${Merch_bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,1))",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl text-white mt-24 space-y-6">
        <div className="text-left">
          <h1 className="text-5xl font-imbue mb-4">Giỏ hàng</h1>
        </div>

        {/* Grid layout */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 ">
          {/* Cột phải: Danh sách sản phẩm & Tổng kết thanh toán */}
          {/* order-first trên mobile, order-last trên desktop */}
          <div className="md:col-span-1 order-first md:order-last w-full">
            {/* Chi tiết sản phẩm - Luôn là một khối có thể thu gọn/mở rộng trên mobile
                  và luôn hiển thị trên desktop */}
            <div className="bg-[#323232] text-white p-4 md:p-0 md:bg-transparent shadow-lg text-left  rounded-lg mb-4">
              <div className="flex justify-between items-center mb-4 md:mb-0">
                <h2 className="text-xl font-semibold md:hidden">
                  Chi tiết sản phẩm ({totalItemCount})
                </h2>
                {/* Nút toggle chỉ hiển thị trên mobile */}
                <button
                  onClick={toggleProductList}
                  className="md:hidden text-sm text-blue-600 hover:underline w-4 h-4"
                >
                  {showProductList ? (
                    <img src={up} alt="Thu gọn" className="w-4 h-4" />
                  ) : (
                    <img src={down} alt="Mở rộng" className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Danh sách sản phẩm - responsive display with transition */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden
                  ${
                    showProductList
                      ? "max-h-[2000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }
                  md:max-h-full md:opacity-100 md:overflow-visible`} /* Luôn hiển thị trên desktop */
              >
                <div className="space-y-4 text-sm  w-full">
                  {items.map((item, index) => (
                    <ProductItem
                      quantity={item.amount}
                      size={item.size}
                      item={item}
                      onItemUpdated={(newItem) => {
                        const newItems = [...items];
                        newItems[index] = newItem;
                        setTotalPrice(calculateTotalPrice());
                        setItems(newItems);
                      }}
                      onItemRemoved={() => {
                        const newItems = [...items];
                        newItems.splice(index, 1);
                        setTotalPrice(calculateTotalPrice());
                        setItems(newItems);
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Tổng kết thanh toán - Vẫn giữ nguyên */}
            <div className="mt-6 w-full bg-[#323232] text-sm space-y-2 p-4 text-white rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Thanh Toán</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Tổng thành phần</span>
                  <span>
                    {formatToVND(
                      items.reduce(
                        (acc, item) => acc + item.price * item.amount,
                        0
                      )
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Tiền vận chuyển</span>
                  <span>
                    {formatToVND(
                      calculateItemValue() >= 500000 ? 0 : shippingFee
                    )}
                  </span>
                </div>
                <div className="border-t border-gray-500 pt-2 flex justify-between font-semibold text-base">
                  <span>Tổng</span>
                  <span>{formatToVND(totalPrice)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cột trái: Các form - Đặt order-last mặc định, md:order-first cho màn hình lớn */}
          <div className="md:col-span-2 space-y-6 order-last md:order-first">
            {/* Thông tin khách hàng */}
            <div className="bg-[#323232] text-white p-6 shadow-lg text-left rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Chi tiết khách hàng</h2>
                <button
                  onClick={toggleCustomerForm}
                  className="text-sm text-blue-600 hover:underline w-4 h-4"
                >
                  {showCustomerForm ? (
                    <img src={up} alt="Thu gọn" />
                  ) : (
                    <img src={down} alt="Mở rộng" />
                  )}
                </button>
              </div>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showCustomerForm
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-[0px] opacity-0"
                }`}
              >
                <form className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full border p-2 rounded text-black"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium">Họ</label>
                      <input
                        type="text"
                        className="w-full border p-2 rounded text-black"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block font-medium">Tên</label>
                      <input
                        type="text"
                        className="w-full border p-2 rounded text-black"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-medium">Số điện thoại</label>
                    <input
                      type="text"
                      className="w-full border p-2 rounded text-black"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div>
                    <div>
                      <label className="block font-medium mb-1">Địa chỉ</label>
                      <textarea
                        rows={3}
                        className="w-full border p-2 rounded text-black"
                        placeholder="Nhập địa chỉ của bạn"
                        onChange={(e) => setAddress(e.target.value)}
                        onBlur={async (e) => {
                          const data =
                            await ShippingService.calculateShippingFee(
                              address,
                              items.reduce(
                                (acc, item) => acc + item.price * item.amount,
                                0
                              )
                            );
                          if (data == null) {
                            setShippingError(true);
                            return;
                          }
                          setShippingData(data);
                        }}
                      />
                      {shippingError && (
                        <p className="text-red-400 text-sm">
                          Oops, địa chỉ bạn vừa nhập không hợp lệ, vui lòng nhập
                          đúng địa chỉ nhé!
                        </p>
                      )}
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
                  {showShippingForm ? (
                    <img src={up} alt="Thu gọn" />
                  ) : (
                    <img src={down} alt="Mở rộng" />
                  )}
                </button>
              </div>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showShippingForm
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-[0px] opacity-0"
                }`}
              >
                <form className="space-y-4">
                  <div>
                    <div className="space-y-3">
                      {/* Option 3 */}<p className="font-Averta-CY mb-6">Miễn phí ship cho đơn hàng có giá trị hơn <strong>500.000 VND</strong></p>
                      <label className="flex justify-between items-center border border-white rounded-lg p-4 cursor-pointer hover:border-blue-500 transition">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="shippingMethod"
                            value="true"
                            className="accent-blue-600"
                            checked
                          />
                          <div className="ml-4 text-white">
                            <p className="font-semibold">Viettel Post</p>
                          </div>
                        </div>
                        <div className="text-sm font-semibold text-white">
                          {formatToVND(
                            calculateItemValue() >= 500000
                              ? 0
                              : shippingData?.GIA_CUOC ?? 0
                          )}
                        </div>
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
                  {showCheckoutForm ? (
                    <img src={up} alt="Thu gọn" />
                  ) : (
                    <img src={down} alt="Mở rộng" />
                  )}
                </button>
              </div>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showCheckoutForm
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-[0px] opacity-0"
                }`}
              >
                <div className="space-y-6">
                  {/* Thông tin chuyển khoản */}
                  <div>
                    <h3 className="font-semibold mb-2">
                      Thông tin chuyển khoản
                    </h3>
                    <p>Dưới đây là thông tin thanh toán dịch vụ</p>
                    <div className="flex justify-center">
                      <div className="grid grid-cols-1 md:grid-cols-1 text-center">
                        <img
                          src={url}
                          alt="QR Code"
                          className="mx-auto w-48 h-48 object-contain"
                        />
                        <p className="mt-4">
                          MB Bank: 0968023065
                          <br />
                          Tran Thi Hai Yen
                          <br />
                          Cú pháp chuyển khoản:
                          <br /> {lastName} {firstName} {phone} thanh toan merch
                        </p>
                        <p
                          download="ma_qr_chuyen_khoan.png"
                          className="inline-block mt-4 px-4 py-2 cursor-pointer text-white rounded hover:opacity-90 transition"
                          style={{ backgroundColor: theme.color }}
                          onClick={() => {
                            window.open(url, "_blank");
                          }}
                        >
                          Tải về mã QR
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Upload minh chứng */}
                  <div>
                    <h3 className="font-semibold mb-2 text-white">
                      Minh chứng chuyển khoản
                    </h3>
                    <p className="text-sm text-white italic mb-2">
                      Để tiện cho quá trình kiểm tra, vui lòng gửi ảnh chụp màn
                      hình thanh toán thành công
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4 4m0 0l4-4m-4 4V4"
                        />
                      </svg>
                      {!proof ? (
                        <>
                          <span className="font-medium">Nhấn để tải lên</span>
                          <span className="text-xs text-gray-400 mt-1">
                            Dung lượng tối đa: 2MB
                          </span>
                        </>
                      ) : (
                        <span>Đã chọn 1 tệp. Bấm để chọn lại tệp khác.</span>
                      )}
                      <input
                        id="upload-proof"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(event) => {
                          setProof(event.target.files[0]);
                        }}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          {email &&
          firstName &&
          lastName &&
          phone &&
          isValidEmail() &&
          address &&
          proof &&
          shippingData &&
          !shippingError ? (
            <button
              onClick={handleCompleteOrder}
              className="w-full text-white py-4 rounded text-lg hover:opacity-90 transition"
              style={{ backgroundColor: theme.color }}
            >
              Hoàn thành đặt hàng
            </button>
          ) : (
            <button
              className="w-full text-gray-500 py-4 rounded text-lg hover:opacity-90 transition bg-gray-300"
              disabled
            >
              Hoàn thành đặt hàng
            </button>
          )}
        </div>

        <ConfirmPopup
          isOpen={showConfirmPopup}
          onClose={() => setShowConfirmPopup(false)}
          onConfirm={handleOrderSubmit}
          loading={loading}
          message="Vui lòng kiểm tra kỹ thông tin và tải lên minh chứng chuyển khoản để đảm bảo giao dịch chính xác."
        />
        <SuccessPopup
          isOpen={showSuccessPopup}
          onClose={() => setShowSuccessPopup(false)}
          onConfirm={() => setShowSuccessPopup(false)}
        />
        <Fail_Popup
          isOpen={showFailPopup}
          onClose={() => {
            setShowFailPopup(false);
            navigate("/");
          }}
        />
      </div>
    </div>
  );
}
