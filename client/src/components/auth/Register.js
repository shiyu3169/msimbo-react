import React, { Component } from "react";
import InputGroup from "../layout/InputGroup";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Register extends Component {
    state = {
        username: "",
        password: "",
        verifyPassWord: "",
        error: "",
        redirect: false,
        path: ""
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            error: ""
        });
        console.log(e.target.name);
    };

    onSubmit = e => {
        e.preventDefault();
        const { username, password, verifyPassWord } = this.state;
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

        if (password !== verifyPassWord) {
            this.setState({
                error: "Two passwords are not match"
            });
            return;
        }

        const user = { username, password };
    };

    render() {
        const { error, redirect, path } = this.state;
        if (redirect) {
            return <Redirect push to={path} />;
        }
        return (
            <div
                className="modal fade"
                id="RegisterModal"
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
    {}
)(Register);
