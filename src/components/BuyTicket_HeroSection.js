import React, { useEffect, useState } from "react";
import { useTheme } from "../contexts/Theme";
import Merch_bg from "../assets/merch_bg_min.jpg";
import up from "../assets/arrow-up-svgrepo-com.svg";
import down from "../assets/arrow-down-angle-svgrepo-com.svg";
import ConfirmPopup from "../components/Confirm_Popup"; // đường dẫn tùy theo vị trí file
import SuccessPopup from "../components/Success_Popup";
import { formatToVND } from "../utils/NumberFormat";
import TicketService from "../services/TicketService";
import { imageToBase64 } from "../utils/ImageConverter";
import { useNavigate } from "react-router-dom";

export default function Cart_HeroSection({ ticket }) {
  const navigate = useNavigate();

  const { theme } = useTheme();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const [showCustomerForm, setShowCustomerForm] = useState(true);
  const [showTicketForm, setShowTicketForm] = useState(true);
  const [showCheckoutForm, setShowCheckoutForm] = useState(true);
  const toggleCustomerForm = () => setShowCustomerForm(!showCustomerForm);
  const toggleTicketForm = () => setShowTicketForm(!showTicketForm);
  const toggleCheckoutForm = () => setShowCheckoutForm(!showCheckoutForm);

  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const handleCompleteOrder = () => setShowConfirmPopup(true);

  const [quantity, setQuantity] = useState(1);
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerLastName, setCustomerLastName] = useState("");
  const [customerFirstName, setCustomerFirstName] = useState("");
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");

  const [selectedProof, setSelectedProof] = useState(null);

  const [loading, setLoading] = useState(false);

  // Countdown state: 10 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes * 60 seconds

  useEffect(() => {
    // Exit if countdown is finished
    if (timeLeft <= 0) {
      alert("Đã hết thời gian giữ vé. Bạn sẽ được chuyển về trang chủ.");
      navigate("/");
      return;
    }

    // Set up the timer
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Clean up the timer when the component unmounts or timeLeft changes
    return () => clearInterval(timer);
  }, [timeLeft, navigate]); // Add navigate to dependency array

  // Format time for display
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleOrderSubmit = async () => {
    const holdId = localStorage.getItem("holdId");

    if (holdId) {
      setLoading(true);
      const convertedProof = await imageToBase64(selectedProof);
      console.log(convertedProof);
      TicketService.makePayment(
        holdId,
        customerLastName + " " + customerFirstName,
        customerEmail,
        customerPhoneNumber,
        convertedProof
      )
        .then((data) => {
          setLoading(false);
          setShowConfirmPopup(false); // Ẩn popup xác nhận
          setShowSuccessPopup(true); // Hiện popup thành công
        })
        .catch((error) => {
          alert("Có lỗi xảy ra trong quá trình đặt vé. Vui lòng thử lại sau.");
          setLoading(false);
          navigate("/");
        });
    } else {
      alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
    }
  };

  function updateHoldInfo(newAmount) {
    TicketService.updateHoldInfo(localStorage.getItem("holdId"), newAmount)
      .then((data) => {
        setQuantity(newAmount);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  function isValidEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(customerEmail);
  }

  var url = "https://img.vietqr.io/image/MB-93685111-qr_only.png?";

  const content =
    customerFirstName +
    " " +
    customerLastName +
    " " +
    "Thanh toan " +
    quantity +
    " ve " +
    ticket.name;
  const amount = quantity * ticket.price;

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

      {/* Main Content - Adjusted for centering and moderate width */}
      <div className="relative z-10 w-full max-w-screen-lg mx-auto text-white mt-24 space-y-6">
        {" "}
        {/* Changed max-w-7xl to max-w-screen-lg and added mx-auto */}
        <div
          className="text-left flex justify-between"
          style={{
            fontFamily: "Imbue, serif",
          }}
        >
          <h1 className="text-5xl font-bold py-0 m-0">Mua vé</h1>
          {/* Countdown display */}
          <span
            className="text-5xl bg-[#EEE1D8] px-2 py-0 m-0"
            style={{
              color: theme.color,
            }}
          >
            {formatTime(timeLeft)}
          </span>
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
                  {showTicketForm ? (
                    <img src={up} alt="Thu gọn" />
                  ) : (
                    <img src={down} alt="Mở rộng" />
                  )}
                </button>
              </div>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showTicketForm
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-[0px] opacity-0"
                }`}
              >
                <form className="space-y-4">
                  <div>
                    <label className="block font-medium mb-2 text-white">
                      Mỗi lần đặt vé, bạn có thể chọn tối đa{" "}
                      {ticket.maxTicketHold} vé
                    </label>
                    <div className="space-y-3">
                      <div className="border-white border rounded-lg p-4 shadow-md">
                        {/* Dòng trên cùng: Tên sự kiện và các nút */}
                        <div className="flex items-center justify-between">
                          <div className="text-left">
                            <p className="font-semibold text-white">
                              CÓ CẦN PHẢI CÓ LÝ KHÔNG? 2025
                            </p>
                            <p className="text-sm text-white">
                              Vé {ticket.name}
                            </p>
                          </div>

                          <div className="flex items-center space-x-2">
                            <div
                              className="px-2 py-1 cursor-pointer hover:bg-gray-100 hover:text-black rounded-full"
                              onClick={() => {
                                updateHoldInfo(Math.max(1, quantity - 1));
                              }}
                            >
                              -
                            </div>
                            <span className="px-2">{quantity}</span>
                            <div
                              className="px-2 py-1 cursor-pointer rounded-full hover:bg-gray-100 hover:text-black"
                              onClick={() => {
                                updateHoldInfo(
                                  Math.min(quantity + 1, ticket.maxTicketHold)
                                );
                              }}
                            >
                              +
                            </div>
                          </div>
                        </div>

                        {/* Dòng giá bên dưới */}
                        <div className="mt-2 text-right text-sm text-white">
                          {formatToVND(ticket.price)}
                        </div>
                      </div>
                      <div className="mt-2 flex justify-between text-lg text-white">
                        <span className="font-semibold">TỔNG</span>
                        <span>{formatToVND(quantity * ticket.price)}</span>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium">Họ</label>
                      <input
                        type="text"
                        className="w-full border p-2 rounded text-black"
                        onChange={(event) => {
                          setCustomerLastName(event.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <label className="block font-medium">Tên</label>
                      <input
                        type="text"
                        className="w-full border p-2 rounded text-black"
                        onChange={(event) => {
                          setCustomerFirstName(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full border p-2 rounded text-black"
                      onChange={(event) => {
                        setCustomerEmail(event.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label className="block font-medium">
                      Số điện thoại liên lạc
                    </label>
                    <input
                      type="tel"
                      className="w-full border p-2 rounded text-black"
                      onChange={(event) => {
                        setCustomerPhoneNumber(event.target.value);
                      }}
                    />
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
                    <p>
                      Vui lòng quét mã QR dưới đây để thanh toán. Lưu ý, không
                      chỉnh sửa nội dung chuyển khoản.
                    </p>
                    <div className="flex justify-center mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-1 text-center">
                        <img
                          src={url}
                          alt="QR Code"
                          className="mx-auto w-48 h-48 object-contain"
                        />
                        <p className="mt-4">
                          MB Bank: 93685111
                          <br />
                          Tran Thi Hai Yen
                          <br />
                          Cú pháp chuyển khoản:
                          <br /> [Họ tên] thanh toan [Số lượng vé] ve [Loại vé]
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
                      {!selectedProof ? (
                        <>
                          <span className="font-medium">
                            Nhấn để tải lên hoặc kéo thả tệp vào đây
                          </span>
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
                          setSelectedProof(event.target.files[0]);
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
          {quantity &&
          customerFirstName &&
          customerLastName &&
          customerEmail &&
          isValidEmail() &&
          customerPhoneNumber &&
          selectedProof ? (
            <button
              onClick={handleCompleteOrder}
              className="w-full text-white py-4 rounded text-lg hover:opacity-90 transition"
              style={{ backgroundColor: theme.color }}
            >
              Hoàn thành đặt vé
            </button>
          ) : (
            <button
              className="w-full text-gray-500 py-4 rounded text-lg hover:opacity-90 transition bg-gray-300"
              disabled
            >
              Hoàn thành đặt vé
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
      </div>
    </div>
  );
}
