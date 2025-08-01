import React from "react";
import warningIcon from "../assets/Success_Popup_img.png"; // thay bằng ảnh phù hợp
import { useTheme } from "../contexts/Theme";
import { useNavigate } from "react-router-dom";

export default function Success_Popup({
  isOpen,
  onClose,
  onConfirm,
  message = "Bạn có chắc chắn muốn tiếp tục?",
}) {
  const { theme } = useTheme();
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#323232] text-black  rounded-xl shadow-2xl p-6 w-[90%] max-w-md space-y-4 relative">
        {/* Icon cảnh báo ở trên */}
        <div className="w-full flex justify-center">
          <img src={warningIcon} alt="Warning" className="w-[60%] h-[60%]" />
        </div>

        {/* Tiêu đề */}
        <h2
          className="text-3xl text-white font-bold text-center"
          style={{
            fontFamily: "Imbue, serif",
          }}
        >
          ĐẶT HÀNG THÀNH CÔNG
        </h2>

        {/* Nội dung */}
        <p className="text-center text-gray-400">
          Cảm ơn bạn đã đồng hành cùng chúng mình. Email xác nhận sẽ được gửi
          đến bạn trong vòng 48h kể từ khi hoàn thành đơn hàng ạ.{" "}
        </p>
        <p className="text-center text-gray-400">
          Liên hệ fanpage: Hoangshitposting nếu có cần được hỗ trợ nha.{" "}
        </p>

        {/* 2 nút xếp thành 1 cột */}
        <div className="flex flex-col gap-4 pt-4">
          <button
            style={{
              backgroundColor: theme.color,
            }}
            onClick={() => {
              onConfirm();
              onClose();

              navigate("/");
            }}
            className=" hover:opacity-80 w-full py-4 rounded text-white text-sm font-semibold"
          >
            ĐỢI CHÚNG MÌNH NHÉ
          </button>
        </div>
      </div>
    </div>
  );
}
