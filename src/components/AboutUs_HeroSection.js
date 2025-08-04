import React from "react";
import AboutUsImg from "../assets/PWM01219-min.jpg";
import Cas from "../assets/Cas.svg";
import { useTheme } from "../contexts/Theme";

const AboutUs_HeroSection = () => {
  const { theme } = useTheme();

  return (
<div className="relative w-full py-20 px-6 md:py-32 md:px-4 shadow-md transition-all duration-500 overflow-hidden">
  {/* Layer nền blur + ảnh nền */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `url(${AboutUsImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "blur(8px)",
      transform: "scale(1.05)", // phóng to nhẹ để che viền do blur
    }}
  ></div>

  {/* Lớp phủ đen thêm chiều sâu */}
  <div className="absolute inset-0 bg-black opacity-70 z-0"></div>


      {/* Nội dung desktop */}
      <div className="relative text-[#EEE1D8] z-10 hidden md:grid grid-cols-2 gap-16 mt-4 items-center">
        {/* Trái: Nội dung */}
        <div className="flex justify-start ml-28">
          <div className=" text-left max-w-lg">
            <h2
              className="text-3xl sm:text-[80px] font-imbue mb-6 flex items-center gap-2 whitespace-nowrap"
            >
              VỀ CHÚNG MÌNH
              <img src={Cas} alt="Cas Icon" className="h-[1.2em] sm:h-[60px] w-auto inline-block" />
            </h2>

            <p className="text-base leading-relaxed mb-4 text-justify ">
              Chương trình Offline Hội Hoang được thực hiện bởi những fan yêu thích âm nhạc Cá Hồi Hoang, những người đã đồng hành, trưởng thành cùng âm nhạc của Band, và cùng nhau viết tiếp câu chuyện "Cá Hồi Hoang là cái gì đó mãi mãi".
            </p>
            {/* <p className="text-base leading-relaxed text-justify">
              Dù Cá Hồi Hoang đã thông báo dừng hoạt động vào năm 2023,
              nhưng với chúng mình, âm nhạc ấy vẫn luôn tồn tại – là ký ức, là nguồn cảm hứng,
              là nơi chữa lành, và sẽ luôn là một điều gì đó mãi mãi.
            </p> */}
          </div>
        </div>

        {/* Phải: Hình ảnh */}
        <div className="flex justify-start">
          <img
            src={AboutUsImg}
            alt="Hình minh họa"
            className="object-cover rounded-none h-[360px] w-[550px]"
          />
        </div>
      </div>

      {/* Nội dung mobile */}
      <div className="relative z-10 md:hidden flex flex-col items-center text-[#EEE1D8] text-center space-y-6 mt-8">

        {/* Logo + Tiêu đề */}
        <div className="flex flex-col items-center space-y-2">
          <img src={Cas} alt="Cas Icon" className="h-10 w-auto" />
          <h2
            className="text-5xl font-bold font-imbue text-center mb-6 text-[#EEE1D8]"
          >
            VỀ CHÚNG MÌNH
          </h2>

        </div>

        {/* Hình ảnh */}
        <div className="w-full flex justify-center">
          <img
            src={AboutUsImg}
            alt="Hình minh họa"
            className="w-full max-w-md object-cover rounded-none"
          />
        </div>

        {/* Nội dung */}
        <div className="text-base text-[#EEE1D8] leading-relaxed text-justify max-w-md">
          <p className="mb-3">
            Chương trình Offline Hội Hoang được thực hiện bởi những fan đã gắn bó với Cá Hồi Hoang, những người đã trưởng thành cùng âm nhạc của band.
          </p>
          <p>
            Dù Cá Hồi Hoang đã thông báo dừng hoạt động vào năm 2023, nhưng với chúng mình, âm nhạc ấy vẫn luôn tồn tại – là ký ức, là nguồn cảm hứng, là nơi chữa lành, và sẽ luôn là một điều gì đó mãi mãi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs_HeroSection;
