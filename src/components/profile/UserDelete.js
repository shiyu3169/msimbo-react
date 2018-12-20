import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteUser, edit } from "../../actions/userActions";
import $ from "jquery";
import { withRouter } from "react-router-dom";

class UserDelete extends Component {
    onDelete = async () => {
        const { deleteUser, profile, edit } = this.props;
        await deleteUser(profile._id);
        await edit();
        $("#deleteModal").modal("hide");
        this.props.history.push("/students");
    };

    render() {
        return (
            <div
                className="modal fade"
                id="deleteModal"
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
                                Remove Student
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
                            Are you sure to delete this account?
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={this.onDelete}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    profile: state.user.profile
});

export default connect(
    mapStateToProps,
    { deleteUser, edit }
)(withRouter(UserDelete));
