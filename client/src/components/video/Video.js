import React from "react";
import { connect } from "react-redux";
import VideoDelete from "./VideoDelete";

const Video = ({ video, isAuthenticated, user }) => {
  return (
    <>
      <li className="list-group-item">
        <a target="_blank" rel="noopener noreferrer" href={video.src}>
          {video.name}
        </a>
        {isAuthenticated && user.admin && (
          <div className="float-right">
            <button
              className="btn btn-outline-danger"
              data-toggle="modal"
              data-target={`#delete${video._id}`}
            >
              Delete
            </button>
          </div>
        )}
      </li>
      <VideoDelete video={video} />
    </>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {}
)(Video);
