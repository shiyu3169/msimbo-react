import React, { useEffect } from "react";
import { connect } from "react-redux";
// Components
import Grades from "../grades/Grades";
import UserMenu from "../profile/UserMenu";
import UserInfo from "../profile/UserInfo";
import UserEdit from "../profile/UserEdit";
import UserDelete from "../profile/UserDelete";
import Spinner from "../layout/Spinner";
// Actions
import { getUser } from "../../actions/userActions";
import { setAlert } from "../../actions/alertActions";

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
    <>
      <div className="container">
        <div className="row">
          <div className="col-3 d-none d-md-block">
            <UserMenu />
          </div>
          <div className="col-sm-9">
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
    </>
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
