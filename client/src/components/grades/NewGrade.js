import React, { Component } from "react";
import InputGroup from "../layout/InputGroup";

export default class NewGrade extends Component {
    render() {
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
                    className="modal-dialog modal-lg modal-dialog-centered"
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
                                <button className="btn btn-success btn-block">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
