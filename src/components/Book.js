import React, { useState, useEffect } from 'react';
import './Book.css';

const Book = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768); // Set mobile view based on initial screen width

  // Array of page images
  const pages = [
    '/images/page_1.png',
    '/images/page_2.png',
    '/images/page_3.png',
    '/images/page_4.png',
    '/images/page_5.png',
    '/images/page_6.png',
    '/images/page_7.png',
    '/images/page_8.png',
    '/images/page_9.png',
    '/images/page_10.png',
    '/images/page_11.png',
  ];

  // Navigate to previous page
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? pages.length - 1 : prevPage - 1));
  };

  // Navigate to next page
  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage === pages.length - 1 ? 0 : prevPage + 1));
  };

  // Effect to listen for screen resizing and adjust layout accordingly
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768); // Update state when screen size changes
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the listener when the component is unmounted
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="book-container">
      <h2 className="book-heading">Preview the first book in our CKD series!</h2>

      <div className="book-navigation">
        {/* Conditionally render based on screen size */}
        {isMobileView ? (
          <>
            {/* Mobile view: buttons below the book */}
            <div className="book">
              <img src={pages[currentPage]} alt={`Page ${currentPage + 1}`} className="book-page" />
            </div>
            <div className="button-container">
              <button onClick={goToPreviousPage} className="nav-button left" style={{paddingRight: '5px'}}>
                &#8249;
              </button>
              <button onClick={goToNextPage} className="nav-button right" style={{paddingLeft: '5px'}}>
                &#8250;
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Desktop view: buttons on either side of the book */}
            <button onClick={goToPreviousPage} className="nav-button left" style={{paddingRight: '5px'}}>
              &#8249;
            </button>
            <div className="book">
              <img src={pages[currentPage]} alt={`Page ${currentPage + 1}`} className="book-page" />
            </div>
            <button onClick={goToNextPage} className="nav-button right" style={{paddingLeft: '5px'}}>
              &#8250;
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Book;
