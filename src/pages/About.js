import React from 'react';
import AboutUs_HeroSection from '../components/AboutUs_HeroSection';
import AboutUs_HeroSection2 from '../components/AboutUs_HeroSection2';
import MasonryGallery from '../components/MasonryGallery';
import Thanks from '../components/thanks';


const About = () => {
  return (
    <div>
      <AboutUs_HeroSection/>
      <AboutUs_HeroSection2/>
      <MasonryGallery/>
      <Thanks/>
    </div>
  );
};

export default About;
