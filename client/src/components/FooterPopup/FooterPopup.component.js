import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './FooterPopup.style.scss';

const FooterPopup = () => {
  const [display, setDisplay] = useState(true);
  console.log(display);
  if (!display) {
    return null;
  }

  return (
    <div className='footer-pop-up'>
      Looking to hire software engineers? Check out{' '}
      <Link to='/students'>MSIMBO Students!</Link>{' '}
      <i
        className='far fa-lg fa-times-circle'
        onClick={() => {
          setDisplay(prevDisplay => !prevDisplay);
        }}
      ></i>
    </div>
  );
};

export default FooterPopup;
