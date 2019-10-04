import React, { useState } from "react";
import { connect } from "react-redux";
// Components
import InputGroup from "../layout/InputGroup";
// Actions
import {
  editAssignment,
  deleteAssignment,
  updateAssignment
} from "../../actions/assignmentActions";

const AssignmentEdit = () => {
  const [assignment, setAssignment] = useState({
    name: "",
    due: "",
    src: ""
  });

  const { name, due, src } = assignment;

  // componentDidMount() {
  //   const { name, due, src } = this.props.assignment;
  //   this.setState({
  //     name,
  //     due,
  //     src
  //   });
  // }

  const onChange = e =>
    setAssignment({ ...assignment, [e.target.name]: e.target.value });

  const onCancel = () => editAssignment("");

  const onDelete = id => deleteAssignment(id);

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
      <td>
        <InputGroup
          name="name"
          value={name}
          placeholder="Assignment Name..."
          onChange={onChange}
        />
      </td>
      <td>
        <InputGroup
          name="due"
          value={due}
          placeholder="Assignment Due Date..."
          type="date"
          onChange={onChange}
        />
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
            onClick={onDelete.bind(this, assignment._id)}
          >
            Delete
          </button>
          <button className="btn btn-outline-warning" onClick={onCancel}>
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
