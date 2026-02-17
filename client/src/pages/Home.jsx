import React from 'react';
import HeroSection from '../components/HeroSection';
import WhatIsAilyt from '../components/WhatIsAilyt';
import Verticals from '../components/Verticals';
import WhyAilyt from '../components/WhyAilyt';
import Founder from '../components/Founder';

const Home = () => {
  return (
    <main className="home">
      <HeroSection />
      <WhatIsAilyt />
      <Verticals />
      <WhyAilyt />
      <Founder />
    </main>
  );
};

export default Home;
