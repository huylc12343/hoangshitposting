import React from 'react';
import g2 from '../assets/g2-min.png';
import g3 from '../assets/g3-min.png';
import g5 from '../assets/g5-min.png';
import joinus from '../assets/join_us-min.jpg';
import { useTheme } from '../contexts/Theme';
import { Link } from 'react-router-dom';
export default function HeroSection3() {
  const { theme } = useTheme();

  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden text-[#EEE1D8]"
      // style={{
      //   backgroundImage: theme.background,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      // }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      {/* Image Grid (giữ nguyên trên mobile) */}
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-5 gap-0">
        <div className="col-span-3">
          <img
            src={g5}
            alt="Image g5"
            className="w-full h-[200px] sm:h-[250px] md:h-full object-cover"
          />
        </div>
        <div className="col-span-2">
          <img
            src={g2}
            alt="Image g2"
            className="w-full h-[200px] sm:h-[250px] md:h-full object-cover"
          />
        </div>
        <div className="col-span-5">
          <img
            src={g3}
            alt="Image g3"
            className="w-full h-[200px] sm:h-[250px] md:h-[400px] object-cover"
          />
        </div>
      </div>

      {/* Text Block */}
      {/* <div
        className="relative z-10 mt-8 text-center text-sm sm:text-base md:text-lg leading-relaxed px-4 sm:px-6 md:px-0 max-w-3xl"
        style={{
          fontFamily: 'Averta CY',
          lineHeight: '1.6',
        }}
      >
        Chúng mình tôn trọng quyết định của các thành viên Band nhưng cũng mong rằng những giai điệu đã gắn bó suốt bao năm vẫn tiếp tục đồng hành cùng những người yêu nhạc Cá Hồi Hoang, từ fan lâu năm đến khán giả mới.
        Các hoạt động trên Fanpage, trong cộng đồng fan, các chương trình Offline Hội Hoang được tổ chức với mục tiêu kết nối những trái tim yêu nhạc Cá Hồi Hoang, cùng nhau cất lên những giai điệu đã chạm đến tâm hồn mỗi người, để “Âm nhạc Cá Hồi Hoang sẽ luôn là cái gì đó mãi mãi”.
      </div> */}

      {/* Heading */}
      <div className="relative z-10 w-full max-w-7xl mt-12 px-4 text-center md:text-left">
        <h2
          className="text-3xl sm:text-[80px] leading-tight font-imbue"
        >
          CHUỖI SỰ KIỆN<br />
          GẤP GAP CÓ CẦN PHẢI CÓ LÝ KHÔNG?
        </h2>
      </div>

      {/* Description + Image */}
      <div
        className="relative z-10 w-full max-w-7xl px-4 mx-auto mt-10"
        style={{
          fontFamily: 'Averta CY',
        }}
      >
        {/* Stack content on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Text + Button */}
          <div className="flex flex-col justify-between sm:pr-10 text-lg sm:text-base text-[#EEE1D8] leading-relaxed text-left h-full">
            {/* <p>
              Chúng mình cũng mong muốn tạo một sân chơi dành cho các band cover, giúp band có cơ hội thử sức, xây dựng tệp khán giả và mang đến những sân khấu đáng nhớ.
            </p> */}
            <p className='text-justify'>
              Cover Show “Có Cần Phải Có Lý Không?” và 
              Triển Lãm “Gấp Gap” là dự án lớn mà Team Offline Hội Hoang 
              đã ấp ủ suốt một năm qua. Chương trình này không chỉ là cơ hội 
              để nhìn lại hành trình của Cá Hồi Hoang mà còn là lời khẳng định 
              rằng âm nhạc của Band vẫn tiếp tục vang lên, chữa lành những tổn thương,
               gắn kết những tâm hồn đồng điệu,... 
               <br/>
               <br/>
               Và trên hành trình đó, chúng mình hy vọng có sự đồng hành của bạn!
            </p>

            <div className="w-full flex justify-center md:justify-start">
              <Link to="/event"><button
                className="mt-4 px-6 py-3 rounded-md text-[#EEE1D8] font-Averta-CY shadow-md transition duration-300 hover:opacity-90"
                style={{
                  backgroundColor: theme.color,
                }}
              >
                Đồng hành cùng chúng mình
              </button></Link>
            </div>
          </div>

          {/* Image moved below on mobile */}
          <div className="w-full sm:pl-10 order-first md:order-none">
            <img
              src={joinus}
              alt="Triển lãm Gấp Gáp"
              className="w-full h-auto shadow-lg object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
