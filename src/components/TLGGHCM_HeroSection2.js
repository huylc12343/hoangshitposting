import React from 'react';
import event_image from '../assets/tlgg_bg.png';
import tui from '../assets/tui_chh.jpg';

export default function Event_HeroSection2() {
  return (
    <section className="w-full text-white px-4 md:px-8 py-8 space-y-6">
      {/* Ảnh background sự kiện */}
      <div className="w-full overflow-hidden shadow-md">
        <img
          src={event_image}
          alt="Event Background"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Nội dung đoạn 1 */}
      <p className="text-lg mb-4 font-Averta-CY text-justify">
        Hành trình của Triển Lãm “Gấp Gap” sẽ tiếp tục được chúng mình kể tại Sài Gòn. Không gian nhỏ xinh ấm cúng sẽ trở thành mảnh ký ức đẹp và đong đầy cảm xúc đối với tất cả những ai ghé thăm, tái hiện hành trình “bơi ngược dòng” đầy rực rỡ suốt 10 năm qua của Cá Hồi Hoang.
      </p>

      {/* Ảnh túi */}
      <div className="w-full overflow-hidden shadow-md">
        <img
          src={tui}
          alt="Túi Cá Hồi Hoang"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Nội dung đoạn 2 */}
      <p className="text-lg mb-4 font-Averta-CY text-justify">
        Đồng thời đây cũng là cách chúng mình đồng hành cùng các Cá gửi đến Cá Hồi Hoang lời chào, một lời tri ân và cảm ơn thân thương. 
      </p>
    </section>
  );
}
