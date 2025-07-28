import React from 'react';
import event_image from '../assets/covershow_img_min.jpg'; // 👈 Bạn có thể dùng ảnh này nếu muốn
import banner from '../assets/ccpclk_hn_banner_min.jpg';
export default function Event_HeroSection2() {
  return (
    <section className="w-full text-white py-4">
    <div className="w-full aspect-video mb-10 shadow-lg overflow-hidden">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/t_XZ6ee_abY?autoplay=1&mute=1"
        title="Sự kiện Cá Hồi Hoang"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>


      <p className="text-lg mb-4 text-justify">
        Cover Show “CÓ CẦN PHẢI CÓ LÝ KHÔNG?” nằm trong chuỗi sự kiện Trưng bày “GẤP GAP” & Cover Show “CÓ CẦN PHẢI CÓ LÝ KHÔNG?” là dịp để chúng ta nhìn lại hành trình bơi ngược dòng đầy rực rỡ của Cá Hồi Hoang. “Di sản” âm nhạc mà Band để lại không chỉ là những giai điệu độc đáo mà người nghe còn tìm thấy chính mình giữa những chênh vênh, cô đơn và cả hy vọng.
      </p>

      <p className="text-lg mb-4 text-justify">
        Mang âm nhạc Cá quay lại nơi lần đầu Band diễn tại Hà Nội - Hanoi Rock City, với số lượng khán giả lên tới 300+, họ đã tới và hát thật vang những giai điệu để âm nhạc Cá Hồi Hoang luôn sống trong tim những người yêu nhạc - như một phần ký ức không thể thay thế.
      </p>
      <img src={banner} className='mt-12 w-full h-full'/>
      <p className="text-lg font-Averta-CY mt-10 text-justify italic">
        Sẽ không có lời tạm biệt nào cả, bởi “Cá Hồi Hoang là cái gì đó mãi mãi”.
      </p>
    </section>
  );
}
