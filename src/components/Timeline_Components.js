import React, { useRef, useEffect, useState } from "react";

import event1 from "../assets/PWM01219-min.jpg";
import { useTheme } from "../contexts/Theme";
import { Link } from "react-router-dom";
import TimelineImageLink from "./TimelineImageLink";
const timelineData = [
  {
    date: "17/05/2025",
    name: "Covershow CCPCLK?",
    location: "Hà Nội",
    image: event1,
    link: "/CCPCLKHN",
    buttonText: "Nhìn lại",

  },
  {
    date: "23-26/05/2025",
    name: "Triển lãm GẤP GAP",
    location: "Hà Nội",
    image: event1,
    link: "/GapGapHN",
    buttonText: "Nhìn lại",
  },
  {
    date: "13/09/2025",
    name: "Covershow CCPCLK?",
    location: "TP.HCM",
    image: event1,
    link: "/event",
    buttonText: "Mua vé",
  },
    {
    date: "12-14/09/2025",
    name: "Trưng bày GẤP GAP",
    location: "TP.HCM",
    image: event1,
    link: "/GapGapHCM",
    buttonText: "Xem thêm",
  },
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
          className="absolute w-[6px] bg-white z-0 left-1/2 transform -translate-x-1/2"
          style={{ top: lineStyle.top, height: lineStyle.height }}
        />

        <div className="flex flex-col gap-24 relative z-10">
          {timelineData.map((item, index) => (
            <div key={index} className="grid grid-cols-5 items-center gap-6">
              {/* Left */}
              <div className="col-span-2 flex justify-end pr-4">
                {index % 2 === 1 ? (
                  <Link to={item.link}>
                    <p className="text-white text-6xl font-light text-left leading-tight max-w-[500px] font-imbue">
                      {item.date}
                    </p>

                  </Link>
                ) : (
              <TimelineImageLink
                link={item.link}
                image={item.image}
                index={index}
                name={item.name}
                location={item.location}
                buttonText={item.buttonText}
              />

                )}
              </div>

              {/* Dot */}
              <div className="col-span-1 flex items-center justify-center timeline-item-dot relative z-10">
                <div className="w-12 h-12 rounded-full bg-white border-4 border-white" />
              </div>

              {/* Right */}
              <div className="col-span-2 flex justify-start pl-4">
                {index % 2 === 1 ? (
              <TimelineImageLink
                link={item.link}
                image={item.image}
                index={index}
                name={item.name}
                location={item.location}
                buttonText={item.buttonText}
              />
                ) : (
                  <Link to={item.link}>
                    <p className="text-white text-6xl font-light text-left leading-tight max-w-[500px] font-imbue">
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
          className="absolute w-[4px] bg-white z-0 left-9 top-0 bottom-0"
          // Bạn có thể fix chiều cao 100% ở mobile nếu muốn
        />

        <div className="flex flex-col gap-20 relative z-10 mt-10">
          {timelineData.map((item, index) => (
            <div key={index} className="grid grid-cols-[40px_1fr] gap-4 items-start">
              {/* Dot */}
              <div className="timeline-item-dot relative flex justify-center translate-x-1">
                <div className="w-6 h-6 rounded-full bg-white border-4 border-white" />
              </div>
              {/* Date & Image */}
              <div className="flex flex-col items-start">
                <Link to={item.link}>
                  <p className="text-white text-lg font-semibold ">
                    {item.date}
                  </p>
                </Link>
                <Link to={item.link}>
                    <TimelineImageLink
                      link={item.link}
                      image={item.image}
                      index={index}
                      name={item.name}
                      location={item.location}
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
