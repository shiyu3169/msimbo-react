import React from "react";
import { connect } from "react-redux";
import { deleteVideo } from "../../actions/videoActions";

const VideoDelete = ({ deleteVideo, video }) => {
  const onDelete = () => {
    deleteVideo(video._id);
  };

  return (
    <div
      className="modal fade"
      id={`delete${video._id}`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Remove Playlist
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Are you sure to delete this playlist?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-danger" onClick={onDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { deleteVideo }
)(VideoDelete);
