import React from 'react';
import HeroSection from '../components/HeroSection'; // Đường dẫn tùy theo cấu trúc dự án
import HeroSection2 from '../components/HeroSection2';
import HeroSection3 from '../components/HeroSection3';
import AutoScrollBanner from '../components/AutoScroll';
import Merch from '../components/MerchSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HeroSection2/>
      <AutoScrollBanner/>
      <HeroSection3/>
      <Merch/>
    </div>
  );
};

export default Home;
