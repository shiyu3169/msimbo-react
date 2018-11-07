import React, { Component } from "react";
import { connect } from "react-redux";

class UserBio extends Component {
    render() {
        const { user } = this.props;

        return (
            <React.Fragment>
                <h4>
                    <b>Biography</b>
                </h4>
                <p>{user.bio}</p>
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
)(UserBio);
