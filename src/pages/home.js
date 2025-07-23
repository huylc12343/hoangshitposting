import React, { useRef } from 'react';
import HeroSection from '../components/HeroSection';
import HeroSection2 from '../components/HeroSection2';
import HeroSection3 from '../components/HeroSection3';
import AutoScrollBanner from '../components/AutoScroll';
import Merch from '../components/MerchSection';
import TimelineHeroSection from '../components/Timeline_Herosection'; // ✅ đã dùng đúng tên file
import DonViDongHanh from '../components/dv_DongHanh_HeroSection';

const Home = () => {
  const timelineRef = useRef(null);

  const scrollToTimeline = () => {
    timelineRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <HeroSection onScrollToTimeline={scrollToTimeline} />
      <HeroSection2 />
      <AutoScrollBanner />
      <HeroSection3 />
      <TimelineHeroSection ref={timelineRef} />
      <Merch />
      <DonViDongHanh/>
    </div>
  );
};

export default Home;
