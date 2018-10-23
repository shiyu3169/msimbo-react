import React from "react";
import ServiceIcon from "./ServiceIcon";
const Services = () => {
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
                    />
                    <ServiceIcon
                        iconClass="fab fa-youtube fa-3x"
                        title="Videos"
                        description="Class Videos on Youtube"
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
                    />
                </div>
            </section>
        </React.Fragment>
    );
};

export default Services;
