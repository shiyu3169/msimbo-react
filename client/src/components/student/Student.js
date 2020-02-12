import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Student.scss';
import logo from '../../assets/logo.png';
class Student extends Component {
  getYear(date) {
    return new Date(date).getFullYear();
  }

  getMonth(date) {
    return new Date(date).getMonth() + 1;
  }
  render() {
    const { user } = this.props;
    return (
      <div className='student text-center'>
        <Link to={`/user/${user._id}`}>
          <div
            className='picture'
            style={{
              backgroundImage: `url(${
                user.image
                  ? `data:${user.image.mimeType};base64,${new Buffer(
                      user.image.data
                    ).toString('base64')}`
                  : logo
              })`
            }}
          >
            <div className='student-content'>
              <div className='student-name'>
                <strong>
                  {user.firstName} {user.lastName}
                </strong>
              </div>
              <div className='learn-more'>
                <strong>Learn More ></strong>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default connect(null, {})(Student);
