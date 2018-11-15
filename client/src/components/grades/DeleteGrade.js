import React, { Component } from "react";

export default class DeleteGrade extends Component {
    render() {
        const { name, _id } = this.props.grade;
        return (
            <div
                className="modal fade"
                id={`remove${_id}`}
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="exampleModalLongTitle"
                            >
                                Remove Grade
                            </h5>
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
                            Are you sure to delete <b>{name}</b>?
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-danger">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
