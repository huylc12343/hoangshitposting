import React, { useRef, useEffect, useState } from "react";
import stamp from "../assets/stamp.png";
import { useTheme } from "../contexts/Theme";
import { Link } from "react-router-dom";

const timelineData = [
  { date: "14/05/2024", image: stamp, link: "/event" },
  { date: "18/05/2024", image: stamp, link: "/event" },
  { date: "22/05/2024", image: stamp, link: "/event" },
  { date: "28/05/2024", image: stamp, link: "/event" },
];

export default function Timeline_Components() {
  const desktopRef = useRef(null);
  // Nếu bạn muốn mobile line thì tạo thêm mobileRef
  // const mobileRef = useRef(null);

  const [lineStyle, setLineStyle] = useState({ top: 0, height: 0 });
  const { theme } = useTheme();

  useEffect(() => {
    if (desktopRef.current) {
      const items = desktopRef.current.querySelectorAll(".timeline-item-dot");
      if (items.length >= 2) {
        const top = items[0].offsetTop + items[0].offsetHeight / 2;
        const bottom =
          items[items.length - 1].offsetTop +
          items[items.length - 1].offsetHeight / 2;

        setLineStyle({
          top: top,
          height: bottom - top,
        });
      }
    }
  }, []);

  return (
    <div className="w-full">
      {/* Timeline for Desktop */}
      <div
        className="hidden md:block max-w-7xl mx-auto px-4 relative"
        ref={desktopRef}
      >
        {/* Vertical line */}
        <div
          className="absolute w-[4px] bg-white/40 z-0 left-1/2 transform -translate-x-1/2"
          style={{ top: lineStyle.top, height: lineStyle.height }}
        />

        <div className="flex flex-col gap-24 relative z-10">
          {timelineData.map((item, index) => (
            <div key={index} className="grid grid-cols-5 items-center gap-6">
              {/* Left */}
              <div className="col-span-2 flex justify-end pr-4">
                {index % 2 === 0 ? (
                  <Link to={item.link}>
                    <p className="text-white text-5xl font-bold text-right leading-tight max-w-[500px] hover:underline">
                      {item.date}
                    </p>
                  </Link>
                ) : (
                  <Link to={item.link}>
                    <img
                      src={item.image}
                      alt={`stamp-${index}`}
                      className="w-full max-w-[520px] object-contain rounded-xl shadow-2xl hover:scale-105 transition"
                    />
                  </Link>
                )}
              </div>

              {/* Dot */}
              <div className="col-span-1 flex items-center justify-center timeline-item-dot relative z-10">
                <div className="w-12 h-12 rounded-full bg-blue-500 border-4 border-white" />
              </div>

              {/* Right */}
              <div className="col-span-2 flex justify-start pl-4">
                {index % 2 === 0 ? (
                  <Link to={item.link}>
                    <img
                      src={item.image}
                      alt={`stamp-${index}`}
                      className="w-full max-w-[520px] object-contain rounded-xl shadow-2xl hover:scale-105 transition"
                    />
                  </Link>
                ) : (
                  <Link to={item.link}>
                    <p className="text-white text-5xl font-bold text-left leading-tight max-w-[500px] hover:underline">
                      {item.date}
                    </p>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline for Mobile */}
      <div className="block md:hidden max-w-xl mx-auto px-4 relative">
        {/* Vertical line for mobile */}
        {/* Nếu muốn vertical line trên mobile, có thể làm riêng */}
        <div
          className="absolute w-[2px] bg-white/40 z-0 left-9 top-0 bottom-0"
          // Bạn có thể fix chiều cao 100% ở mobile nếu muốn
        />

        <div className="flex flex-col gap-20 relative z-10 mt-10">
          {timelineData.map((item, index) => (
            <div key={index} className="grid grid-cols-[40px_1fr] gap-4 items-start">
              {/* Dot */}
              <div className="timeline-item-dot relative flex justify-center">
                <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-white" />
              </div>

              {/* Date & Image */}
              <div className="flex flex-col items-start">
                <Link to={item.link}>
                  <p className="text-white text-lg font-semibold hover:underline">
                    {item.date}
                  </p>
                </Link>
                <Link to={item.link}>
                  <img
                    src={item.image}
                    alt={`stamp-${index}`}
                    className="w-full max-w-[300px] mt-2 object-contain rounded-xl shadow-2xl hover:scale-105 transition"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
