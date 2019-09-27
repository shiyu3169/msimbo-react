import React, { Component } from "react";
import { connect } from "react-redux";
import { edit } from "../../actions/userActions";
import $ from "jquery";

class UserMenu extends Component {
  scroll = id => {
    $("html,body").animate({
      scrollTop: $(id).offset().top
    });
  };
  onClick = e => {
    e.preventDefault();
    this.props.edit();
  };

  //   handleLinkedIn = e => {
  //     e.preventDefault();
  //     Axios.get("/auth/linkedin/callback").then(user => {
  //       console.log(user);
  //     });
  //   };

  onCancel = () => {
    this.props.edit();
  };

  render() {
    const { editing, currentUser, profile } = this.props;
    return (
      <div className="fixed">
        <ul className="list-group-flush">
          <li
            onClick={this.scroll.bind(this, "#info")}
            className="list-group-item list-group-item-action pointer">
            Info
          </li>
          <li
            onClick={this.scroll.bind(this, "#bio")}
            className="list-group-item list-group-item-action pointer">
            Biography
          </li>
          <li
            onClick={this.scroll.bind(this, "#links")}
            className="list-group-item list-group-item-action pointer">
            Links
          </li>
          <li
            onClick={this.scroll.bind(this, "#grade")}
            className="list-group-item list-group-item-action pointer">
            Grade
          </li>
        </ul>
        {editing && (
          <button
            className="btn btn-block btn-outline-success"
            type="submit"
            form="editForm">
            Submit
          </button>
        )}
        {editing && currentUser.admin && (
          <button
            className="btn btn-block btn-outline-danger"
            type="button"
            data-toggle="modal"
            data-target="#deleteModal">
            Delete
          </button>
        )}
        {editing && (
          <button
            className="btn btn-block btn-outline-danger"
            type="button"
            onClick={this.onCancel}>
            Cancel
          </button>
        )}
        {!editing && (currentUser._id === profile._id || currentUser.admin) && (
          <button
            type="button"
            className="btn btn-block btn-outline-info"
            onClick={this.onClick}>
            Edit
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  editing: state.user.editing,
  currentUser: state.user.currentUser,
  profile: state.user.profile
});

export default connect(
  mapStateToProps,
  { edit }
)(UserMenu);
