import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// Components
import InputGroup from "../layout/InputGroup";
// Actions
import { login } from "../../actions/authActions";
import { setAlert } from "../../actions/alertActions";

const Login = ({ login, setAlert, error, isAuthenticated }) => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const { email, password } = form;

  useEffect(() => {
    if (error) {
      setAlert(error, "danger");
    } else {
      setForm({
        email: "",
        password: ""
      });
    }
  }, [error, setAlert, isAuthenticated]);

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login(form);
  };

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
            <form onSubmit={onSubmit}>
              <InputGroup
                name="email"
                type="email"
                label="Email"
                placeholder="Enter Email Here..."
                onChange={onChange}
                value={email}
              />

              <InputGroup
                name="password"
                type="password"
                label="Password"
                placeholder="Enter Password Here..."
                onChange={onChange}
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
};

const mapStateToProps = state => ({
  error: state.auth.error,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login, setAlert }
)(Login);
