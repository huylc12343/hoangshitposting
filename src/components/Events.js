import React from 'react';
import g1 from '../assets/g1.png'; // Đảm bảo bạn có các ảnh này
import g2 from '../assets/g2.png';
import g3 from '../assets/g3.png';
import g4 from '../assets/g4.png';

// Dữ liệu mẫu cho các sự kiện
const eventsData = [
  {
    id: 1,
    title: 'Triển lãm',
    location: 'Hà Nội',
    date: '11/11/2024',
    image: g1,
  },
  {
    id: 2,
    title: 'Triển lãm',
    location: 'Hà Nội',
    date: '11/11/2024',
    image: g2,
  },
  {
    id: 3,
    title: 'Triển lãm',
    location: 'Hà Nội',
    date: '11/11/2024',
    image: g3,
  },
  {
    id: 4,
    title: 'Triển lãm',
    location: 'Hà Nội',
    date: '11/11/2024',
    image: g4,
  },
];

// Component EventCard riêng lẻ để dễ tái sử dụng
const EventCard = ({ title, location, image, date }) => {
  return (
    <div className="relative w-full rounded-xl p-4 md:p-6 shadow-lg transform transition duration-300 hover:scale-[1.01]
                    bg-white/10 backdrop-blur-md border-2 border-blue-500 text-white
                    flex flex-col items-center justify-center text-center">
      {/* Để tạo hiệu ứng bo xung quanh ảnh như vé, bạn có thể dùng pseudo-elements
          hoặc một div overlay với background-image lặp lại.
          Tạm thời tôi sẽ bỏ qua để giữ mã nguồn đơn giản.
          Nếu muốn, bạn có thể thêm một div absolute với background pattern. */}

      <h3 className="text-2xl md:text-3xl font-extrabold text-blue-300 mb-2 font-AvertaCY">
        {title}
      </h3>
      <p className="text-base md:text-lg opacity-80 mb-4 font-AvertaCY">({location})</p>
      
      <div className="w-full h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden mb-6 border border-gray-600">
        <img src={image} alt={title} className="w-full h-full object-cover transition duration-300 transform hover:scale-105" />
      </div>
      
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg
                         transition-all duration-300 ease-in-out text-lg tracking-wide font-AvertaCY">
        Nhìn lại
      </button>
    </div>
  );
};

export default function Events() {
  return (
    <section className="relative w-full py-20 bg-black text-white overflow-hidden">
      {/* Tiêu đề chính */}
      <h2 className="text-5xl md:text-7xl font-extrabold text-center mb-20 font-AvertaCY">
        TIMELINE SỰ KIỆN
      </h2>

      {/* Container của Timeline */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Đường kẻ dọc */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-700 h-full"></div>

        {/* Các sự kiện */}
        <div className="space-y-20"> {/* Khoảng cách giữa các mục timeline */}
          {eventsData.map((event, index) => (
            <div
              key={event.id}
              className={`flex items-center w-full ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Event Card (Ẩn trên mobile để hiển thị kiểu stack, hoặc điều chỉnh) */}
              <div
                className={`w-full md:w-[calc(50%-40px)] ${
                  index % 2 === 0 ? 'pr-4 md:pr-0' : 'pl-4 md:pl-0'
                }`}
              >
                {index % 2 === 0 ? (
                  <EventCard {...event} />
                ) : (
                  <div className="hidden md:block"> {/* Placeholder cho bên trái */}</div>
                )}
              </div>

              {/* Node và Ngày tháng (Trung tâm) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center px-4">
                <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white shadow-md"></div>
                <span className="mt-4 text-xl md:text-2xl font-bold text-blue-300 whitespace-nowrap font-AvertaCY">
                  {event.date}
                </span>
              </div>

              {/* Event Card (Ẩn trên mobile để hiển thị kiểu stack, hoặc điều chỉnh) */}
              <div
                className={`w-full md:w-[calc(50%-40px)] ${
                  index % 2 === 0 ? 'pl-4 md:pl-0' : 'pr-4 md:pr-0'
                }`}
              >
                {index % 2 !== 0 ? (
                  <EventCard {...event} />
                ) : (
                  <div className="hidden md:block"> {/* Placeholder cho bên phải */}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>



    </section>
  );
}