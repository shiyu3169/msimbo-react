import React, { Component } from "react";
import InputGroup from "../layout/InputGroup";
import { connect } from "react-redux";
import {
    addAssignment,
    createAssignment
} from "../../actions/assignmentActions";
class AssignmentNew extends Component {
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

    onSubmit = e => {
        e.preventDefault();
        const { name, due, src } = this.state;
        const { addAssignment, createAssignment } = this.props;
        const assignment = {
            name,
            due,
            src
        };
        addAssignment(assignment).then(createAssignment());
    };

    render() {
        const { createAssignment } = this.props;
        return (
            <tr>
                <th className="row">
                    <div className="col-6">
                        <InputGroup
                            name="name"
                            placeholder="Assignment Name"
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="col-6">
                        <InputGroup
                            name="due"
                            placeholder="Assignment Due Date"
                            type="date"
                            onChange={this.onChange}
                        />
                    </div>
                </th>
                <th>
                    <InputGroup
                        name="src"
                        placeholder="Assignment Source"
                        onChange={this.onChange}
                    />
                </th>
                <th>
                    <div className="float-right margin-bottom">
                        <button
                            onClick={this.onSubmit}
                            className="btn btn-outline-success"
                        >
                            Submit
                        </button>
                        <button
                            className="btn btn-outline-danger"
                            onClick={createAssignment}
                        >
                            Cancel
                        </button>
                    </div>
                </th>
            </tr>
        );
    }
}

export default connect(
    null,
    { addAssignment, createAssignment }
)(AssignmentNew);
