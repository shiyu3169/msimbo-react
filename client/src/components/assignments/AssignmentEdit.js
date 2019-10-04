import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// Components
import InputGroup from "../layout/InputGroup";
// Actions
import {
  editAssignment,
  deleteAssignment,
  updateAssignment
} from "../../actions/assignmentActions";

const AssignmentEdit = ({ assignment, deleteAssignment, editAssignment }) => {
  const [form, setForm] = useState({
    name: "",
    due: "",
    src: ""
  });

  const { name, due, src } = form;

  // Show current info of editing assignment
  useEffect(() => {
    setForm(assignment);
  }, [setForm, assignment]);

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = () => {
    // const { name, src, due } = this.state;
    // const assignment = {
    //   name,
    //   src,
    //   due,
    //   _id: this.props.assignment._id
    // };
    // this.props.updateAssignment(assignment).then(() => {
    //   this.props.editAssignment("");
    // });
  };

  return (
    <tr>
      <td className="row">
        <div className="col-6">
          <InputGroup
            name="name"
            value={name}
            placeholder="Assignment Name..."
            onChange={onChange}
          />
        </div>
        <div className="col-6">
          <InputGroup
            name="due"
            value={due}
            placeholder="Assignment Due Date..."
            type="date"
            onChange={onChange}
          />
        </div>
      </td>
      <td>
        <InputGroup
          name="src"
          value={src}
          placeholder="Assignment Source..."
          onChange={onChange}
        />
      </td>
      <td>
        <div className="float-right">
          <button className="btn btn-outline-success" onClick={onSubmit}>
            Submit
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => deleteAssignment(assignment._id)}
          >
            Delete
          </button>
          <button
            className="btn btn-outline-warning"
            onClick={() => editAssignment("")}
          >
            Cancel
          </button>
        </div>
      </td>
    </tr>
  );
};

export default connect(
  null,
  { editAssignment, updateAssignment, deleteAssignment }
)(AssignmentEdit);
