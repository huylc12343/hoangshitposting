import React, { useState, useEffect } from "react";
import bui from "../assets/buirock.png";
import hrc from "../assets/hrc.png";
import golden_bird from "../assets/golden_bird.png";
import montauk from "../assets/montauk.png";
import pwm from "../assets/pwm.png";
import hoi from "../assets/logo_hoi.png";

const partners = [
  { id: 1, name: "Bui Rock", logo: bui },
  { id: 2, name: "HRC", logo: hrc },
  { id: 3, name: "Montauk", logo: montauk },
  { id: 4, name: "Hoi", logo: hoi },
  { id: 5, name: "Golden Bird", logo: golden_bird },
  { id: 6, name: "PWM", logo: pwm },
];

export default function DvDongHanhHeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        textAlign: "center",
        padding: "2rem 1rem",
        color: "#FFFFFF", // text màu đen
        overflow: "hidden",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <h2
        className={`font-imbue font-bold mb-8 relative z-[1] px-4 ${
          isMobile
            ? "text-[2rem] whitespace-normal"
            : "text-[3rem] whitespace-nowrap"
        }`}
      >
        Đơn vị đồng hành
      </h2>

      <div
        style={{
          width: isMobile ? "100%" : "1200px",
          height: isMobile ? "auto" : "345px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          padding: isMobile ? "0 1rem" : "0",
        }}
      >
        {isMobile ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
              width: "100%",
            }}
          >
            {partners.map((partner) => (
              <div
                key={partner.id}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{
                    height: "120px",
                    objectFit: "contain",
                    maxWidth: "100%",
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "3rem",
              }}
            >
              {partners.slice(0, 4).map((partner) => (
                <img
                  key={partner.id}
                  src={partner.logo}
                  alt={partner.name}
                  style={{
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
                marginLeft: "2rem",
              }}
            >
              {partners.slice(4).map((partner) => (
                <img
                  key={partner.id}
                  src={partner.logo}
                  alt={partner.name}
                  style={{
                    height: "120px",
                    objectFit: "contain",
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
