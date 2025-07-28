import React from 'react';
import event_image from '../assets/covershow_img_min.jpg'; // 👈 Thay bằng ảnh bạn muốn

export default function Event_HeroSection2() {
  return (
    <section className="w-full text-white">
      <img
        src={event_image}
        alt="Sự kiện Cá Hồi Hoang"
        className="w-full h-auto object-cover mb-10 shadow-lg"
      />

      <p className="text-lg mb-4">
        Trong suốt 4 ngày diễn ra triển lãm, hơn 500+ người đã ghé thăm, cùng nhau sống lại những mảnh ký ức gắn với hành trình âm nhạc của Cá Hồi Hoang thông qua hình ảnh, kỷ vật lưu niệm và âm nhạc thân thuộc của các buổi Open Mic.
      </p>

      <p className="text-lg mb-4">
        “GẤP GAP” được chia thành ba không gian chính, như ba lát cắt chồng lên nhau, tái hiện hành trình cảm xúc suốt 10 năm của Cá Hồi Hoang — và cũng là hành trình lặng lẽ của những người đã, đang, tiếp tục lắng nghe họ.
      </p>

      <p className="text-lg mb-4">
        1. Nhìn lại hành trình 10 năm của Cá Hồi Hoang: Không gian đầu tiên là nơi nhìn lại hành trình 10 năm hoạt động của ban nhạc qua những dấu mốc quan trọng: từ các album phòng thu, những show diễn, đến lời bài hát và những đồ vật gắn liền với ban nhạc. Đây là một dòng chảy thời gian, không chỉ kể lại câu chuyện của Cá Hồi Hoang, mà còn là một tấm gương phản chiếu ký ức và sự trưởng thành của người nghe trong suốt quãng đường ấy.
      </p>
     <p className="text-lg mb-4">
        2. Không gian FANART - nơi trưng bày các tác phẩm được gửi về từ người hâm mộ. Mỗi bức tranh, mỗi nét vẽ hay câu chữ đều mang theo một góc nhìn riêng, một cách cảm nhạc rất cá nhân. Dù là vẽ tay hay digital art, tất cả đều cùng nhau thắp lên cảm giác gắn kết đặc biệt giữa người nghe và ban nhạc: dịu dàng, lặng lẽ nhưng sâu sắc.
      </p>
        <p className="text-lg mb-4">
        3. Không gian lấy cảm hứng từ các bài hát Cá Hồi Hoang - nơi cảm xúc được tái hiện lại từ các bài hát của Cá Hồi Hoang. Lấy cảm hứng từ lời ca, giai điệu và không khí âm nhạc, mỗi góc nhỏ là một bài hát được chuyển thành chất liệu, ánh sáng, màu sắc. 
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-left mb-10 text-white">
        OPEN MIC
      </h2>
    </section>
  );
}
