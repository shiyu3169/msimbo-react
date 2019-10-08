import React from "react";
import { connect } from "react-redux";
import { deleteUser } from "../../actions/userActions";
import { withRouter } from "react-router-dom";

const UserDelete = ({ deleteUser, profile, history }) => {
  return (
    <div
      className="modal fade"
      id="deleteModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="Confirm Deleting"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Remove Student
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
          <div className="modal-body">Are you sure to delete this account?</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => deleteUser(profile._id, history)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  profile: state.user.profile
});

export default connect(
  mapStateToProps,
  { deleteUser }
)(withRouter(UserDelete));
