import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavItem = ({ href, to, text }) => {
  if (to) {
    return (
      <li className='nav-item'>
        <Link className='nav-link' to={to}>
          {text}
        </Link>
      </li>
    );
  } else {
    return (
      <li className='nav-item'>
        <a
          className='nav-link'
          href={href}
          target='_blank'
          rel='noopener noreferrer'
        >
          {text}
        </a>
      </li>
    );
  }
};

NavItem.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default NavItem;
