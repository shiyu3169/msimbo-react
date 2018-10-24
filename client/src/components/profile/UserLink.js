import React from "react";

export default function UserLink() {
    return (
        <React.Fragment>
            <h6>
                <i className="fas fa-project-diagram" /> Project:{" "}
                <a className="sw-profile" href="#" target="_blank">
                    project
                </a>
            </h6>
            <h6>
                <i className="fab fa-linkedin fa-lg" /> LinkedIn:{" "}
                <a className="sw-profile" href="#" target="_blank">
                    linkedin
                </a>
            </h6>
            <h6>
                <i className="fab fa-github fa-lg" /> GitHub:{" "}
                <a className="sw-profile" href="github" target="_blank">
                    github
                </a>
            </h6>
            <br />
            <button
                className="btn btn-outline-info"
                data-toggle="modal"
                data-target="#linkModal"
            >
                Edit Links
            </button>
        </React.Fragment>
    );
}
