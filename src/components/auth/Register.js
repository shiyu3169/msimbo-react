import React, { Component } from "react";
import InputGroup from "../layout/InputGroup";
import { connect } from "react-redux";
import { register } from "../../actions/userActions";

class Register extends Component {
    state = {
        registerUsername: "",
        registerPassword: "",
        verifyPassWord: "",
        registerEmail: "",
        error: "",
        success: false
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            error: "",
            success: false
        });
    };

    onSubmit = e => {
        e.preventDefault();
        const {
            registerUsername,
            registerPassword,
            verifyPassWord,
            registerEmail
        } = this.state;

        if (registerUsername === "") {
            this.setState({
                error: "Username is required"
            });
            return;
        }

        if (registerEmail === "") {
            this.setState({
                error: "Email is required"
            });
        }

        if (registerPassword === "") {
            this.setState({
                error: "Password is required"
            });
            return;
        }

        if (registerPassword !== verifyPassWord) {
            this.setState({
                error: "Two passwords are not match"
            });
            return;
        }

        const user = {
            username: registerUsername,
            password: registerPassword,
            email: registerEmail
        };
        this.props
            .register(user)
            .then(() => {
                this.setState({
                    success: true,
                    registerUsername: "",
                    registerPassword: "",
                    email: "",
                    verifyPassWord: ""
                });
            })
            .catch(error => {
                this.setState({
                    error: "Username is taken"
                });
            });
    };

    render() {
        const { error, success } = this.state;
        return (
            <div
                className="modal fade"
                id="registerModal"
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
                            <h5 className="modal-title">Register</h5>
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
                            {success && (
                                <div className="alert alert-success">
                                    Registration Successfully!
                                </div>
                            )}
                            {error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={this.onSubmit}>
                                <InputGroup
                                    name="registerUsername"
                                    type="text"
                                    label="Username"
                                    placeholder="Enter Username Here..."
                                    onChange={this.onChange}
                                />
                                <InputGroup
                                    name="registerEmail"
                                    type="email"
                                    label="Email"
                                    placeholder="Enter Email Here..."
                                    onChange={this.onChange}
                                />
                                <InputGroup
                                    name="registerPassword"
                                    type="password"
                                    label="Password"
                                    placeholder="Enter Password Here..."
                                    onChange={this.onChange}
                                />
                                <InputGroup
                                    name="verifyPassWord"
                                    type="password"
                                    label="Verify Password"
                                    placeholder="Verify Password Here..."
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

export default connect(
    null,
    { register }
)(Register);
