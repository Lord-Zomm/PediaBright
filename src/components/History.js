import React, { useState } from 'react';
import './History.css';

const pages = [
  {
    content: "PediaBright was founded by four innovative college students, who<br />shared a common goal of supporting<br />kid’s through their healthcare journey.<br />Through extensive market research,<br />PediaBright’s founders identified a root<br />problem in pediatric healthcare",
  },
  {
    content: "The Problem:<br />Communication barriers between<br />pediatric patients and providers<br />results in children with complex<br />health conditions feeling confused<br />& alone.",
  },
  {
    content: "The Solution:<br />Improve the involvement of children<br />with their own care by empowering<br />guardians, caretakers, and physicians<br />with a tool to share with their pediatric<br />patients",
  }
];

function History() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); // State to manage fade animation

  const goToPrevious = () => {
    setFade(false); // Trigger fade-out
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? pages.length - 1 : prevIndex - 1));
      setFade(true); // Trigger fade-in
    }, 300); // Adjust to match the animation duration
  };

  const goToNext = () => {
    setFade(false); // Trigger fade-out
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === pages.length - 1 ? 0 : prevIndex + 1));
      setFade(true); // Trigger fade-in
    }, 300); // Adjust to match the animation duration
  };

  return (
    <div className="history-container">
      <div className="history-content">
        {/* Apply fade class only to the text */}
        <p className={`history-text ${fade ? 'fade-in' : 'fade-out'}`} dangerouslySetInnerHTML={{ __html: pages[currentIndex].content }} />
        <div className="history-navigation">
          <button onClick={goToPrevious} className="arrow-left">&#8249;</button>
          <div className="history-circles">
            {pages.map((_, index) => (
              <span
                key={index}
                className={index === currentIndex ? 'circle active' : 'circle'}
              />
            ))}
          </div>
          <button onClick={goToNext} className="arrow-right">&#8250;</button>
        </div>
      </div>
    </div>
  );
}

export default History;
