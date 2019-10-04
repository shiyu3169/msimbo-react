import React from "react";
import { connect } from "react-redux";
import { HashLink as Link } from "react-router-hash-link";
// Actions
import { edit } from "../../actions/userActions";

const UserMenu = ({ editing, user, profile, isAuthenticated }) => {
  const onClick = e => {
    e.preventDefault();
    this.props.edit();
  };

  const onCancel = () => {
    this.props.edit();
  };

  return (
    <div className="position-fixed">
      <ul className="list-group-flush">
        <Link
          smooth
          to="#info"
          className="list-group-item list-group-item-action pointer"
        >
          Info
        </Link>
        <Link
          smooth
          to="#bio"
          className="list-group-item list-group-item-action pointer"
        >
          Biography
        </Link>
        <Link
          smooth
          to="#links"
          className="list-group-item list-group-item-action pointer"
        >
          Links
        </Link>

        <Link
          smooth
          to="#grade"
          className="list-group-item list-group-item-action pointer"
        >
          Grade
        </Link>
      </ul>
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
          onClick={this.onCancel}
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

export default connect(
  mapStateToProps,
  { edit }
)(UserMenu);
