import React from 'react';

import testimonial1 from '../../images/testimonial1.jpg';
import testimonial2 from '../../images/testimonial2.jpg';
import testimonial3 from '../../images/testimonial3.jpg';

import './Testimonials.scss';

const Testimonials = () => {
  return (
    <section className='testimonials sw-bg-dark'>
      <img src={testimonial1} alt='testimonial 1' />
      <img src={testimonial2} alt='testimonial 2' />
      <img src={testimonial3} alt='testimonial 3' />
    </section>
  );
};

export default Testimonials;
