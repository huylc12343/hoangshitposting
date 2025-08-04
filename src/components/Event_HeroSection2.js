import React from 'react';
import bg from '../assets/anh_sk_covershow_min.jpg';
export default function Event_HeroSection2() {
  return (
    <section className="w-full text-white">
      <img
        src={bg}
        className="w-full h-auto object-cover mb-10 shadow-lg"
      />

      <p className="text-base mb-4 text-justify ">
        Sau thành công ở Hà Nội và nhận được nhiều tình cảm từ cộng đồng fan hâm mộ, chúng mình quyết định mang không khí của "Gấp Gap - Có Cần Phải Có Lý Không?" đến với Sài Gòn – thành phố đã chứng kiến bao dấu mốc quan trọng cùng Cá Hồi Hoang lớn lên, trưởng thành.
      </p>

      <p className="text-base mb-4 text-justify ">
        Vẫn là những giai điệu từng nâng đỡ chúng ta qua những ngày chơi vơi, Cover Show Sài Gòn giữ nguyên tinh thần đầy cảm xúc, nơi người yêu Cá gặp gỡ, ôm lấy nhau và tìm thấy chính mình.
      </p>

      <p className="text-base text-justify ">
        Với sứ mệnh giữ gìn, lan toả tình yêu dành cho âm nhạc Cá Hồi Hoang, Cover Show tại Sài Gòn sẽ không chỉ là một buổi diễn, mà là nơi ký ức ùa về, cảm xúc vỡ oà và kết nối được thắp sáng để hành trình sống cùng âm nhạc Cá <strong><i>“sẽ luôn là cái gì đó mãi mãi”</i></strong>.
      </p>
    </section>
  );
}
