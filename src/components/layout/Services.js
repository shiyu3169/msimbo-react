import React, { Component } from "react";
import ServiceIcon from "./ServiceIcon";
import { Redirect } from "react-router-dom";

class Services extends Component {
  state = {
    redirect: false,
    path: ""
  };

  navigate = url => {
    var win = window.open(url, "_blank");
    win.focus();
  };

  redirect = path => {
    this.setState({
      redirect: true,
      path: path
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect push to={this.state.path} />;
    }

    return (
      <React.Fragment>
        <section className="services">
          <div className="container grid-3 center">
            <ServiceIcon
              iconClass="fas fa-users fa-3x"
              title="Students"
              description="Students list"
              onClick={this.redirect.bind(this, "/students")}
            />
            <ServiceIcon
              iconClass="fas fa-graduation-cap fa-3x"
              title="Curriculum"
              description="Course Schedule"
              onClick={this.navigate.bind(
                this,
                "https://docs.google.com/spreadsheets/d/1B34dAaxyfY_Z6an_bQ0nB8HnSewuqByvBxcy5f7-b0A/edit?usp=sharing"
              )}
            />
            <ServiceIcon
              iconClass="fab fa-youtube fa-3x"
              title="Videos"
              description="Class Videos on Youtube"
              onClick={this.redirect.bind(this, "/videos")}
            />
          </div>
        </section>
        <section className="services">
          <div className="container grid-3 center">
            <ServiceIcon
              iconClass="fas fa-pencil-ruler fa-3x"
              title="Assignments"
              description="Student Assignments"
              onClick={this.redirect.bind(this, "/assignments")}
            />
            <ServiceIcon
              iconClass="fas fa-archive fa-3x"
              title="Resources"
              description="Course slides and materials"
              onClick={this.redirect.bind(this, "/resources")}
            />
            <ServiceIcon
              iconClass="fab fa-slack fa-3x"
              title="Slack"
              description="Contact instructor or students"
              onClick={this.navigate.bind(this, "https://msimbo.slack.com")}
            />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Services;
