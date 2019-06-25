import React, { Component } from 'react';
import InputGroup from '../layout/InputGroup';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import $ from 'jquery';
import { deleteGrade, updateGrade } from '../../actions/gradeActions';

class EditGrade extends Component {
  state = {
    name: '',
    score: 0,
    comment: ''
  };

  componentDidMount() {
    const { name, score, comment } = this.props.grade;
    this.setState({
      name,
      score,
      comment
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onDelete = id => {
    this.props.deleteGrade(id).then($(`#edit${id}`).modal('hide'));
  };

  handleChange = value => {
    this.setState({ comment: value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, score, comment } = this.state;
    const { _id, user } = this.props.grade;
    const grade = {
      name,
      score,
      comment,
      user,
      _id
    };
    this.props.updateGrade(grade).then($(`#edit${_id}`).modal('hide'));
  };

  render() {
    const { _id } = this.props.grade;
    const { name, score, comment } = this.state;
    return (
      <div
        className='modal fade'
        id={`edit${_id}`}
        tabIndex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-xl' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Edit Grade</h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form onSubmit={this.onSubmit}>
                <div className='row'>
                  <div className='col-6'>
                    <InputGroup
                      label='Name'
                      name='name'
                      placeholder='Grade Name...'
                      onChange={this.onChange}
                      value={name}
                    />
                  </div>
                  <div className='col-6'>
                    <InputGroup
                      label='Score'
                      name='score'
                      type='number'
                      placeholder='Grade Score...'
                      onChange={this.onChange}
                      value={score}
                    />
                  </div>
                </div>
                <ReactQuill
                  value={this.state.comment}
                  onChange={this.handleChange}
                >
                  <div className='text-area' />
                </ReactQuill>
                <div className='row'>
                  <div className='col-6'>
                    <button
                      className='btn btn-danger btn-block'
                      type='button'
                      onClick={this.onDelete.bind(this, _id)}
                    >
                      Delete
                    </button>
                  </div>
                  <div className='col-6'>
                    <button className='btn btn-success btn-block'>
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteGrade, updateGrade }
)(EditGrade);
