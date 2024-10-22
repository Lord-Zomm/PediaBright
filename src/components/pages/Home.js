import React from 'react';
import '../../App.css';
//import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Mission from '../Mission';
import Contact from '../Contact'

function Home() {
  return (
    <>
      <HeroSection />
      <Mission />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
