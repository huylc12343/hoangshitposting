import React, { useRef } from 'react';
import HeroSection from '../components/HeroSection';
import HeroSection2 from '../components/HeroSection2';
import HeroSection3 from '../components/HeroSection3';
import AutoScrollBanner from '../components/AutoScroll';
import Merch from '../components/MerchSection';
import TimelineHeroSection from '../components/Timeline_Herosection';
import DonViDongHanh from '../components/dv_DongHanh_HeroSection';
import AutoScroll2 from '../components/AutoScroll2';
import imgf from '../assets/join_us-min.jpg';
import HoverImageWithButton from '../components/HoverImage';

const Home = () => {
  const section2Ref = useRef(null);

  const scrollToSection2 = () => {
    section2Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <HeroSection onScrollToTimeline={scrollToSection2} />
      <div ref={section2Ref}>
        <HeroSection2 />
      </div>
      <AutoScrollBanner />
      <HeroSection3 />
      <AutoScroll2 />
      <TimelineHeroSection />
      {/* <Merch /> */}
      <DonViDongHanh />
      <HoverImageWithButton />
    </div>
  );
};

export default Home;
