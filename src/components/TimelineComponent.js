import React from 'react';
import sampleImage from '../assets/g10-min.png';

const timelineData = [
    {
        date: "14/05/2024",
        title: "[Hà Nội] Covershow Có Cần Phải Có Lý Không?",
        time: "13:00 PM – 22:30 PM",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        image: sampleImage,
    },
    {
        date: "23-25/05/2025",
        title: "[Hà Nội] Trưng bày Gấp Gáp",
        time: "10:00 AM – 17:00 PM",
        description: "Buổi hội thảo về công nghệ mới nhất trong ngành thiết kế và phát triển sản phẩm...",
        image: sampleImage,
    },
    {
        date: "01/01/2025",
        title: "[TPHCM] Covershow Có Cần Phải Có Lý Không?",
        time: "09:00 AM – 18:00 PM",
        description: "Chương trình đào tạo kỹ năng mềm dành cho các nhà lãnh đạo trẻ...",
        image: sampleImage,
    },
    {
        date: "15/01/2025",
        title: "[TPHCM] Trưng bày Gấp Gáp",
        time: "14:00 PM – 21:00 PM",
        description: "Triển lãm nghệ thuật với sự tham gia của các nghệ sĩ nổi tiếng trong khu vực...",
        image: sampleImage,
    },
];

export default function TimelineComponent() {
    return (
        <div className="relative w-full max-w-7xl mx-auto py-20 z-10">
            <div className="space-y-20 relative">
                {timelineData.map((item, index) => (
                    <div key={index} className="relative flex flex-col md:flex-row gap-4 md:gap-6 items-start">

                        {/* LEFT: Date + Time + Dot */}
                        <div className="relative flex w-full md:w-auto md:justify-end items-center">
                            <div className="bg-white/10 p-4 text-white w-full md:min-w-[200px] md:max-w-[200px] flex-shrink-0">

                                <p className="text-sm text-white/60 font-light" style={{textAlign: "Right"}}>{item.date}</p>
                                
                            </div>

                            {/* Dot and Line Segment */}
                            <div className="absolute left-[calc(100%+1.5rem)] top-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                                <div className="w-4 h-4 rounded-full bg-[#BC4535] border-2 border-white" />
                                {index < timelineData.length - 1 && (
                                    <div className="absolute top-full w-0.5 bg-white/30" style={{ height: '260px' }} />
                                    // Adjust '20px' to match your space-y-20 gap or calculate dynamically
                                )}
                            </div>
                        </div>

                        {/* RIGHT: Content */}
                        <div className="md:w-3/4 w-full">
                            <div className="h-full bg-white/10  p-6 ml-10 shadow-md text-white">
                                <div className="flex flex-col md:flex-row items-start gap-6 h-full">
                                    
                                    {/* Text */}
                                    <div className="w-full md:w-2/3 text-left">
                                        <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                                        <p className="text-sm text-orange-300 font-medium">{item.time}</p>
                                        <p className="text-sm text-gray-300">{item.description}</p>
                                    </div>

                                    {/* Image */}
                                    <div className="w-full md:w-1/3">
                                        <img
                                            src={item.image}
                                            alt="event"
                                            className="rounded-lg object-cover w-full h-40 md:h-36"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}