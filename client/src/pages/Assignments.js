import React, { useEffect } from "react";
import { connect } from "react-redux";
// Components
import Assignment from "../components/assignments/Assignment";
import AssignmentHead from "../components/assignments/AssignmentHead";
import AssignmentNew from "../components/assignments/AssignmentNew";
import Spinner from "../components/layout/Spinner";
// Actions
import { getAssignments } from "../actions/assignmentActions";
import { setAlert } from "../actions/alertActions";

const Assignments = ({
  getAssignments,
  assignments,
  creating,
  created,
  loading,
  setAlert
}) => {
  useEffect(() => {
    getAssignments();
    if (created) {
      setAlert("Assignment Created", "success");
    }
  }, [created, setAlert, getAssignments]);

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
  loading: state.assignment.loading,
  created: state.assignment.created
});

export default connect(mapStateToProps, { getAssignments, setAlert })(
  Assignments
);
