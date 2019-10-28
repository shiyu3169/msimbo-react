import React, { useState } from 'react';
import { connect } from 'react-redux';
import InputGroup from '../layout/InputGroup';
import { addGrade } from '../../actions/gradeActions';
import BraftEditor from 'braft-editor';

const NewGrade = ({ profile, addGrade }) => {
  const [form, setForm] = useState({
    name: '',
    score: 0,
    comment: ''
  });

  const onSubmit = e => {
    e.preventDefault();

    const grade = {
      ...form,
      user: profile._id
    };
    addGrade(grade);
  };

  const onChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onChangeComment = value => {
    setForm({ ...form, comment: value.toHTML() });
  };

  return (
    <div
      className="modal fade"
      id="newGrade"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-xl modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">New Grade</h5>
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
              <button className="btn btn-success btn-block mt-4">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  profile: state.user.profile
});

export default connect(
  mapStateToProps,
  { addGrade }
)(NewGrade);
