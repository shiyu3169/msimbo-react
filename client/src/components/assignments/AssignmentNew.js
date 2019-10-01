import React, { useState } from "react";
import { connect } from "react-redux";
// Components
import InputGroup from "../layout/InputGroup";
// Actions
import {
  addAssignment,
  createAssignment
} from "../../actions/assignmentActions";
const AssignmentNew = ({ addAssignment, createAssignment }) => {
  const [assignment, setAssignment] = useState({
    name: "",
    due: "",
    src: ""
  });

  const { name, due, src } = assignment;

  const onChange = e =>
    setAssignment({ ...assignment, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addAssignment(assignment).then(createAssignment());
  };

  return (
    <tr>
      <th className="row">
        <div className="col-6">
          <InputGroup
            name="name"
            placeholder="Assignment Name"
            onChange={onChange}
            value={name}
          />
        </div>
        <div className="col-6">
          <InputGroup
            name="due"
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

export default connect(
  null,
  { addAssignment, createAssignment }
)(AssignmentNew);
