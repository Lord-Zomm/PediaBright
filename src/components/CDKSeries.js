import React from 'react';
import './CDKSeries.css';

function CDKSeries() {
  return (
    <div className='cdkseries-container'>
      <div className='cdkseries-content'>
        <h1 className='cdkseries-title'>
          Chronic Kidney <br /> Disease Series
        </h1>
        <p className='cdkseries-description'>
          Check out our first series <br /> now available for purchase <br /> on our Amazon storefront!
        </p>
        <a href="https://www.amazon.com/PediaBright-Chronic-Kidney-Disease-3-book-series/dp/B0CQS1KHSF" target="_blank" rel="noopener noreferrer" className='cdkseries-button'>
          Link to Storefront
        </a>
      </div>
    </div>
  );
}

export default CDKSeries;
