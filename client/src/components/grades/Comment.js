import React from "react";

export default function Comment({ grade }) {
    return (
        <div
            className="modal fade"
            id={`c${grade._id}`}
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Comment</h5>
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
                        <pre>{grade.comment}</pre>
                    </div>
                </div>
            </div>
        </div>
    );
}
