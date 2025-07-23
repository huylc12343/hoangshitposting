import React, { useState, useEffect } from "react";
import bui from '../assets/buirock.png';
import hrc from '../assets/hrc.png';
import golden_bird from '../assets/golden_bird.png';
import montauk from '../assets/montauk.png';
import pwm from '../assets/pwm.png';

const partners = [
  { id: 1, name: "Bui Rock", logo: bui },
  { id: 2, name: "HRC", logo: hrc },
  { id: 3, name: "Golden Bird", logo: golden_bird },
  { id: 4, name: "Montauk", logo: montauk },
  { id: 5, name: "PWM", logo: pwm },
];

export default function DvDongHanhHeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Xác định kích thước di động là dưới hoặc bằng 768px (mặc định cho md breakpoint của Tailwind)
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Gọi lần đầu khi component mount
    window.addEventListener("resize", handleResize); // Lắng nghe sự kiện thay đổi kích thước cửa sổ
    return () => window.removeEventListener("resize", handleResize); // Dọn dẹp listener
  }, []);

  return (
    <section
      style={{
        position: "relative",
        textAlign: "center",
        padding: "2rem 1rem", // Padding chung cho cả mobile và desktop
        color: "#fff",
        overflow: "hidden", // Đảm bảo không có scroll ngang không mong muốn
      }}
    >
      {/* Overlay mờ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.7)",
          zIndex: 0,
        }}
      />

<h2
  style={{
    fontWeight: "bold",
    fontSize: isMobile ? "2.5rem" : "3.5rem",
    marginBottom: "2rem",
    position: "relative",
    zIndex: 1,
    whiteSpace: isMobile ? "normal" : "nowrap",  // Mobile cho xuống dòng
    overflow: "visible",  // Mobile cho hiển thị đầy đủ
    textOverflow: isMobile ? "unset" : "ellipsis",  // Bỏ dấu ... khi mobile
    padding: "0 1rem"
  }}
>
  Đơn vị đồng hành
</h2>


      {/* Logo container */}
      {isMobile ? (
        // Mobile: Logo hiển thị linh hoạt trong 2 hàng
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap", // Cho phép logo tự động xuống dòng
            gap: "2rem", // Khoảng cách giữa các logo
            position: "relative",
            zIndex: 1,
            maxWidth: "calc(100% - 2rem)", // Đảm bảo container không rộng hơn màn hình trừ padding
            margin: "0 auto", // Căn giữa
          }}
        >
          {partners.map((partner) => (
            <img
              key={partner.id}
              src={partner.logo}
              alt={partner.name}
              style={{
                width: "140px",
                height: "100px",
                objectFit: "contain",
                flexShrink: 0, // Đảm bảo ảnh không bị co lại
              }}
            />
          ))}
        </div>
      ) : (
        // Desktop: 2 hàng riêng biệt, hàng 2 lệch nhẹ sang phải
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "3rem",
              marginBottom: "1.5rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            {partners.slice(0, 3).map((partner) => (
              <img
                key={partner.id}
                src={partner.logo}
                alt={partner.name}
                style={{
                  width: "180px",
                  height: "120px",
                  objectFit: "contain",
                }}
              />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "3rem",
              position: "relative",
              zIndex: 1,
              marginLeft: "2rem", // Giữ độ lệch sang phải cho hàng thứ 2
            }}
          >
            {partners.slice(3).map((partner) => (
              <img
                key={partner.id}
                src={partner.logo}
                alt={partner.name}
                style={{
                  width: "180px",
                  height: "120px",
                  objectFit: "contain",
                }}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}