import React, { Component } from "react";
import InputGroup from "../layout/InputGroup";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { register } from "../../actions/userActions";
import $ from "jquery";

class Register extends Component {
    state = {
        registerUsername: "",
        registerPassword: "",
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
        const {
            registerUsername,
            registerPassword,
            verifyPassWord
        } = this.state;

        if (registerUsername === "") {
            this.setState({
                error: "Username is required"
            });
            return;
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

        const user = { registerUsername, registerPassword };

        this.props
            .register(user)
            .then(() => {
                $("#registerModal").modal("hide");
                this.setState({
                    redirect: true,
                    path: `user/${this.props.user._id}`
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    error: "Username is taken"
                });
            });
    };

    render() {
        const { error, redirect, path } = this.state;
        if (redirect) {
            return <Redirect push to={path} />;
        }
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

const mapStateToProps = state => ({
    user: state.user.user
});

export default connect(
    mapStateToProps,
    { register }
)(Register);
