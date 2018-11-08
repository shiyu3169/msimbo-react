import React, { Component } from "react";
import { connect } from "react-redux";
import InputGroup from "../layout/InputGroup";
import { edit, update } from "../../actions/userActions";

class UserEdit extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        bio: "",
        project: "",
        linkedin: "",
        github: ""
    };
    onSubmit = e => {
        const {
            firstName,
            lastName,
            email,
            bio,
            project,
            linkedin,
            github
        } = this.state;
        e.preventDefault();
        this.props.edit();
        const user = {
            firstName,
            lastName,
            email,
            bio,
            project,
            linkedin,
            github,
            image: this.props.user.image,
            _id: this.props.user._id
        };
        this.props.update(user);
    };
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    componentDidMount() {
        const {
            email,
            firstName,
            lastName,
            bio,
            project,
            linkedin,
            github
        } = this.props.user;
        this.setState({
            email,
            firstName,
            lastName,
            bio,
            project,
            linkedin,
            github
        });
    }

    render() {
        const { user } = this.props;
        const {
            email,
            firstName,
            lastName,
            bio,
            project,
            linkedin,
            github
        } = this.state;
        return (
            <form onSubmit={this.onSubmit} id="editForm">
                <div className="row" id="info">
                    <div className="col-sm-5">
                        <div className="text-center">
                            <img
                                className="userImage"
                                src="../logo.png"
                                alt="user"
                            />
                            <br />
                            <br />
                            <button className="btn btn-outline-info btn-block">
                                Upload Image
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <br />
                        <div>
                            <InputGroup
                                label="firstName"
                                value={firstName}
                                placeholder="Update First Name"
                                name="firstName"
                                onChange={this.onChange}
                            />
                            <InputGroup
                                label="lastName"
                                value={lastName}
                                placeholder="Update Last Name"
                                name="lastName"
                                onChange={this.onChange}
                            />
                            <InputGroup
                                label="Email"
                                value={email}
                                placeholder="Update Email"
                                name="email"
                                onChange={this.onChange}
                            />
                            <p>
                                <b>Register Time: </b>
                                {new Date(user.dateCreated).getMonth()} /{" "}
                                {new Date(user.dateCreated).getFullYear()}
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row" id="bio">
                    <div className="col-sm-5 center">
                        <h3 className="inline">Biography</h3>
                    </div>
                    <div className="col-sm-7">
                        <InputGroup
                            value={bio}
                            placeholder="Update Biography"
                            name="bio"
                            onChange={this.onChange}
                            rows="5"
                        />
                    </div>
                </div>
                <br />
                <br />
                <div id="links">
                    <InputGroup
                        label="Project"
                        value={project}
                        placeholder="Update Project Link"
                        name="project"
                        onChange={this.onChange}
                    />
                    <InputGroup
                        label="Linkedin"
                        value={linkedin}
                        placeholder="Update Linkedin Link"
                        name="linkedin"
                        onChange={this.onChange}
                    />
                    <InputGroup
                        label="GitHub"
                        value={github}
                        placeholder="Update GitHub Link"
                        name="github"
                        onChange={this.onChange}
                    />
                    <br />
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.user
});

export default connect(
    mapStateToProps,
    { edit, update }
)(UserEdit);
