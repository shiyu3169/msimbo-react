import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// Components
import InputGroup from "../layout/InputGroup";
// Actions
import { setAlert } from "../../actions/alertActions";
import {
  addAssignment,
  cancelCreateAssignment
} from "../../actions/assignmentActions";

const AssignmentNew = ({
  addAssignment,
  cancelCreateAssignment,
  setAlert,
  error
}) => {
  const [assignment, setAssignment] = useState({
    name: "",
    due: "",
    src: ""
  });

  const { name, due, src } = assignment;

  // Show alert when there is one
  useEffect(() => {
    if (error) {
      setAlert(error, "danger");
    }
  }, [error, setAlert]);

  // Close the creating modal before leaving
  useEffect(() => {
    return () => {
      console.log("cancel");
      cancelCreateAssignment();
    };
  }, [cancelCreateAssignment]);

  const onChange = e =>
    setAssignment({ ...assignment, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    addAssignment(assignment);
  };

  return (
    <tr>
      <th className="row">
        <div className="col-6">
          <InputGroup
            name="name"
            id="name"
            placeholder="Assignment Name"
            onChange={onChange}
            value={name}
          />
        </div>
        <div className="col-6">
          <InputGroup
            name="due"
            id="due"
            placeholder="Assignment Due Date"
            type="date"
            onChange={onChange}
            value={due}
          />
        </div>
      </th>
      <th>
        <InputGroup
          name="src"
          id="src"
          placeholder="Assignment Source"
          onChange={onChange}
          value={src}
        />
      </th>
      <th>
        <div className="float-right margin-bottom">
          <button onClick={onSubmit} className="btn btn-outline-success">
            Submit
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={cancelCreateAssignment}
          >
            Cancel
          </button>
        </div>
      </th>
    </tr>
  );
};

const mapStateToProps = state => ({
  error: state.assignment.error
});

export default connect(
  mapStateToProps,
  {
    addAssignment,
    setAlert,
    cancelCreateAssignment
  }
)(AssignmentNew);
