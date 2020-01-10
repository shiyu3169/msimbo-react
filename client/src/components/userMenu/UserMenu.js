import React from "react";
import "./UserMenu.scss";
import { connect } from "react-redux";
import { edit } from "../../actions/userActions";

const UserMenu = ({ editing, user, profile, isAuthenticated, edit }) => {
  const onClick = e => {
    e.preventDefault();
    edit();
  };

  const onCancel = () => {
    edit();
  };

  return (
    <div className="user-menu">
      {editing && (
        <button
          className="btn btn-block btn-outline-success"
          type="submit"
          form="editForm"
        >
          Submit
        </button>
      )}
      {editing && isAuthenticated && user.admin && (
        <button
          className="btn btn-block btn-outline-danger"
          type="button"
          data-toggle="modal"
          data-target="#deleteModal"
        >
          Delete
        </button>
      )}
      {editing && (
        <button
          className="btn btn-block btn-outline-danger"
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
      )}
      {!editing && isAuthenticated && (user._id === profile._id || user.admin) && (
        <button
          type="button"
          className="btn btn-block btn-outline-info"
          onClick={onClick}
        >
          Edit
        </button>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  editing: state.user.editing,
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  profile: state.user.profile
});

export default connect(mapStateToProps, { edit })(UserMenu);
