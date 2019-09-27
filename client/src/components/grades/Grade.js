import React, { Component } from "react";
import { connect } from "react-redux";
import Comment from "./Comment";
import EditGrade from "./EditGrade";
class Grade extends Component {
  render() {
    const { name, score, _id, comment } = this.props.grade;
    const { grade } = this.props;
    return (
      <tr>
        <td>
          {name}
        </td>
        <td>
          {score}
        </td>
        <td>
          {comment &&
            <button
              className="btn btn-outline-info"
              data-toggle="modal"
              data-target={`#c${_id}`}
            >
              Show Comment
            </button>}

          {this.props.currentUser.admin &&
            <button
              className="btn btn-outline-warning float-right"
              data-toggle="modal"
              data-target={`#edit${_id}`}
            >
              <i className="fas fa-edit" />
            </button>}
          <Comment grade={grade} />
          <EditGrade grade={grade} />
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps, {})(Grade);
