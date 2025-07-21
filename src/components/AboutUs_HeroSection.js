import React from "react";
import AboutUsImg from "../assets/PWM01219-min.jpg";
import Cas from "../assets/Cas.svg";
import { useTheme } from "../contexts/Theme";

const AboutUs_HeroSection = () => {
  const { theme } = useTheme();

  return (
    <div
      className="w-full py-32 px-8 shadow-md transition-all duration-500"
      style={{ 
        backgroundImage: theme.background,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}

    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Bên trái: Tiêu đề và nội dung */}
        <div className="flex justify-end">
          <div className="max-w-lg text-left">
            <h2 className="text-5xl font-bold mb-8 text-[#BC4535] flex items-center gap-3">
              VỀ CHÚNG TÔI
              <img src={Cas} alt="Cas Icon" className="h-[1.2em] w-auto" />
            </h2>
            <p className="text-white text-base leading-relaxed mb-6">
              Chương trình Offline Hội Hoang được thực hiện bởi những fan 
              đã gắn bó với Cá Hồi Hoang, những người đã trưởng thành cùng âm nhạc của band.
            </p>
            <p className="text-white text-base leading-relaxed">
              Dù Cá Hồi Hoang đã thông báo dừng hoạt động vào năm 2023, 
              nhưng với chúng mình, âm nhạc ấy vẫn luôn tồn tại – là ký ức, 
              là nguồn cảm hứng, là nơi chữa lành, và sẽ luôn là một điều gì đó mãi mãi.
            </p>
          </div>
        </div>

        {/* Bên phải: Hình ảnh */}
        <div className="flex justify-start">
          <img
            src={AboutUsImg}
            alt="Hình minh họa"
            width={600}
            height={400}
            className="object-cover rounded-none"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs_HeroSection;
