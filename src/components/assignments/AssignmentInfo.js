import React, { Component } from "react";
import { connect } from "react-redux";
import { editAssignment } from "../../actions/assignmentActions";

class AssignmentInfo extends Component {
    onEdit = id => {
        this.props.editAssignment(id);
    };

    render() {
        const { assignment, currentUser } = this.props;
        return (
            <tr>
                <td>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={assignment.src}
                    >
                        {assignment.name}
                    </a>
                </td>
                <td>{assignment.due}</td>
                <td>
                    <div className="float-right">
                        {currentUser.admin && (
                            <button
                                className="btn btn-outline-warning"
                                onClick={this.onEdit.bind(this, assignment._id)}
                            >
                                <i className="fas fa-edit" />
                            </button>
                        )}
                    </div>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(
    mapStateToProps,
    { editAssignment }
)(AssignmentInfo);