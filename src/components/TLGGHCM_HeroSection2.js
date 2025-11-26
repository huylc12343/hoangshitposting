import React from "react";
import event_image from "../assets/anh_sk_trienlam_min.jpg";
import tui from "../assets/tui_chh.jpg";
import trienlam1 from "../assets/trienlam1.jpg";
import trienlam2 from "../assets/trienlam2.jpg";
export default function Event_HeroSection2() {
  return (
    <section className="w-full text-white  py-2 space-y-6">
      {/* Ảnh background sự kiện */}
      <div className="w-full overflow-hidden shadow-md">
        <img
          src={event_image}
          alt="Event Background"
          className="w-full h-auto object-cover mb-8"
        />
      </div>

      {/* Nội dung đoạn 1 */}
      <p className="text-lg font-Averta-CY text-justify  ">
        Hành trình của Triển Lãm “Gấp Gap” sẽ tiếp tục được chúng mình kể tại
        Sài Gòn. Không gian nhỏ xinh ấm cúng sẽ trở thành mảnh ký ức đẹp và đong
        đầy cảm xúc đối với tất cả những ai ghé thăm, tái hiện hành trình “bơi
        ngược dòng” đầy rực rỡ suốt 10 năm qua của Cá Hồi Hoang.
      </p>

      <div className="w-full overflow-hidden shadow-md ">
        <img
          src={trienlam1}
          className="w-full h-auto object-cover mb-10 mt-10"
        />
      </div>

      {/* Nội dung đoạn 2 */}
      <p className="text-lg font-Averta-CY text-justify">
        Đồng thời đây cũng là cách chúng mình đồng hành cùng các Cá gửi đến Cá
        Hồi Hoang lời chào, lời tri ân và cảm ơn thân thương, mong rằng sự gắn
        kết này sẽ lấp đầy phần nào chơi vơi, lạc lõng của mọi người ^^
      </p>
      <div className="w-full overflow-hidden shadow-md ">
        <img
          src={trienlam2}
          className="w-full h-auto object-cover mb-10 mt-10"
        />
      </div>
    </section>
  );
}
