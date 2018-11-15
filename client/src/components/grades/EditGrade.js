import React, { Component } from "react";
import InputGroup from "../layout/InputGroup";
import { connect } from "react-redux";
import $ from "jquery";
import { deleteGrade } from "../../actions/gradeActions";

class EditGrade extends Component {
    onDelete = id => {
        this.props.deleteGrade(id).then($(`#edit${id}`).modal("hide"));
    };
    render() {
        const { _id } = this.props.grade;

        return (
            <div
                className="modal fade"
                id={`edit${_id}`}
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg" role="document">
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
                            <form>
                                <div className="row">
                                    <div className="col-6">
                                        <InputGroup
                                            label="Name"
                                            name="name"
                                            placeholder="Grade Name..."
                                        />
                                    </div>
                                    <div className="col-6">
                                        <InputGroup
                                            label="Score"
                                            name="score"
                                            type="number"
                                            placeholder="Grade Score..."
                                        />
                                    </div>
                                </div>
                                <InputGroup
                                    label="Comment"
                                    name="comment"
                                    rows="5"
                                    placeholder="Grade Comment..."
                                />
                                <div className="row">
                                    <div className="col-6">
                                        <button
                                            className="btn btn-danger btn-block"
                                            type="button"
                                            onClick={this.onDelete.bind(
                                                this,
                                                _id
                                            )}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                    <div className="col-6">
                                        <button className="btn btn-success btn-block">
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
    { deleteGrade }
)(EditGrade);
