import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Logout from '../auth/Logout';
import { connect } from 'react-redux';
import { loggedIn } from '../../actions/userActions';

const Navbar = props => {
  const collapse = () => {
    $('.collapse').collapse('hide');
  };

  const { currentUser } = props;

  return (
    <div className='front' id='top'>
      <nav className='navbar navbar-expand-lg navbar-dark'>
        <button
          className='navbar-toggler'
          data-toggle='collapse'
          data-target='#navbarTogglerDemo02'
          aria-controls='navbarTogglerDemo02'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div
          className='collapse navbar-collapse'
          id='navbarTogglerDemo02'
          onClick={collapse}
        >
          <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/students'>
                Students
              </Link>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://docs.google.com/spreadsheets/d/1B34dAaxyfY_Z6an_bQ0nB8HnSewuqByvBxcy5f7-b0A/edit?usp=sharing'
              >
                Curriculum
              </a>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/assignments'>
                Assignments
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/resources'>
                Resources
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/videos'>
                Videos
              </Link>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                href='https://msimbo.slack.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Slack
              </a>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                Contact us
              </Link>
            </li>
          </ul>
          {currentUser === 0 && (
            <button
              className='btn menu-button'
              data-toggle='modal'
              data-target='#loginModal'
            >
              Login
            </button>
          )}
          {currentUser !== 0 && (
            <React.Fragment>
              <Link to={`/user/${currentUser._id}`} className='btn menu-button'>
                <i className='fas fa-user' />
              </Link>
              <button
                className='btn menu-button'
                data-toggle='modal'
                data-target='#logoutModal'
              >
                Logout
              </button>
            </React.Fragment>
          )}
          {currentUser !== 0 && currentUser.admin && (
            <button
              className='btn menu-button'
              data-toggle='modal'
              data-target='#registerModal'
            >
              Register
            </button>
          )}
        </div>
      </nav>
      <Login />
      <Register />
      <Logout />
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(
  mapStateToProps,
  { loggedIn }
)(Navbar);
