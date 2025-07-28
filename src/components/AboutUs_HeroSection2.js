import React from "react";
import { useTheme } from "../contexts/Theme";

const AboutUs_HeroSection2 = () => {
  const { theme } = useTheme();

  return (
    <div
      className="w-full py-32 px-8 shadow-md flex flex-col items-center"
      style={{
        backgroundColor: "#0F0F0F",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Tiêu đề giữa */}
      <h2 className="text-5xl font-bold font-imbue text-center mb-20 text-[#FFFFFF]">
        OFFLINE HỘI HOANG
      </h2>



      {/* TẦM NHÌN */}
      <div className="w-full max-w-6xl mb-12">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-4 items-center">
          {/* Cột trái */}
          {/* Thêm md:pr-8 để tạo khoảng đệm bên phải, giúp chữ lệch trái một chút trên màn hình lớn */}
          <div className="md:col-span-2 text-[#FFFFFF] text-5xl font-imbue font-extrabold flex justify-start md:items-center text-center md:text-left md:pr-8">
            TẦM NHÌN
          </div>

          {/* Cột phải */}
          <div className="md:col-span-8 font-Averta-CY text-white text-base text-justify leading-relaxed">
            <p>
              Chúng mình tôn trọng quyết định của các thành viên Band nhưng cũng mong rằng những giai điệu đã gắn bó suốt bao năm vẫn tiếp tục đồng hành cùng những người yêu nhạc Cá Hồi Hoang, từ fan lâu năm đến khán giả mới. Các hoạt động trên Fanpage, trong cộng đồng fan, các chương trình Offline Hội Hoang được tổ chức với mục tiêu kết nối những trái tim yêu nhạc Cá Hồi Hoang, cùng nhau cất lên những giai điệu đã chạm đến tâm hồn mỗi người, để “Âm nhạc Cá Hồi Hoang sẽ luôn là cái gì đó mãi mãi”.
            </p>
          </div>
        </div>
      </div>

      {/* SỨ MỆNH */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-1 items-center">
          {/* Cột trái */}
          {/* Thêm md:pr-8 để tạo khoảng đệm bên phải, giúp chữ lệch trái một chút trên màn hình lớn */}
          <div className="md:col-span-2 text-[#FFFFFF] text-5xl font-imbue font-extrabold flex justify-start md:items-center text-center md:text-left md:pr-8" 
          >
            SỨ MỆNH
          </div>

          {/* Cột phải */}
          <div className="md:col-span-8 font-Averta-CY text-white text-base text-justify leading-relaxed">
            <p>
              Âm nhạc là liều thuốc chữa lành, và âm nhạc của Cá Hồi Hoang đã đồng hành, an ủi nhiều tâm hồn suốt những năm qua. Offline Hội Hoang không chỉ là nơi kết nối những người yêu nhạc CHH, mà còn là không gian để giai điệu ấy tiếp tục vang lên, trở thành một phần ký ức không phai.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs_HeroSection2;