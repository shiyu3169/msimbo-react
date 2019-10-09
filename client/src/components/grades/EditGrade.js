import React, { useState, useEffect } from "react";
import InputGroup from "../layout/InputGroup";
import { connect } from "react-redux";
import { deleteGrade, updateGrade } from "../../actions/gradeActions";
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";

const EditGrade = ({ grade, deleteGrade, updateGrade }) => {
  const [form, setForm] = useState({
    name: "",
    score: 0,
    comment: ""
  });

  useEffect(() => {
    const { name, score, comment } = grade;
    setForm({
      name,
      score,
      comment: BraftEditor.createEditorState(comment)
    });
  }, [grade]);

  const onChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onChangeComment = value => {
    setForm({ ...form, comment: value.toHTML() });
  };

  const onSubmit = e => {
    e.preventDefault();

    const { _id, user } = grade;
    const updatedGrade = {
      ...form,
      user,
      _id
    };
    updateGrade(updatedGrade);
  };

  const { _id } = grade;

  return (
    <div
      className="modal fade"
      id={`edit${_id}`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Grade</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={onSubmit}>
              <div className="row">
                <div className="col-6">
                  <InputGroup
                    label="Name"
                    name="name"
                    placeholder="Grade Name..."
                    onChange={onChange}
                    value={form.name}
                  />
                </div>
                <div className="col-6">
                  <InputGroup
                    label="Score"
                    name="score"
                    type="number"
                    placeholder="Grade Score..."
                    onChange={onChange}
                    value={form.score}
                  />
                </div>
              </div>
              <BraftEditor value={form.comment} onChange={onChangeComment} />
              <div className="row">
                <div className="col-6">
                  <button
                    className="btn btn-danger btn-block"
                    type="button"
                    onClick={() => deleteGrade(_id)}
                  >
                    Delete
                  </button>
                </div>
                <div className="col-6">
                  <button className="btn btn-success btn-block">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { deleteGrade, updateGrade }
)(EditGrade);
