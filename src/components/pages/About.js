import React from 'react';
import '../../App.css';
import CDKSeries from '../CDKSeries';
import Book from '../Book';
import History from '../History'
import Footer from '../Footer';

function About() {
    return (
        <>
          <CDKSeries />
          <Book />
          <History />
          <Footer />
        </>
      );
}

export default About;
