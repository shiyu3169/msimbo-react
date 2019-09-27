import React, { Component } from 'react';
import { connect } from 'react-redux';
import YoutubeDelete from './YoutubeDelete';

class Youtube extends Component {
  render() {
    const { video, currentUser } = this.props;
    return (
      <>
        <li className='list-group-item'>
          <a target='_blank' rel='noopener noreferrer' href={video.src}>
            {video.name}
          </a>
          {currentUser.admin && (
            <div className='float-right'>
              <button
                className='btn btn-outline-danger'
                data-toggle='modal'
                data-target={`#delete${video._id}`}
              >
                Delete
              </button>
            </div>
          )}
        </li>
        <YoutubeDelete video={video} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(
  mapStateToProps,
  {}
)(Youtube);
