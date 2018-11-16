import React, { Component } from "react";
import InputGroup from "../layout/InputGroup";
import { connect } from "react-redux";
import {
    editAssignment,
    deleteAssignment,
    updateAssignment
} from "../../actions/assignmentActions";
class AssignmentEdit extends Component {
    state = {
        name: "",
        due: "",
        src: ""
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onCancel = () => {
        this.props.editAssignment("");
    };

    onDelete = id => {
        this.props.deleteAssignment(id);
    };

    onSubmit = () => {};

    render() {
        const { assignment } = this.props;
        return (
            <tr>
                <td>
                    <InputGroup
                        name="name"
                        value={assignment.name}
                        placeholder="Assignment Name..."
                        onChange={this.onChange}
                    />
                </td>
                <td>
                    <InputGroup
                        name="due"
                        value={assignment.due}
                        placeholder="Assignment Due Date..."
                        type="date"
                        onChange={this.onChange}
                    />
                </td>
                <td>
                    <InputGroup
                        name="src"
                        value={assignment.src}
                        placeholder="Assignment Source..."
                        onChange={this.onChange}
                    />
                </td>
                <td>
                    <div className="float-right">
                        <button className="btn btn-outline-success">
                            Submit
                        </button>
                        <button
                            className="btn btn-outline-danger"
                            onClick={this.onDelete.bind(this, assignment._id)}
                        >
                            Delete
                        </button>
                        <button
                            className="btn btn-outline-warning"
                            onClick={this.onCancel}
                        >
                            Cancel
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default connect(
    null,
    { editAssignment, updateAssignment, deleteAssignment }
)(AssignmentEdit);
