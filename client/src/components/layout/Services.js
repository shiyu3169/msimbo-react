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
                        />
                        <ServiceIcon
                            iconClass="fas fa-graduation-cap fa-3x"
                            title="Curriculum"
                            description="Course Schedule"
                            onClick={this.redirect.bind(this, "/curriculum")}
                        />
                        <ServiceIcon
                            iconClass="fab fa-youtube fa-3x"
                            title="Videos"
                            description="Class Videos on Youtube"
                            onClick={this.navigate.bind(
                                this,
                                "https://www.youtube.com/channel/UC9NVYFh1gs3AShriwWX7NNQ"
                            )}
                        />
                    </div>
                </section>
                <section className="services">
                    <div className="container grid-3 center">
                        <ServiceIcon
                            iconClass="fas fa-pencil-ruler fa-3x"
                            title="Assignments"
                            description="Student Assignments"
                        />
                        <ServiceIcon
                            iconClass="fas fa-archive fa-3x"
                            title="Resources"
                            description="Course slides and materials"
                        />
                        <ServiceIcon
                            iconClass="fab fa-slack fa-3x"
                            title="Slack"
                            description="Contact instructor or students"
                            onClick={this.navigate.bind(
                                this,
                                "https://msimbo.slack.com"
                            )}
                        />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Services;
