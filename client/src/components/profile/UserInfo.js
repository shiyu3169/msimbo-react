import React, { Component } from "react";
import { connect } from "react-redux";

class UserInfo extends Component {
    render() {
        const { user } = this.props;
        return (
            <React.Fragment>
                <div className="text-center">
                    <p>
                        <b>Name: </b>
                        {user.firstName} {user.lastName}
                    </p>
                    <p className="sw-profile">
                        <b>Email: </b>
                        {user.email}
                    </p>
                    <p>
                        <b>Register Time: </b>
                        {new Date(user.dateCreated).getMonth()} /{" "}
                        {new Date(user.dateCreated).getFullYear()}
                    </p>
                </div>
                <button className="btn btn-outline-info btn-block">
                    Edit Profile
                </button>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.user
});

export default connect(
    mapStateToProps,
    {}
)(UserInfo);
