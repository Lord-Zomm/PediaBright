import React, { useState } from 'react';
import './Book.css';

const Book = () => {
  const [currentPage, setCurrentPage] = useState(0);

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
    setCurrentPage((prevPage) =>
      prevPage === 0 ? pages.length - 1 : prevPage - 1
    );
  };

  // Navigate to next page
  const goToNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === pages.length - 1 ? 0 : prevPage + 1
    );
  };

  return (
    <div className="book-container">
      <h2 className="book-heading">Get a preview of the first book in our CDK series!</h2>
      <div className="book-navigation">
        <button onClick={goToPreviousPage} className="nav-button left" style={{paddingRight: '5px'}}>
          &#8249;
        </button>
        <div className="book">
          <img src={pages[currentPage]} alt={`Page ${currentPage + 1}`} className="book-page" />
        </div>
        <button onClick={goToNextPage} className="nav-button right" style={{paddingLeft: '5px'}}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Book;
