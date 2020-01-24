import React from 'react';
import './UserInfo.scss';
import { connect } from 'react-redux';
import moment from 'moment';

const UserInfo = ({ profile }) => {
  return (
    <div className='user-info'>
      <h1>
        {profile.firstName} {profile.lastName}
      </h1>

      <p>
        <b>Join Msimbo in: </b>
        {moment(profile.dateCreated).format('MMM. YYYY')}
      </p>
      <hr />
      <div>
        <div>
          <p>{profile.bio}</p>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

const mapStateToProps = state => ({
  profile: state.user.profile
});

export default connect(mapStateToProps, {})(UserInfo);
