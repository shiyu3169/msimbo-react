import React, { Component } from "react";
import { connect } from "react-redux";
import { getAssignments } from "../../actions/assignmentActions";
import Assignment from "./Assignment";
import AssignmentHead from "./AssignmentHead";
import AssignmentNew from "./AssignmentNew";

class Assignments extends Component {
  componentDidMount() {
    this.props.getAssignments();
  }
  render() {
    const { assignments, creating } = this.props;
    return (
      <div className="container-fluid full-screen">
        <table className="table table-striped table-hover">
          <thead>{creating ? <AssignmentNew /> : <AssignmentHead />}</thead>
          <tbody>
            {assignments.map(assignment => (
              <Assignment key={assignment._id} assignment={assignment} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  assignments: state.assignment.assignments,
  creating: state.assignment.creating
});

export default connect(
  mapStateToProps,
  { getAssignments }
)(Assignments);
