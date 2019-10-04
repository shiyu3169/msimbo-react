import React from "react";
import { connect } from "react-redux";
// Components
import AssignmentInfo from "./AssignmentInfo";
import AssignmentEdit from "./AssignmentEdit";

const Assignment = ({ assignment, editing }) => {
  if (editing === assignment._id) {
    return <AssignmentEdit assignment={assignment} />;
  } else {
    return <AssignmentInfo assignment={assignment} />;
  }
};

const mapStateToProps = state => ({
  editing: state.assignment.editing
});

export default connect(
  mapStateToProps,
  {}
)(Assignment);
