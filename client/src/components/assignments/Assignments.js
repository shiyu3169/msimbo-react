import React, { Component } from "react";
import { connect } from "react-redux";
import { getAssignments } from "../../actions/assignmentActions";
import Assignment from "./Assignment";
class Assignments extends Component {
    componentDidMount() {
        this.props.getAssignments();
    }
    render() {
        const { assignments } = this.props;
        return (
            <div className="container-fluid sw-bg-white full-screen">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Assignment</th>
                            <th>Due Date</th>
                            <th>
                                <div className="float-right">
                                    <button className="btn btn-outline-primary">
                                        <i className="fas fa-plus fa-lg" />
                                    </button>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {assignments.map(assignment => (
                            <Assignment
                                key={assignment._id}
                                assignment={assignment}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    assignments: state.assignment.assignments
});

export default connect(
    mapStateToProps,
    { getAssignments }
)(Assignments);
