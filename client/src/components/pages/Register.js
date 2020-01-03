import React, { useState } from "react";
import { connect } from "react-redux";
import InputGroup from "../layout/InputGroup";
// Action
import { setAlert } from "../../actions/alertActions";
import { createUser } from "../../actions/userActions";
const Register = ({ setAlert, createUser }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    password2: "",
    firstName: "",
    middleName: "",
    lastName: "",
    linkedIn: "",
    gitHub: "",
    code: ""
  });

  const {
    email,
    password,
    password2,
    firstName,
    middleName,
    lastName,
    linkedIn,
    gitHub,
    code
  } = form;

  const githubPatten = /http(s)?:\/\/(www\.)?github\.com\/[A-z0-9_-]+\/?/;
  const linkedInPattern = /http(s)?:\/\/([\w]+\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?/;

  const onChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });

    if (
      (e.target.name === "linkedIn" && !linkedInPattern.test(e.target.value)) ||
      (e.target.name === "gitHub" && !githubPatten.test(e.target.value)) ||
      (e.target.name !== "middleName" && e.target.value === "")
    ) {
      e.target.classList.add("border-danger");
      return;
    }
    e.target.classList.remove("border-danger");
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!linkedInPattern.test(form.linkedIn)) {
      setAlert("Please enter a valid LinkedIn link", "danger");
      return;
    }

    if (!githubPatten.test(form.gitHub)) {
      setAlert("Please enter a valid GitHub link", "danger");
      return;
    }
    createUser(form);
  };

  return (
    <div className="container">
      <h5>Register</h5>
      <form onSubmit={onSubmit}>
        <InputGroup
          name="email"
          type="email"
          label="Email"
          placeholder="Enter Email Here..."
          onChange={onChange}
          required
          value={email}
        />
        <InputGroup
          name="password"
          type="password"
          label="Password"
          placeholder="Enter Password Here..."
          onChange={onChange}
          required
          value={password}
        />
        <InputGroup
          name="password2"
          type="password"
          label="Verify Password"
          placeholder="Verify Password Here..."
          onChange={onChange}
          required
          value={password2}
        />
        <InputGroup
          name="firstName"
          label="First Name"
          placeholder="Enter Your First Name..."
          onChange={onChange}
          required
          value={firstName}
        />
        <InputGroup
          name="middleName"
          label="Middle Name (optional)"
          placeholder="Leave this empty, if you don't have a middle name..."
          onChange={onChange}
          value={middleName}
        />
        <InputGroup
          name="lastName"
          label="Last Name"
          placeholder="Enter Your Last Name..."
          onChange={onChange}
          required
          value={lastName}
        />
        <InputGroup
          name="linkedIn"
          label="LinkedIn"
          placeholder="Enter Your LinkedIn Profile URL..."
          onChange={onChange}
          required
          value={linkedIn}
        />
        <InputGroup
          name="gitHub"
          label="GitHub"
          placeholder="Enter Your GitHub Profile URL..."
          onChange={onChange}
          required
          value={gitHub}
        />
        <InputGroup
          name="code"
          label="Registration Code"
          placeholder="Please ask instructor for a registration code..."
          onChange={onChange}
          required
          value={code}
        />
        <button className="btn btn-success btn-block">Register</button>
      </form>
    </div>
  );
};

export default connect(null, { setAlert, createUser })(Register);
