import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// Components
import InputGroup from "../layout/InputGroup";
// Actions
import { setAlert } from "../../actions/alertActions";
import {
  addAssignment,
  createAssignment
} from "../../actions/assignmentActions";

const AssignmentNew = ({
  addAssignment,
  createAssignment,
  setAlert,
  errors
}) => {
  const [assignment, setAssignment] = useState({
    name: "",
    due: "",
    src: ""
  });

  const { name, due, src } = assignment;

  useEffect(() => {
    if (errors) {
      errors.map(error => {
        setAlert(error.msg, "danger");
      });
    }
  }, [errors]);

  const clearContent = () => {
    setAssignment({
      name: "",
      due: "",
      src: ""
    });
  };

  const onChange = e =>
    setAssignment({ ...assignment, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    addAssignment(assignment);
    // Turn off creating form
    // createAssignment();
    // clearContent();
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
          <button className="btn btn-outline-danger" onClick={createAssignment}>
            Cancel
          </button>
        </div>
      </th>
    </tr>
  );
};

const mapStateToProps = state => ({
  errors: state.assignment.error
});

export default connect(
  mapStateToProps,
  { addAssignment, createAssignment, setAlert }
)(AssignmentNew);
