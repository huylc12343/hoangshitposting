import React from "react";
import { useTheme } from "../contexts/Theme";
import Timeline_Components from "./Timeline_Components";
import imgf from "../assets/join_us-min.jpg";

const HoverImageWithButton = () => {
  const { theme } = useTheme();

  return (
    <div className="relative group w-full h-screen overflow-hidden">
      {/* Hình ảnh nền toàn màn hình */}
      <img
        src={imgf}
        alt="Fanpage"
        className="absolute inset-0 w-full h-full object-cover transition duration-500"
      />

      {/* Overlay fade từ dưới lên */}
      <div
        className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
        style={{
          backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))',
        }}
      />

      {/* Nút hiển thị khi hover */}
      <div
        className="absolute bottom-0 left-0 w-full z-20 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
      >
        <div className="w-full flex justify-center py-10">
          <button
            className="mt-4 px-6 py-3 rounded-md text-white font-semibold shadow-md transition duration-300 hover:opacity-90"
            style={{
              backgroundColor: theme.color,
              fontFamily: "Averta CY",
            }}
          >
            khám phá thêm trên Fanpage của chúng tôi
          </button>
        </div>
      </div>
    </div>
  );
};

export default HoverImageWithButton;
