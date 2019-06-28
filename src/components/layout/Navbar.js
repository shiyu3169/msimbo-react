import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Logout from '../auth/Logout';
import { connect } from 'react-redux';
import { loggedIn } from '../../actions/userActions';
import NavItem from './NavItem';

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
            <NavItem to='/' text='Home' />
            <NavItem to='/students' text='Students' />
            <NavItem
              href='https://docs.google.com/spreadsheets/d/1B34dAaxyfY_Z6an_bQ0nB8HnSewuqByvBxcy5f7-b0A/edit?usp=sharing'
              text='Curriculum'
            />
            <NavItem to='/assignments' text='Assignments' />
            <NavItem to='/resources' text='Resources' />
            <NavItem to='/videos' text='Videos' />
            <NavItem to='/quiz' text='Quiz' />
            <NavItem href='https://msimbo.slack.com' text='Slack' />
            <NavItem to='/contact' text='Contact Us' />
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
