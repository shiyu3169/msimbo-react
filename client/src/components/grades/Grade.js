import React from "react";
import { connect } from "react-redux";
import Comment from "./Comment";
import EditGrade from "./EditGrade";

const Grade = ({ grade, user }) => {
  const { name, score, _id, comment } = grade;

  return (
    <tr>
      <td>{name}</td>
      <td>{score}</td>
      <td>
        {comment && (
          <button
            className="btn btn-outline-info"
            data-toggle="modal"
            data-target={`#c${_id}`}
          >
            Show Comment
          </button>
        )}

        {user.admin && (
          <button
            className="btn btn-outline-warning float-right"
            data-toggle="modal"
            data-target={`#edit${_id}`}
          >
            <i className="fas fa-edit" />
          </button>
        )}
        <Comment grade={grade} />
        <EditGrade grade={grade} />
      </td>
    </tr>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Grade);
