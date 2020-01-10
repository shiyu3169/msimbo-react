import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Student.scss";
import logo from "../../assets/logo.png";
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
      <div className="student text-center">
        <Link to={`/user/${user._id}`}>
          <div
            className="picture"
            style={{
              backgroundImage: `url(${
                user.image
                  ? `data:${user.image.mimeType};base64,${new Buffer(
                      user.image.data
                    ).toString("base64")}`
                  : logo
              })`
            }}
          >
            <div>Learn More</div>
          </div>
          <div>
            <strong>
              {user.firstName} {user.lastName}
            </strong>
            <p>
              {this.getMonth(user.dateCreated)}/{this.getYear(user.dateCreated)}
            </p>
          </div>
        </Link>
      </div>
    );
  }
}

export default connect(null, {})(Student);
