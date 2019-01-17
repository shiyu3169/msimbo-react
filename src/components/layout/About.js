import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="sw-bg-white">
      <div className="container">
        <div className="grid-2">
          <div className="center">
            <i className="fas fa-laptop-code fa-5x" />
          </div>
          <div>
            <h3>About Us</h3>
            <p>
              Msimbo means “code” in Swahili. A twenty (20) week program for
              displaced, unemployed and underemployed workers interested
              becoming computer programmers. This programs seeks to address the
              IT industries’ issue of diversity and skilled workers. ULEM looks
              to enroll 18 students and provide a stipend for $100/ week. MSIMBO
              bootcamp trains talented, low-income individuals to become
              full-stack web developers and launch a new career. Students are
              trained in web development, effective business communication, and
              leadership. We will conduct a 20 weeks of 120 hours coding
              technology training program and the professional development for
              ULEM’s MSIMBO program.
            </p>
            <Link to="/syllabus" className="btn btn-outline-dark">
              Learn more from Syllabus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
