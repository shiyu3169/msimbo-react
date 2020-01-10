import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Students.scss";
import { connect } from "react-redux";
import InputGroup from "../../components/layout/InputGroup";
import { getUsers, filterUser, changeFilter } from "../../actions/userActions";
import Student from "../../components/student/Student";
import Seasons from "../../components/seasons/Seasons";
import BackToTop from "../../components/layout/BackToTop";

class Students extends Component {
  state = {
    name: "",
    season: "",
    year: ""
  };

  componentDidMount() {
    this.props.getUsers();
  }

  onChange = async e => {
    await this.setState({
      [e.target.name]: e.target.value
    });
    this.onSubmit();
  };

  onSubmit = async () => {
    const filter = {
      name: this.state.name.toUpperCase(),
      season: this.state.season,
      year: this.state.year
    };
    await this.props.changeFilter(filter);
    this.props.filterUser();
  };

  render() {
    const { users } = this.props;
    return (
      <div>
        <div className="container">
          <h3 className="sw-red">Our Students</h3>
          <Seasons />
          <InputGroup
            name="name"
            type="text"
            placeholder="Seaching by Student Name..."
            onChange={this.onChange}
          />
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
  users: state.user.users
});

export default connect(mapStateToProps, { getUsers, filterUser, changeFilter })(
  Students
);
