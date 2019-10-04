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
import { setAlert } from "../../actions/alertActions";

const AssignmentEdit = ({
  assignment,
  error,
  deleteAssignment,
  editAssignment,
  updateAssignment,
  setAlert
}) => {
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

  // Show error if there is any
  useEffect(() => {
    if (error) {
      setAlert(error, "danger");
    }
  }, [error]);

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = () => {
    const updatedAssignment = {
      name,
      src,
      due,
      _id: assignment._id
    };
    updateAssignment(updatedAssignment);
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

const mapStateToProps = state => ({
  error: state.assignment.error
});

export default connect(
  mapStateToProps,
  { editAssignment, updateAssignment, deleteAssignment, setAlert }
)(AssignmentEdit);
