import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Students.scss";
import { connect } from "react-redux";
import { getUsers, filterUser } from "../../actions/userActions";
import Student from "../../components/student/Student";
import Seasons from "../../components/seasons/Seasons";
import BackToTop from "../../components/layout/BackToTop";

class Students extends Component {
  componentDidMount() {
    this.props.getUsers().then(() => {
      this.props.filterUser(this.props.seasons[0]);
    });
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        <div className="container">
          <h3 className="sw-red">Our Students</h3>
          <Seasons />

          <div className="students">
            {users.map(user => (
              <Student key={user._id} user={user} />
            ))}
          </div>
        </div>
        <BackToTop />
      </div>
    );
  }
}

Students.propTypes = {
  users: PropTypes.array.isRequired,
  getUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  users: state.user.users,
  seasons: state.user.seasons
});

export default connect(mapStateToProps, { getUsers, filterUser })(Students);
