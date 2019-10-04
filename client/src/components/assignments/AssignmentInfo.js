import React from "react";
import { connect } from "react-redux";
import { editAssignment } from "../../actions/assignmentActions";

const AssignmentInfo = ({
  assignment,
  user,
  isAuthenticated,
  editAssignment
}) => {
  return (
    <tr>
      <td>
        <a target="_blank" rel="noopener noreferrer" href={assignment.src}>
          {assignment.name}
        </a>
      </td>
      <td>{assignment.due}</td>
      <td>
        <div className="float-right">
          {isAuthenticated && user.admin && (
            <button
              className="btn btn-outline-warning"
              onClick={() => editAssignment(assignment._id)}
            >
              <i className="fas fa-edit" />
            </button>
          )}
        </div>
      </td>
    </tr>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { editAssignment }
)(AssignmentInfo);
