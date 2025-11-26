import React from 'react';
import bg from '../assets/anh_sk_covershow_min.jpg';
import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.jpg';
import event3 from '../assets/event3.jpg';
export default function Event_HeroSection2() {
  return (
    <section className="w-full text-white">
      <img
        src={bg}
        className="w-full h-auto object-cover mb-10 shadow-lg"
      />

      <p className="mt-12 text-base  text-justify ">
        Sau thành công ở Hà Nội và nhận được nhiều tình cảm từ cộng đồng fan hâm mộ, chúng mình quyết định mang không khí của "Gấp Gap - Có Cần Phải Có Lý Không?" đến với Sài Gòn – thành phố đã chứng kiến bao dấu mốc quan trọng cùng Cá Hồi Hoang lớn lên, trưởng thành.
      </p>
      <img src={event1} className='mt-12 w-full h-full'/>

      <p className="text-base mt-12 text-justify ">
        Vẫn là những giai điệu từng nâng đỡ chúng ta qua những ngày chơi vơi, Cover Show Sài Gòn giữ nguyên tinh thần đầy cảm xúc, nơi người yêu Cá gặp gỡ, ôm lấy nhau và tìm thấy chính mình.
      </p>
      <img src={event2} className='mt-12 w-full h-full'/>

      <p className="mt-12 text-base text-justify ">
        Với sứ mệnh giữ gìn, lan toả tình yêu dành cho âm nhạc Cá Hồi Hoang, Cover Show tại Sài Gòn là nơi ký ức ùa về, cảm xúc vỡ oà và sự kết nối giữa những người hâm mộ Cá được thể hiện mãnh liệt bùng nổ hơn bao giờ hết.
        {/* Với sứ mệnh giữ gìn, lan toả tình yêu dành cho âm nhạc Cá Hồi Hoang, Cover Show tại Sài Gòn sẽ không chỉ là một buổi diễn, mà là nơi ký ức ùa về, cảm xúc vỡ oà và kết nối được thắp sáng để hành trình sống cùng âm nhạc Cá <strong><i>“sẽ luôn là cái gì đó mãi mãi”</i></strong>. */}
      </p>
      <img src={event3} className='mt-12 w-full h-full'/>

    </section>
  );
}
