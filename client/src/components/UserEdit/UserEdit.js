import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import InputGroup from '../layout/InputGroup';
import {
  edit,
  update,
  uploadPhoto,
  uploadResume
} from '../../actions/userActions';

const UserEdit = ({ profile, update, uploadPhoto, uploadResume }) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    bio: '',
    project: '',
    linkedin: '',
    github: '',
    image: '',
    resume: ''
  });

  const {
    firstName,
    lastName,
    email,
    bio,
    project,
    linkedin,
    github,
    image,
    resume
  } = form;

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
      github,
      image: null,
      resume: null
    });
  }, [profile]);

  const onSubmit = e => {
    e.preventDefault();
    uploadPhoto(profile._id, image);
    uploadResume(profile._id, resume);
    const newUser = {
      firstName,
      lastName,
      email,
      bio,
      project,
      linkedin,
      github,
      _id: profile._id,
      dateCreated: profile.dateCreated
    };
    update(newUser);
  };

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onUpload = e => {
    setForm({ ...form, image: e.target.files[0] });
  };

  const handleResumeUpload = e => {
    setForm({ ...form, resume: e.target.files[0] });
  };

  return (
    <form onSubmit={onSubmit} id='editForm'>
      <div className='row' id='info'>
        <div className='col-sm-5'>
          <div className='text-center'>
            <br />
            {/* <a
              className="btn btn-outline-info btn-block"
              href={
                document.location.hostname === "localhost"
                  ? `http://localhost:3100/auth/linkedin`
                  : "/auth/linkedin"
              }
            >
              Import info from LinkedIn
            </a> */}
            <InputGroup
              label='Update your image here'
              type='file'
              placeholder='only .jpg (.jpeg) and .png files are allowed for now'
              name='image'
              onChange={onUpload}
            />
            <InputGroup
              label='Update Your Resume here'
              type='file'
              placeholder='PDF file is suggested'
              name='resume'
              onChange={handleResumeUpload}
            />
          </div>
        </div>
        <div className='col-sm-7'>
          <br />
          <div>
            <InputGroup
              label='First Name'
              value={firstName}
              placeholder='Update First Name'
              name='firstName'
              onChange={onChange}
            />
            <InputGroup
              label='Last Name'
              value={lastName}
              placeholder='Update Last Name'
              name='lastName'
              onChange={onChange}
            />
            <InputGroup
              label='Email'
              value={email}
              placeholder='Update Email'
              name='email'
              type='email'
              onChange={onChange}
            />
            <p>
              <b>Register Time: </b>
              {new Date(profile.dateCreated).getMonth()} /{' '}
              {new Date(profile.dateCreated).getFullYear()}
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className='row' id='bio'>
        <div className='col-sm-5 center'>
          <h3 className='inline'>Biography</h3>
        </div>
        <div className='col-sm-7'>
          <InputGroup
            value={bio}
            placeholder='Update Biography'
            name='bio'
            onChange={onChange}
            rows='5'
          />
        </div>
      </div>
      <br />
      <br />
      <div id='links'>
        <InputGroup
          label='Project'
          value={project}
          placeholder='Update Project Link'
          name='project'
          onChange={onChange}
        />
        <InputGroup
          label='Linkedin'
          value={linkedin}
          placeholder='Update Linkedin Link'
          name='linkedin'
          onChange={onChange}
        />
        <InputGroup
          label='GitHub'
          value={github}
          placeholder='Update GitHub Link'
          name='github'
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

export default connect(mapStateToProps, {
  edit,
  update,
  uploadPhoto,
  uploadResume
})(UserEdit);
