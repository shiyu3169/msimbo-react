import React, { Component } from "react";
import InputGroup from "../layout/InputGroup";
import { connect } from "react-redux";
import { login } from "../../actions/userActions";
import { withRouter } from "react-router-dom";
import $ from "jquery";

class Login extends Component {
    state = {
        username: "",
        password: "",
        error: "",
        redirect: false,
        path: ""
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            error: ""
        });
    };

    onSubmit = e => {
        e.preventDefault();
        const { username, password } = this.state;

        if (username === "") {
            this.setState({
                error: "Username is required"
            });
            return;
        }

        if (password === "") {
            this.setState({
                error: "Password is required"
            });
            return;
        }

        const user = { username, password };

        this.props
            .login(user)
            .then(() => {
                $("#loginModal").modal("hide");
                // this.props.redirect(`user/${this.props.user._id}`);
                // this.setState({
                //     redirect: true,
                //     path: `user/${this.props.user._id}`
                // });
                this.props.history.push(`user/${this.props.user._id}`);
            })
            .catch(error => {
                this.setState({
                    error: "Username and password do not match our records"
                });
            });
    };

    render() {
        const { error, redirect, path } = this.state;
        // if (redirect) {
        //     return <Redirect to={path} />;
        // }
        return (
            <div
                className="modal fade"
                id="loginModal"
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
                            <h5 className="modal-title">Login</h5>
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
                            {error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )}
                            <form onSubmit={this.onSubmit}>
                                <InputGroup
                                    name="username"
                                    type="text"
                                    label="Username"
                                    placeholder="Enter Username Here..."
                                    onChange={this.onChange}
                                />
                                <InputGroup
                                    name="password"
                                    type="password"
                                    label="Password"
                                    placeholder="Enter Password Here..."
                                    onChange={this.onChange}
                                />
                                <button className="btn btn-outline-success btn-block">
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

const mapStateToProps = state => ({
    user: state.user.user
});

export default connect(
    mapStateToProps,
    { login }
)(withRouter(Login));
