import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import InputGroup from "../layout/InputGroup";
import { edit, update } from "../../actions/userActions";

const UserEdit = ({ profile, update }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
    project: "",
    linkedin: "",
    github: ""
  });

  const { firstName, lastName, email, bio, project, linkedin, github } = form;

  useEffect(() => {
    const {
      email,
      firstName,
      lastName,
      bio,
      project,
      linkedin,
      github
    } = profile;
    setForm({
      email,
      firstName,
      lastName,
      bio,
      project,
      linkedin,
      github
    });
  }, [profile]);

  const onSubmit = e => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      bio,
      project,
      linkedin,
      github,
      image: "logo.png",
      _id: profile._id,
      dateCreated: profile.dateCreated
    };
    update(user);
  };

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form onSubmit={onSubmit} id="editForm">
      <div className="row" id="info">
        <div className="col-sm-5">
          <div className="text-center">
            <img className="userImage" src="/logo.png" alt="user" />
            <br />
            <br />
            <a
              className="btn btn-outline-info btn-block"
              href={
                document.location.hostname === "localhost"
                  ? `http://localhost:3100/auth/linkedin`
                  : "/auth/linkedin"
              }
            >
              Import info from LinkedIn
            </a>
          </div>
        </div>
        <div className="col-sm-7">
          <br />
          <div>
            <InputGroup
              label="First Name"
              value={firstName}
              placeholder="Update First Name"
              name="firstName"
              onChange={onChange}
            />
            <InputGroup
              label="Last Name"
              value={lastName}
              placeholder="Update Last Name"
              name="lastName"
              onChange={onChange}
            />
            <InputGroup
              label="Email"
              value={email}
              placeholder="Update Email"
              name="email"
              type="email"
              onChange={onChange}
            />
            <p>
              <b>Register Time: </b>
              {new Date(profile.dateCreated).getMonth()} /{" "}
              {new Date(profile.dateCreated).getFullYear()}
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="row" id="bio">
        <div className="col-sm-5 center">
          <h3 className="inline">Biography</h3>
        </div>
        <div className="col-sm-7">
          <InputGroup
            value={bio}
            placeholder="Update Biography"
            name="bio"
            onChange={onChange}
            rows="5"
          />
        </div>
      </div>
      <br />
      <br />
      <div id="links">
        <InputGroup
          label="Project"
          value={project}
          placeholder="Update Project Link"
          name="project"
          onChange={onChange}
        />
        <InputGroup
          label="Linkedin"
          value={linkedin}
          placeholder="Update Linkedin Link"
          name="linkedin"
          onChange={onChange}
        />
        <InputGroup
          label="GitHub"
          value={github}
          placeholder="Update GitHub Link"
          name="github"
          onChange={onChange}
        />
        <br />
      </div>
    </form>
  );
};

const mapStateToProps = state => ({
  profile: state.user.profile
});

export default connect(
  mapStateToProps,
  { edit, update }
)(UserEdit);
