import React, { useEffect } from "react";
import { connect } from "react-redux";
// Components
import Assignment from "../assignments/Assignment";
import AssignmentHead from "../assignments/AssignmentHead";
import AssignmentNew from "../assignments/AssignmentNew";
import Spinner from "../layout/Spinner";
// Actions
import { getAssignments } from "../../actions/assignmentActions";

const Assignments = ({ getAssignments, assignments, creating, loading }) => {
  useEffect(() => {
    getAssignments();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  }

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
};

const mapStateToProps = state => ({
  assignments: state.assignment.assignments,
  creating: state.assignment.creating,
  loading: state.assignment.loading
});

export default connect(
  mapStateToProps,
  { getAssignments }
)(Assignments);
