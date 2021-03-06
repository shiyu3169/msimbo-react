import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers, filterUser } from '../../actions/userActions';
import Student from '../../components/student/Student';
import Seasons from '../../components/seasons/Seasons';
import BackToTop from '../../components/layout/BackToTop';

import './Students.scss';

class Students extends Component {
  componentDidMount() {
    this.props.getUsers().then(() => {
      this.props.filterUser(this.props.seasons[0]);
    });
  }

  render() {
    const { users } = this.props;
    return (
      <div className='students'>
        <div className='container'>
          <h3 className='sw-red'>Our Students</h3>
          <div className='bottom-line' />
          <p>
            Our students meet all day, every day for 20 weeks to learn full
            stack development. All students' works can be found in students'
            GitHub.
          </p>
          <Seasons />
          <div className='students-container'>
            {users.map(user => (
              <Student key={user._id} user={user} />
            ))}
          </div>
        </div>
        <BackToTop />
      </div>
    );
  }
}

Students.propTypes = {
  users: PropTypes.array.isRequired,
  getUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  users: state.user.users,
  seasons: state.user.seasons
});

export default connect(mapStateToProps, { getUsers, filterUser })(Students);
