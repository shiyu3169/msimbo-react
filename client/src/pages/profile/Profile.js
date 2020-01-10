import React, { useEffect } from "react";
import "./Profile.scss";
import { connect } from "react-redux";
// Components
import Grades from "../../components/grades/Grades";
import UserMenu from "../../components/userMenu/UserMenu";
import UserInfo from "../../components/UserInfo/UserInfo";
import UserEdit from "../../components/profile/UserEdit";
import UserDelete from "../../components/profile/UserDelete";
import Spinner from "../../components/layout/Spinner";
// Actions
import { getUser } from "../../actions/userActions";
import { setAlert } from "../../actions/alertActions";
import ProfilePic from "../../components/profilePic/ProfilePic";
import ProfileHire from "../../components/ProfileHire/ProfileHire";
import ProfileLinks from "../../components/ProfileLinks/ProfileLinks";

const Profile = ({
  editing,
  profile,
  user,
  isAuthenticated,
  match,
  getUser,
  error,
  setAlert,
  loading
}) => {
  useEffect(() => {
    getUser(match.params.uid);
  }, [getUser, match.params.uid]);

  useEffect(() => {
    if (error) {
      setAlert(error, "danger");
    }
  }, [error, setAlert]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="profile">
      <div className="container">
        <div className="flex">
          <div className="user-panel">
            <ProfilePic />
            <ProfileHire />
            <ProfileLinks />
            <UserMenu />
          </div>
          <div>
            <div>
              {editing ? <UserEdit /> : <UserInfo />}
              {isAuthenticated && (user._id === profile._id || user.admin) && (
                <Grades />
              )}
            </div>
          </div>
        </div>
      </div>
      <UserDelete />
    </div>
  );
};

const mapStateToProps = state => ({
  editing: state.user.editing,
  user: state.auth.user,
  profile: state.user.profile,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.user.error,
  loading: state.user.loading
});

export default connect(mapStateToProps, { getUser, setAlert })(Profile);
