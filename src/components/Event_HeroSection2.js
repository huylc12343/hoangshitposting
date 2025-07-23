import React from 'react';
import event_video from '../assets/03171102.mp4';

export default function Event_HeroSection2() {
  return (
    <section className="w-full text-white">
      <video
        src={event_video}
        controls // ✅ Cho phép người dùng tương tác với thời gian
        muted
        playsInline
        className="w-full h-auto object-cover mb-10 rounded-lg shadow-lg"
      />

      <p className="text-lg mb-4">
        Cover Show “CÓ CẦN PHẢI CÓ LÝ KHÔNG” nằm trong chuỗi sự kiện Trưng bày “GẤP GAP” & Cover Show “CÓ CẦN PHẢI CÓ LÝ KHÔNG” là dịp để chúng ta nhìn lại hành trình bơi ngược dòng đầy rực rỡ của Cá Hồi Hoang. “Di sản” âm nhạc mà Band để lại không chỉ là những giai điệu độc đáo mà người nghe còn tìm thấy chính mình giữa những chênh vênh, cô đơn và cả hy vọng.
      </p>

      <p className="text-lg mb-4">
        Mang âm nhạc Cá quay lại nơi lần đầu Band diễn tại Hà Nội - Hanoi Rock City, với số lượng khán giả lên tới 300+, họ đã tới và hát thật vang những giai điệu để âm nhạc Cá Hồi Hoang luôn sống trong tim những người yêu nhạc - như một phần ký ức không thể thay thế.
      </p>

      <p className="text-lg italic">
        Sẽ không có lời tạm biệt nào cả, bởi “Cá Hồi Hoang là cái gì đó mãi mãi”.
      </p>
    </section>
  );
}
