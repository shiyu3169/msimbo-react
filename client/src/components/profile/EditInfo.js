import React, { Component } from "react";
import { connect } from "react-redux";
import InputGroup from "../layout/InputGroup";

class EditInfo extends Component {
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    render() {
        const { firstName, lastName, email } = this.state;
        return (
            <form>
                <InputGroup
                    name="firstName"
                    type="text"
                    label="First Name"
                    placeholder="Enter First Name Here..."
                    onChange={this.onChange}
                    value={firstName}
                />
                <InputGroup
                    name="lastName"
                    type="text"
                    label="Last Name"
                    placeholder="Enter Last Name Here..."
                    onChange={this.onChange}
                    value={lastName}
                />
                <InputGroup
                    name="email"
                    type="text"
                    label="Email"
                    placeholder="Enter Email Here..."
                    onChange={this.onChange}
                    value={email}
                />
                <button className="btn btn-outline-success btn-block">
                    Submit
                </button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.user
});

export default connect(
    mapStateToProps,
    {}
)(EditInfo);
