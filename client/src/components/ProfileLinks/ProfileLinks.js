import React from 'react';
import './ProfileLinks.scss';
import { connect } from 'react-redux';

const ProfileLinks = ({ github, linkedin, project, resume, firstName }) => {
  return (
    <div className='profile-links'>
      {resume ? (
        <a
          className='btn'
          href={`${`data:${resume.mimeType};base64,${new Buffer(
            resume.data
          ).toString('base64')}`}`}
          download={`${firstName} Resume.pdf`}
        >
          Download My Resume
        </a>
      ) : null}
      <br />
      <a href={`${linkedin}`}>
        <i className='fab fa-linkedin fa-lg'></i> LinkedIn
      </a>
      <a href={`${github}`}>
        <i className='fab fa-github-square fa-lg'></i> GitHub
      </a>
      <a href={`${project}`}>
        <i className='fas fa-globe-americas fa-lg'></i> My Project
      </a>
    </div>
  );
};

const mapStateToProps = state => ({
  github: state.user.profile.github,
  linkedin: state.user.profile.linkedin,
  project: state.user.profile.project,
  resume: state.user.profile.resume,
  firstName: state.user.profile.firstName
});

export default connect(mapStateToProps, {})(ProfileLinks);
