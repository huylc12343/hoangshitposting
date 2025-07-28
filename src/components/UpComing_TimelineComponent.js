import React from 'react';
import sampleImage from '../assets/g8-min.png';
import { Link } from 'react-router-dom';
import timeline1 from "../assets/bg_timeline_home_min.jpg";
import timeline2 from "../assets/upcoming_banner2_min.jpg";
import timeline3 from "../assets/upcoming_banner3_min.jpg";
import timeline4 from "../assets/merch_bg_min.jpg";
const timelineData = [
  {
    date: "17/05/2025",
    title: "[Hà Nội] Covershow: Có Cần Phải Có Lý Không?",
    time: "19:00 – 22:00",
    description:["Mang âm nhạc Cá trở lại HRC – nơi band lần đầu diễn tại Hà Nội, cùng 300+ khán giả hát vang những giai điệu không thể quên."," ",
      "FULL LINEUP:","Lý Bực • Bùi Xuân Lộc • Góp Thong Thả", "dETrong • Fuzes • Fishymeow • Trần Hoàn"],
      
    image: timeline1,
    link: "/CCPCLKHN",  // ✅ Link riêng

  },
  {
    date: "23–26/05/2025",
    title: "[Hà Nội] Triển lãm “Gấp Gap”",
    time: "09:00 - 21:00",
    description:["Hơn 500+ người đã ghé thăm, cùng nhau sống lại những mảnh ký ức gắn với hành trình âm nhạc của Cá Hồi Hoang thông qua hình ảnh, kỷ vật lưu niệm và âm nhạc thân thuộc của các buổi Open Mic. "],
    image: timeline2,
    link: "/GapGapHN",  // ✅ Link riêng

  },
  {
    date: "13/09/2025",
    title: "[TPHCM] Covershow “Có Cần Phải Có Lý Không?” ",
    time: "09:00 – 18:00",
    description:
      ["Với sứ mệnh giữ gìn, lan toả tình yêu dành cho âm nhạc Cá Hồi Hoang, Cover Show tại Sài Gòn là nơi ký ức ùa về, cảm xúc vỡ oà và kết nối được thắp sáng - để hành trình sống cùng âm nhạc Cá “sẽ luôn là cái gì đó mãi mãi”.","FULL LINEUP: upcoming..."],
    image: timeline3,
    link: "/event",  // ✅ Link riêng

  },
  {
    date: "12 - 14/09/2025",
    title: "[TP.HCM] Triển lãm “Gấp Gáp”",
    time: "14:00 PM - 21:00 PM",
    description:
      ["Không gian triển lãm nhỏ xinh ấm cúng sẽ trở thành mảnh ký ức đẹp và đong đầy cảm xúc đối với tất cả những ai ghé thăm, đồng thời tái hiện hành trình “bơi ngược dòng” đầy rực rỡ suốt 10 năm qua."],
    image: timeline4,
    link: "/GapGapHCM",  // ✅ Link riêng

  },
];
export default function TimelineComponent() {
    return (
        <div className="relative w-full max-w-7xl mx-auto z-10">
            <div className="space-y-20 relative">
                {/* Vertical line for mobile timeline */}
                <div className="md:hidden absolute left-[7px] top-0 bottom-0 w-0.5 bg-white/30 z-0" />


                {timelineData.map((item, index) => (
                    <div key={index} className="relative flex flex-col md:flex-row gap-4 md:gap-6 items-start">

                        {/* LEFT: Date + Time + Dot */}
                        <div className="relative flex w-full md:w-auto md:justify-end items-center">
                            {/* Dot and Line Segment for Mobile */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex md:hidden">
                                <div className="w-4 h-4 rounded-full bg-white border-2 border-white flex-shrink-0" />
                            </div>

                            <div className="p-4 text-white w-full md:min-w-[200px] md:max-w-[200px] flex-shrink-0 pl-12 md:pl-4">
                            <p className="text-2xl md:text-3xl text-white/90 font-semibold md:text-right font-imbue">
                            {item.date}
                            </p>

                            </div>

                            {/* Dot and Line Segment for Desktop */}
                            <div className="hidden md:flex absolute left-[calc(100%+1.5rem)] top-1/2 -translate-y-1/2 z-10 flex-col items-center">
                                <div className="w-4 h-4 rounded-full bg-white border-2 border-white" />
                                {index < timelineData.length - 1 && (
                                    <div className="absolute top-full w-0.5 bg-white" style={{ height: '400px' }} />
                                )}
                            </div>
                        </div>

                        {/* RIGHT: Content */}
                        <div className="md:w-full w-full">
                        <div className="h-full p-3 md:ml-10 text-white">
                            <Link to={item.link}>
                            <div className="flex flex-col md:flex-row items-start md:items-start gap-6 hover:bg-white/30 transition duration-300 rounded-lg p-4">

                                {/* Text */}
                                <div className="w-full md:flex-1 text-left">
                                <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-orange-300 font-medium">{item.time}</p>
                                {item.description.map((line, i) => (
                                <p key={i} className="text-sm text-gray-300">
                                  {line}
                                </p>
                              ))}

                                </div>

                                {/* Image */}
                                <div className="w-full md:w-[400px] h-[270px] flex-shrink-0">
                                <img
                                    src={item.image}
                                    alt="event"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                </div>
                            </div>
                            </Link>
                        </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}