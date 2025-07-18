import React from 'react';
import backgroundImage from '../assets/bg-TuDo-min.png';
import g2 from '../assets/g2-min.png';
import g3 from '../assets/g3-min.png';
import g5 from '../assets/g5-min.png';
import joinus from '../assets/join_us-min.jpg'; 

export default function HeroSection3() {
  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-center p-8 overflow-hidden text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Lớp phủ tối */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      {/* Grid hình ảnh */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-5 gap-0">
        {/* Hàng 1 */}
        <div className="col-span-3">
          <img
            src={g5}
            alt="Image g5"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2">
          <img
            src={g2}
            alt="Image g2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hàng 2: g3 chiếm toàn bộ */}
        <div className="col-span-5">
          <img
            src={g3}
            alt="Image g3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Đoạn văn bản giữa */}
      <div
        className="relative z-10 max-w-4xl mt-8 text-center text-lg leading-relaxed px-4"
        style={{
          width: '880px',
          height: '95px',
          fontFamily: 'Averta CY',
          whiteSpace: 'normal', // Cho phép xuống dòng
          lineHeight: '1.5', // Điều chỉnh khoảng dòng cho phù hợp chiều cao
          marginTop: '4rem', // Khoảng cách phía trên
          marginBottom: '10rem',
          textAlign: 'center',
        }}
      >
        Chúng mình tôn trọng quyết định của các thành viên Band nhưng cũng mong rằng những giai điệu đã gắn bó suốt bao năm vẫn tiếp tục đồng hành cùng những người yêu nhạc Cá Hồi Hoang, từ fan lâu năm đến khán giả mới.
        Các hoạt động trên Fanpage, trong cộng đồng fan, các chương trình Offline Hội Hoang được tổ chức với mục tiêu kết nối những trái tim yêu nhạc Cá Hồi Hoang, cùng nhau cất lên những giai điệu đã chạm đến tâm hồn mỗi người, để “Âm nhạc Cá Hồi Hoang sẽ luôn là cái gì đó mãi mãi”.
      </div>

      {/* Head1: Chuỗi sự kiện */}
      <div className="relative z-10 w-full max-w-7xl mt-12 px-4 text-left">
        <h2 className="text-4xl md:text-8xl leading-tight tracking-wide" style={{ fontFamily: 'Imbue'}}>
          CHUỖI SỰ KIỆN<br />
          GẤP GÁP CÓ CẦN PHẢI CÓ LÝ KHÔNG?
        </h2>
      </div>

      {/* Phần mô tả và ảnh */}
      <div
        className="relative z-10 w-full max-w-7xl px-4 mx-auto mt-10"
        style={{
          fontFamily: 'Averta CY',
          textAlign: 'left',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"> {/* Changed items-center to items-start for top alignment */}
          {/* Văn bản bên trái */}
          <div className="text-base md:text-lg leading-relaxed space-y-4">
            <p>
              Chúng mình cũng mong muốn tạo một sân chơi dành cho các band cover, giúp band có cơ hội thử sức, xây dựng tệp khán giả và mang đến những sân khấu đáng nhớ.
            </p>
            <p>
              Cover Show “Có cần phải có lý không?” và triển lãm “Gấp Gáp” – dự kiến tổ chức vào tháng 5 tới tại HRC – là một trong những dự án lớn mà team Offline Hội Hoang đã ấp ủ suốt một năm qua.
              Chương trình này không chỉ là cơ hội để nhìn lại hành trình của Cá Hồi Hoang mà còn là lời khẳng định rằng âm nhạc của band vẫn tiếp tục vang lên,
              chữa lành những tổn thương, kết nối những trái tim yêu âm nhạc, những tâm hồn đồng điệu,...
            </p>
            <p>
              Và trên hành trình đó, chúng mình hy vọng có sự đồng hành của bạn!
            </p>
                      <button
            className="px-6 py-3 rounded-md text-white font-semibold shadow-md transition duration-300 hover:opacity-90"
            style={{
              backgroundColor: '#1A56DB',
              fontFamily: 'Averta CY',
            }}
          >
            Đồng hành cùng chúng mình
          </button>
          </div>

          {/* Hình ảnh bên phải */}
          <div className="w-full">
            <img
              src={joinus}
              alt="Triển lãm Gấp Gáp"
              className="w-full h-auto shadow-lg object-cover"
            />
          </div>
        </div>


      </div>
    </div>
  );
}