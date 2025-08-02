import React from 'react';
import arrowDownIcon from '../assets/down-arrow-svgrepo-com.svg';
import gapgap from '../assets/gapgap_sg_logo_ngang.png';
import gapgapdoc from '../assets/gapgap_sg_logo_doc.png';
import { useTheme } from '../contexts/Theme';

const HeroSection = ({ onScrollToTimeline }) => {
  const { theme } = useTheme();

  return (
    <div
      className="relative w-full h-screen font-imbue text-[#EEE1D8] overflow-hidden"
      style={{
        backgroundImage: theme.background,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pt-20 md:pt-16">
        <div className="w-full max-w-6xl flex flex-col items-center">
          {/* Logo ngang cho màn hình md trở lên */}
          <div className="w-full max-w-[800px] aspect-square sm:aspect-video overflow-hidden rounded-xl shadow-xl">
            <img
              src={gapgap}
              alt="GẤP GÁP"
              className="w-full h-full object-contain object-center hidden sm:block"
            />
            {/* Logo dọc cho màn hình nhỏ hơn sm */}
            <img
              src={gapgapdoc}
              alt="GẤP GÁP"
              className="w-full h-full object-contain object-center block sm:hidden"
            />
          </div>

          <div
            className="mt-8 animate-bounce cursor-pointer"
            onClick={onScrollToTimeline}
          >
            <img
              src={arrowDownIcon}
              alt="Scroll to Timeline"
              className="w-8 h-8 md:w-10 md:h-10 filter invert"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
