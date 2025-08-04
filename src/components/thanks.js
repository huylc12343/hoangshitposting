import React from 'react';
import { useTheme } from '../contexts/Theme';
export default function Thanks() {
  const { theme } = useTheme();
  return (
    <div className="relative w-full min-h-[600px] px-12 py-20 bg-[#0F0F0F]">
      {/* Tiêu đề */}
      <div className="flex justify-center mb-4">
        <h1 className="text-5xl sm:text-[80px] font-imbue text-[#EEE1D8] whitespace-nowrap">
          LỜI CẢM ƠN
        </h1>
      </div>


      {/* Nội dung căn giữa */}
      <div className="space-y-6 text-justify  text-[#EEE1D8] font-Averta-CY max-w-3xl mx-auto">
        <p className="text-base pt-10">
          BTC Offline Hội Hoang xin gửi lời cảm ơn chân thành đến các ban nhạc,
          các cá nhân và tổ chức đã dành thời gian quan tâm đến hồ sơ chương trình.
          Mặc dù Cá Hồi Hoang đã dừng hoạt động, nhưng hành trình của âm nhạc của Cá Hồi Hoang
          sẽ luôn được viết tiếp bởi những người yêu nhạc Cá, và chính sự đồng hành của mọi người
          là điều khiến hoạt động lần này trở nên đặc biệt hơn bao giờ hết.
        </p>
        <p className="text-base">
          Chúng mình tin rằng sự kiện sắp tới không chỉ là một buổi gặp gỡ,
          mà còn là nơi cảm xúc hòa cùng giai điệu, nơi những câu chuyện về
          Cá Hồi Hoang tiếp tục được kể theo cách riêng của mỗi người. 
        </p>
        <p className="text-base">Hãy đồng hành cùng chúng mình nhé &lt;3</p>
      </div>
    </div>
  );
}
