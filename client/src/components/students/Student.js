import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Student extends Component {
  getYear(date) {
    return new Date(date).getFullYear();
  }

  getMonth(date) {
    return new Date(date).getMonth() + 1;
  }
  render() {
    const { user } = this.props;
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-sm-3 text-center">
            <Link className="link" to={`/user/${user._id}`}>
              <img className="" alt="student" src={user.icon} width="100" />
              <p className="sw-profile">
                <b>
                  {user.firstName} {user.lastName}
                </b>
              </p>
              <p>
                {this.getMonth(user.dateCreated)}/
                {this.getYear(user.dateCreated)}
              </p>
            </Link>
          </div>
          <div className="col-sm-9">
            <p>{user.bio}</p>

            <ul className="float-right">
              {user.project && (
                <li className="list-inline-item">
                  <a
                    href={user.project}
                    className="sw-dark"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fas fa-project-diagram" />
                  </a>
                </li>
              )}
              {user.linkedin && (
                <li className="list-inline-item">
                  <a
                    href={user.linkedin}
                    className="sw-dark"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-linkedin fa-lg" />
                  </a>
                </li>
              )}
              {user.github && (
                <li className="list-inline-item">
                  <a
                    href={user.github}
                    className="sw-dark"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-github fa-lg" />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </li>
    );
  }
}

export default connect(
  null,
  {}
)(Student);
