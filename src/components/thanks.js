import React from 'react';

export default function Thanks() {
  return (
    <div className="relative w-full min-h-[600px] px-12 py-20 bg-black bg-opacity-80">
      {/* Tiêu đề */}
      <div className="flex justify-center mb-10">
        <h1 className="text-6xl font-extrabold text-orange-500">Lời cảm ơn</h1>
      </div>

      {/* Nội dung căn giữa */}
      <div className="space-y-6 text-center text-white max-w-3xl mx-auto">
        <p className="text-lg ">
          BTC Offline Hội Hoang xin gửi lời cảm ơn chân thành đến các ban nhạc,
          các cá nhân và tổ chức đã dành thời gian quan tâm đến hồ sơ chương trình.
          Mặc dù Cá Hồi Hoang đã dừng hoạt động, nhưng hành trình của âm nhạc của Cá Hồi Hoang
          sẽ luôn được viết tiếp bởi những người yêu nhạc Cá, và chính sự đồng hành của mọi người
          là điều khiến hoạt động lần này trở nên đặc biệt hơn bao giờ hết.
        </p>
        <p className="text-lg">
          Chúng mình tin rằng sự kiện sắp tới không chỉ là một buổi gặp gỡ,
          mà còn là nơi cảm xúc hòa cùng giai điệu, nơi những câu chuyện về
          Cá Hồi Hoang tiếp tục được kể theo cách riêng của mỗi người. Hãy đồng hành cùng chúng mình nhé &lt;3
        </p>
      </div>
    </div>
  );
}
