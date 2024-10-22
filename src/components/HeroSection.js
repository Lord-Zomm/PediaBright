import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='hero-text'>
        <h1>Welcome to </h1>
        <h1>PediaBright</h1>
      </div>
      <img src='/images/ugly_people.png' alt='People' className='hero-image' />
    </div>
  );
}

export default HeroSection;
