import React, { useState, useEffect } from 'react';
import $ from 'jquery';

import Services from '../../components/layout/Services';
import About from '../../components/layout/About';

import './Home.scss';
import Testimonials from '../../components/Testimonials/Testimonials';

const Home = () => {
  const [words] = useState([
    'Web Development',
    'Full Stack Dev',
    'Programming'
  ]);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [txt, setTxt] = useState('');
  const [typeSpeed, setTypeSpeed] = useState(200);

  useEffect(() => {
    const type = () => {
      const current = wordIndex % words.length;
      const fullTxt = words[current];
      if (isDeleting) {
        setTypeSpeed(100);
        setTxt(fullTxt.substring(0, txt.length - 1));
      } else {
        setTypeSpeed(200);
        setTxt(fullTxt.substring(0, txt.length + 1));
      }

      if (!isDeleting && txt === fullTxt) {
        setTypeSpeed(3000);
        setIsDeleting(true);
      } else if (isDeleting && txt === '') {
        setIsDeleting();
        setWordIndex(wordIndex => wordIndex + 1);
        setTypeSpeed(500);
      }
    };
    const timer = setTimeout(() => {
      type();
    }, typeSpeed);
    return () => {
      clearTimeout(timer);
    };
  }, [txt, typeSpeed, isDeleting, wordIndex, words]);

  return (
    <div className='home-page'>
      <header className='showcase sw-bg-dark'>
        <div className='content'>
          <img src='logo.png' className='logo' alt='MSIMBO' />
          <h1 id='home-h1' className='title'>
            MSIMBO
          </h1>
          <h2>{txt}</h2>
          <h2 id='home-h2'>Welcome to ULEM Coding Bootcamp</h2>
        </div>
      </header>
      <Services />
      <About />
      <Testimonials />
    </div>
  );
};

export default Home;
