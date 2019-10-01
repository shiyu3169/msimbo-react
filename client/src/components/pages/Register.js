import React, { useState } from "react";
import InputGroup from "../layout/InputGroup";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    password2: "",
    firstName: "",
    middleName: "",
    lastName: "",
    linkedIn: "",
    gitHub: ""
  });

  const {
    email,
    password,
    password2,
    firstName,
    middleName,
    lastName,
    linkedIn,
    gitHub
  } = form;

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
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
        <InputGroup
          name="password2"
          type="password"
          label="Verify Password"
          placeholder="Verify Password Here..."
          onChange={onChange}
          value={password2}
        />
        <InputGroup
          name="firstName"
          label="First Name"
          placeholder="Enter Your First Name..."
          onChange={onChange}
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
          value={lastName}
        />
        <InputGroup
          name="linkedIn"
          label="LinkedIn"
          placeholder="Enter Your LinkedIn Profile URL..."
          onChange={onChange}
          value={linkedIn}
        />
        <InputGroup
          name="gitHub"
          label="GitHub"
          placeholder="Enter Your GitHub Profile URL..."
          onChange={onChange}
          value={gitHub}
        />
        <button className="btn btn-success btn-block">Register</button>
      </form>
    </div>
  );
};

export default Register;
