import React, { Component } from "react";
import $ from "jquery";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// Components
import InputGroup from "../layout/InputGroup";
// Actions
import { login } from "../../actions/authActions";

class Login extends Component {
  state = {
    email: "",
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
    const { email, password } = this.state;

    if (email === "") {
      this.setState({
        error: "Email is required"
      });
      return;
    }

    if (password === "") {
      this.setState({
        error: "Password is required"
      });
      return;
    }

    const user = { email, password };
    this.props
      .login(user)
      .then(() => {
        $("#loginModal").modal("hide");
      })
      .catch(error => {
        this.setState({
          error: "Email and password do not match our records"
        });
      });

    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    const { error, email, password } = this.state;
    return (
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
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
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={this.onSubmit}>
                <InputGroup
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="Enter Email Here..."
                  onChange={this.onChange}
                  value={email}
                />

                <InputGroup
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Enter Password Here..."
                  onChange={this.onChange}
                  value={password}
                />
                <button className="btn btn-outline-success btn-block">
                  Submit
                </button>
              </form>
              <br />
              <div className="btn-outline-secondary">
                * All MSIMBO accounts are managed by ULEM, Please contact the
                Instructor for registration
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
  { login }
)(withRouter(Login));
