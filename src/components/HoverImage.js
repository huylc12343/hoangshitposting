import React from "react";
import { useTheme } from "../contexts/Theme";
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
      <div className="absolute bottom-0 left-0 w-full z-20 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
        <div className="w-full flex justify-center py-10">
          <a
            href="https://www.facebook.com/hoangshitposting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#EEE1D8]  gap-3 mt-4 px-6 py-3 rounded-md  font-Averta-CY shadow-md transition duration-300 hover:opacity-90"
            style={{
              
              fontFamily: "Averta CY",
            }}
          >
            {/* SVG icon Facebook */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              style={{color:theme.color}}
            >
              <path d="M22 12.07C22 6.52 17.52 2 12 2S2 6.52 2 12.07c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.89h-2.3v6.99C18.34 21.2 22 17.07 22 12.07z" />
            </svg>

            Khám phá Fanpage của chúng tôi
          </a>
        </div>
      </div>
    </div>
  );
};

export default HoverImageWithButton;
