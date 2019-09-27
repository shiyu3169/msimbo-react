import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/userActions";
import { withRouter } from "react-router-dom";
import $ from "jquery";

class Logout extends Component {
    logout = () => {
        $("#logoutModal").modal("hide");
        this.props.logout().then(this.props.history.push("/"));
    };

    render() {
        return (
            <div
                className="modal fade"
                id="logoutModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content sw-bg-dark">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Are you sure to logout?
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
                            <div className="float-right">
                                <button
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={this.logout}
                                    className="btn btn-lg btn-danger"
                                >
                                    Yes
                                </button>{" "}
                                <button
                                    className="btn btn-lg btn-secondary"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    { logout }
)(withRouter(Logout));
