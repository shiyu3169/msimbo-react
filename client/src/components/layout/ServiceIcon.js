import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const ServiceIcon = ({ iconClass, title, description, onClick, to, href }) => {
  const [show, setShow] = useState(false);
  return to ? (
    <Link to={to} className='text-light'>
      <span
        className='pointer'
        onClick={onClick}
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
      >
        <i className={iconClass} />
        <h3>{title}</h3>
        <p className='transition' style={{ opacity: show ? 1 : 0 }}>
          {description}
        </p>
      </span>
    </Link>
  ) : (
    <a
      href={href}
      className='text-light'
      target='_blank'
      rel='noopener noreferrer'
    >
      <span
        className='pointer'
        onClick={onClick}
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
      >
        <i className={iconClass} />
        <h3>{title}</h3>
        <p className='transition' style={{ opacity: show ? 1 : 0 }}>
          {description}
        </p>
      </span>
    </a>
  );
};

ServiceIcon.prototypes = {
  iconClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  to: PropTypes.string,
  href: PropTypes.string
};

export default ServiceIcon;
