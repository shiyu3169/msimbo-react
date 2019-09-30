import React, { Component } from "react";
import InputGroup from "../layout/InputGroup";
import { connect } from "react-redux";

class Register extends Component {
  state = {
    registerPassword: "",
    verifyPassWord: "",
    registerEmail: "",
    error: "",
    firstName: "",
    lastName: "",
    middleName: "",
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
      registerPassword,
      verifyPassWord,
      registerEmail,
      firstName,
      lastName,
      middleName
    } = this.state;

    if (registerEmail === "") {
      this.setState({
        error: "Email is required"
      });
      return;
    }

    if (registerPassword === "") {
      this.setState({
        error: "Password is required"
      });
      return;
    }

    if (firstName === "") {
      this.setState({
        error: "First name is required"
      });
      return;
    }

    if (lastName === "") {
      this.setState({
        error: "Last name is required"
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
      password: registerPassword,
      email: registerEmail,
      firstName: firstName,
      middleName: middleName,
      lastName: lastName
    };
    this.props
      .register(user)
      .then(() => {
        this.setState({
          success: true,
          registerEmail: "",
          registerPassword: "",
          verifyPassWord: "",
          firstName: "",
          lastName: "",
          middleName: ""
        });
      })
      .catch(error => {
        this.setState({
          error: "Email is taken"
        });
      });
  };

  render() {
    const {
      error,
      success,
      registerEmail,
      registerPassword,
      verifyPassWord,
      firstName,
      lastName,
      middleName
    } = this.state;
    return (
      <div
        className="modal fade"
        id="registerModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
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
              {error && <div className="alert alert-danger">{error}</div>}

              <form onSubmit={this.onSubmit}>
                <InputGroup
                  name="registerEmail"
                  type="email"
                  label="Email"
                  placeholder="Enter Email Here..."
                  onChange={this.onChange}
                  value={registerEmail}
                />
                <InputGroup
                  name="registerPassword"
                  type="password"
                  label="Password"
                  placeholder="Enter Password Here..."
                  onChange={this.onChange}
                  value={registerPassword}
                />
                <InputGroup
                  name="verifyPassWord"
                  type="password"
                  label="Verify Password"
                  placeholder="Verify Password Here..."
                  onChange={this.onChange}
                  value={verifyPassWord}
                />
                <InputGroup
                  name="firstName"
                  label="First Name"
                  placeholder="Enter Your First Name..."
                  onChange={this.onChange}
                  value={firstName}
                />
                <InputGroup
                  name="middleName"
                  label="Middle Name (optional)"
                  placeholder="Leave this empty, if you don't have a middle name..."
                  onChange={this.onChange}
                  value={middleName}
                />
                <InputGroup
                  name="lastName"
                  label="Last Name"
                  placeholder="Enter Your Last Name..."
                  onChange={this.onChange}
                  value={lastName}
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
