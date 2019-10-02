import React from "react";
import { connect } from "react-redux";
// actions
import { createAssignment } from "../../actions/assignmentActions";

const AssignmentHead = ({ createAssignment, user, isAuthenticated }) => {
  return (
    <tr>
      <th>Assignment</th>
      <th>Due Date</th>
      <th>
        {isAuthenticated && user.admin && (
          <div className="float-right">
            <button
              onClick={createAssignment}
              className="btn btn-outline-primary"
            >
              <i className="fas fa-plus fa-lg" />
            </button>
          </div>
        )}
      </th>
    </tr>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { createAssignment }
)(AssignmentHead);
