import React from "react";
import { connect } from "react-redux";
import { createAssignment } from "../../actions/assignmentActions";

const AssignmentHead = props => {
    return (
        <tr>
            <th>Assignment</th>
            <th>Due Date</th>
            <th>
                <div className="float-right">
                    <button
                        onClick={props.createAssignment}
                        className="btn btn-outline-primary"
                    >
                        <i className="fas fa-plus fa-lg" />
                    </button>
                </div>
            </th>
        </tr>
    );
};

export default connect(
    null,
    { createAssignment }
)(AssignmentHead);
